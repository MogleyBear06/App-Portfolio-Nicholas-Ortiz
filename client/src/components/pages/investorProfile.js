import React, {useState, useEffect, useRef} from 'react';
import { Button, Card, CardText, Carousel} from 'react-bootstrap';
import AuthService from "../utils/auth";
import { useNavigate } from "react-router-dom";
import mainimg from "../../assets/main2.jpeg";
import update from "../../assets/update.jpg";
import cancel from "../../assets/cancel.jpg";
import HeroBackground from "../HeroBackground";


function InvestorProfile() {
  const authUser = AuthService.loggedIn();  
const userId = authUser?.userId;
const currentUser = authUser;
  const [username, setusername] = useState(userId); 
  const [selectedPosition, setSelectedPosition] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [originalData, setOriginalData] = useState({}); 
  const [isEditing, setIsEditing] = useState(false);
  const [profilePreviews, setProfilePreviews] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [weddingError, setWeddingError] = useState("");
  const [weddingGuestError, setWeddingGuestError] = useState("");
  const [rehearsalError, setRehearsalError] = useState("");
  const [guestRehearsalError, setGuestRehearsalError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const [formState, setFormState] = useState({ 
    userId: '',
    email: '',
    dietary: '', 
    username: '',
    usernameguest: '',
    usernameattending: [],
    usernameattendingrehearsal: [],
    usernameguestattending: [],
    usernameguestattendingrehearsal: [],
    position: [],
    profileI: [],  
   });

 useEffect(() => {
  const fetchCrewData = async () => {
    if (!authUser) {
      console.log('authUser is null, logging out');
      AuthService.logout();
      return;
    }
    try {
      const token = AuthService.getToken(); 
      const response = await fetch(`https://wedding-dek9.onrender.com/rsvp/${authUser?.userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 403 || response.status === 401) {
        AuthService.logout();
        return;
      }
      if (!response.ok) {
        throw new Error('Failed to fetch crew data');
      }
      const data = await response.json();
      setFormState(data); 
      setOriginalData(data);
      setIsLoaded(true);
      if (data.usernameattending !== null && data.usernameattending !== undefined) {
        setIsSubmitted(true);
      } else {
        setIsEditing(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };
  fetchCrewData();
}, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {  
    let hasError = false;

    const isEmpty = (val) => 
      val === null || 
      val === undefined || 
      val === '' || 
      val === '[]' ||
      (Array.isArray(val) && val.length === 0);

    if (!formState.email || formState.email.trim() === "") {
      setEmailError("Email Required");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (isEmpty(formState.usernameattending)) {
      setWeddingError("Wedding Attendance Required");
      hasError = true;
    } else {
      setWeddingError("");
    }

    if (formState.usernameguest) {
      if (isEmpty(formState.usernameguestattending)) {
        setWeddingGuestError("Wedding Attendance Required");
        hasError = true;
      } else {
        setWeddingGuestError("");
      }
    }

    if (formState.source === 'WeddingParty') {
      if (isEmpty(formState.usernameattendingrehearsal)) {
        setRehearsalError("Rehearsal Attendance Required");
        hasError = true;
      } else {
        setRehearsalError("");
      }
      if (formState.usernameguest && isEmpty(formState.usernameguestattendingrehearsal)) {
        setGuestRehearsalError("Rehearsal Attendance Required");
        hasError = true;
      } else {
        setGuestRehearsalError("");
      }
    }

    if (hasError) return;

    const formData = new FormData();
    formData.append('email', formState.email);
    formData.append('dietary', formState.dietary || '');
    formData.append('usernameattending', formState.usernameattending);
    formData.append('usernameguestattending', formState.usernameguestattending);
    formData.append('usernameattendingrehearsal', formState.usernameattendingrehearsal);
    formData.append('usernameguestattendingrehearsal', formState.usernameguestattendingrehearsal);

    try {
      const response = await fetch(`https://wedding-dek9.onrender.com/rsvp/${userId}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        setFormState(formState);
        setIsEditing(false);
        setIsSubmitted(true);
      } else {
        console.error("Failed to save changes");
      }
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setShowBottom(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const canEdit = currentUser && currentUser.userId === userId;

  if (currentUser?.userId?.toString() !== userId?.toString()) {
    return <div style={{ padding: "20px", color: "red" }}>
      Unauthorized: You do not have permission to view this profile.
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

if (!isLoaded) {
  return (
    <div style={{ 
      height: "100vh", 
      marginTop: "10%", 
      marginRight: "25%", 
      marginLeft: "25%",
      // backgroundColor: "#2a2620" 
    }}>
       <HeroBackground image="main2.jpeg" bgColor="#2a2620" />
      <Card 
      style={{ 
        textAlign: "center", 
                background: "rgba(89, 66, 56, 0.8)",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(5px)",
            borderRadius: "30px",
             padding: "15px",
             border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
           0 0 5px rgba(243, 174, 61, 0.6),
          0 0 10px rgba(243, 174, 61, 0.35)
        `,  
        }}>
        <h1>Loading...</h1>
      </Card>
    </div>
  );
}
  if (isSubmitted) {
    return (
      <div 
      style={{ 
        marginTop: '10%', 
         marginLeft: '5%',
              marginRight: '5%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '2rem',
         }}>
        <HeroBackground image="main2.jpeg" bgColor="#2a2620" />
        <div style={{
          background: "rgba(89, 66, 56, 0.8)",
          backdropFilter: "blur(1px)",
          borderRadius: "30px",
          padding: "15px",
          textAlign: 'center',
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: `
         0 0 5px rgba(243, 174, 61, 0.6),
        0 0 10px rgba(243, 174, 61, 0.35)
      `, 
        }}>
          <h1 style={{ color: 'white', justifyContent: 'center' }}>RSVP Status</h1>
          <h3 style={{ color: 'silver', justifyContent: 'center' }}>Thank you for submitting your RSVP!</h3>
          <h3 style={{ color: 'silver', justifyContent: 'center' }}>Changes may be made until September 16th, 2026 by clicking below:</h3>
          <Button
            className="process-card-text hover-brighten"
            style={{ background: 'none', color: 'silver', border: 'none', borderRadius: '5px', padding: '0.5rem 2rem', cursor: 'pointer' }}
            onClick={() => { setIsSubmitted(false); setOriginalData(formState); setIsEditing(true); }}
          >
            <img src={update} alt="" style={{ width: "100px", borderRadius: "30px", display: "block", border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)` }} />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
 <HeroBackground image="main2.jpeg" bgColor="#2a2620" />
      <div className="d-flex justify-content-center" style={{ opacity: showBottom ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0s" }}>
        <div style={{
          background: "rgba(89, 66, 56, 0.8)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(5px)",
          borderRadius: "30px",
          padding: "0.2rem 0.6rem",
          maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
          WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}>
          <h1 style={{ margin: 0, overflow: "hidden", whiteSpace: "nowrap", width: "0", animation: "typing 2.5s ease-out forwards", color: "white" }}>RSVP</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center" style={{ opacity: showBottom ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0s" }}>
        <div style={{
          background: "rgba(89, 66, 56, 0.8)",
          flexWrap: 'wrap',
          marginLeft: '5%',
          marginRight: '5%',
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(5px)",
          borderRadius: "30px",
          padding: "0.2rem 0.6rem",
          maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
          WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}>
          <h2 className="rsvp-date-heading" style={{ margin: 0, overflow: "hidden", whiteSpace: "nowrap", width: "0", animation: "typing 2.5s ease-out forwards", color: "white", }}>Please RSVP by September 16th, 2026</h2>
        </div>
      </div>

      <>
        <>

          <div>
            <div style={{
              background: "rgba(89, 66, 56, 0.8)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(5px)",
              marginBottom: '2%',
              marginLeft: '5%',
              marginRight: '5%',
              borderRadius: "30px",
              padding: "15px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxSizing: 'border-box',
              maxWidth: '90%',
              overflowX: 'hidden',
              boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`,
            }}>

              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>Wedding</h2>
                  <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>Friday, October 16th, 2026</h2>
                </div>

                {/* Primary guest wedding attendance */}
                <div style={{
                  borderRadius: "30px",
                  padding: "0.2rem 0.6rem",
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: isSmallScreen ? 'column' : 'row',
                  alignItems: 'center',
                  justifyContent: isSmallScreen ? 'center' : 'space-between',
                  gap: '1rem',
                  textAlign: isSmallScreen ? 'center' : 'left',
                  marginBottom: '1rem',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center', 
                    justifyContent: 'center', // 👈 add this
                    // gap: '0.5rem', 
                    flexWrap: 'wrap' }}>
                    <h2 style={{ color: 'black', margin: 0 }}>{formState.username}</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <h2 style={{ margin: 0, padding: 0, borderRadius: "30px", padding: "0.2rem 0.6rem" }}>{formState.position}</h2>
                    </div>
                  </div>
                  {isEditing ? (
                     <div style={{
                      display: 'flex',
                      flexDirection: isSmallScreen ? 'column' : 'row',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: isSmallScreen ? '100%' : 'auto',
                    }}>
                      <div onClick={() => setFormState(prev => ({ ...prev, usernameattending: true }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameattending === true || formState.usernameattending === 'true' ? 'rgba(0, 180, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameattending === true || formState.usernameattending === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                        <h2 style={{ margin: 0 }}>Attending</h2>
                      </div>
                      <div onClick={() => setFormState(prev => ({ ...prev, usernameattending: false }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameattending === false || formState.usernameattending === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameattending === false || formState.usernameattending === 'false' ? '0 0 8px rgba(255,0,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                        <h2 style={{ margin: 0 }}>Not Attending</h2>
                      </div>
                    </div>
                  ) : (
                    <div style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameattending === true || formState.usernameattending === 'true' ? 'rgba(0, 180, 0, 0.6)' : formState.usernameattending === false || formState.usernameattending === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255, 0, 0, 0.3)', color: 'white', boxShadow: formState.usernameattending === true || formState.usernameattending === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : '0 0 8px rgba(255,0,0,0.4)' }}>
                      <h2 style={{ margin: 0 }}>
                        {formState.usernameattending === true || formState.usernameattending === 'true' ? 'Attending' :
                         formState.usernameattending === false || formState.usernameattending === 'false' ? 'Not Attending' : 'Please note attendance'}
                      </h2>
                    </div>
                  )}
                </div>
                {weddingError && <p className='error'>{weddingError}</p>}

                {/* Guest wedding attendance */}
                {formState.usernameguest && (
                 <div style={{
                    borderRadius: "30px",
                    padding: "0.2rem 0.6rem",
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: isSmallScreen ? 'center' : 'space-between',
                    gap: '1rem',
                    textAlign: isSmallScreen ? 'center' : 'left',
                  }}>
                    <h2 style={{ color: 'black', margin: 0 }}>{formState.usernameguest}</h2>
                    {isEditing ? (
                       <div style={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: isSmallScreen ? '100%' : 'auto',
                      }}>
                        <div onClick={() => setFormState(prev => ({ ...prev, usernameguestattending: true }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameguestattending === true || formState.usernameguestattending === 'true' ? 'rgba(0, 180, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameguestattending === true || formState.usernameguestattending === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                          <h2 style={{ margin: 0 }}>Attending</h2>
                        </div>
                        <div onClick={() => setFormState(prev => ({ ...prev, usernameguestattending: false }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameguestattending === false || formState.usernameguestattending === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameguestattending === false || formState.usernameguestattending === 'false' ? '0 0 8px rgba(255,0,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                          <h2 style={{ margin: 0 }}>Not Attending</h2>
                        </div>
                      </div>
                    ) : (
                      <div style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameguestattending === true || formState.usernameguestattending === 'true' ? 'rgba(0, 180, 0, 0.6)' : formState.usernameguestattending === false || formState.usernameguestattending === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255, 0, 0, 0.3)', color: 'white', boxShadow: formState.usernameguestattending === true || formState.usernameguestattending === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : '0 0 8px rgba(255,0,0,0.4)' }}>
                        <h2 style={{ margin: 0 }}>
                          {formState.usernameguestattending === true || formState.usernameguestattending === 'true' ? 'Attending' :
                           formState.usernameguestattending === false || formState.usernameguestattending === 'false' ? 'Not Attending' : 'Please note attendance'}
                        </h2>
                      </div>
                    )}
                  </div>
                )}
                {weddingGuestError && <p className='error' style={{ color: 'red' }}>{weddingGuestError}</p>}
              </div>

              <div>
                {formState.source === 'WeddingParty' && (
                  <>
                    <div style={{ border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`, height: '4px', background: 'rgba(255, 255, 255, 0.5)', margin: '1.5rem auto', width: '80%', borderRadius: '2px' }} />
                    <div style={{ marginBottom: '1rem' }}>
                      <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>Rehearsal Dinner</h2>
                      <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>Thursday, October 15th, 2026</h2>
                    </div>

                    {/* Primary guest rehearsal attendance */}
                   <div style={{
                      borderRadius: "30px",
                      padding: "0.2rem 0.6rem",
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: isSmallScreen ? 'column' : 'row',
                      alignItems: 'center',
                      justifyContent: isSmallScreen ? 'center' : 'space-between',
                      gap: '.7rem',
                      textAlign: isSmallScreen ? 'center' : 'left',
                      marginBottom: '1rem',
                    }}>
                      <h2 style={{ color: 'black', margin: 0 }}>{formState.username}</h2>
                      {isEditing ? (
                        <div style={{
                          display: 'flex',
                          flexDirection: isSmallScreen ? 'column' : 'row',
                          gap: '0.5rem',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: isSmallScreen ? '100%' : 'auto',
                        }}>
                          <div onClick={() => setFormState(prev => ({ ...prev, usernameattendingrehearsal: true }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameattendingrehearsal === true || formState.usernameattendingrehearsal === 'true' ? 'rgba(0, 180, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameattendingrehearsal === true || formState.usernameattendingrehearsal === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                            <h2 style={{ margin: 0 }}>Attending</h2>
                          </div>
                          <div onClick={() => setFormState(prev => ({ ...prev, usernameattendingrehearsal: false }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameattendingrehearsal === false || formState.usernameattendingrehearsal === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameattendingrehearsal === false || formState.usernameattendingrehearsal === 'false' ? '0 0 8px rgba(255,0,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                            <h2 style={{ margin: 0 }}>Not Attending</h2>
                          </div>
                        </div>
                      ) : (
                        <div style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameattendingrehearsal === true || formState.usernameattendingrehearsal === 'true' ? 'rgba(0, 180, 0, 0.6)' : formState.usernameattendingrehearsal === false || formState.usernameattendingrehearsal === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255, 0, 0, 0.3)', color: 'white', boxShadow: formState.usernameattendingrehearsal === true || formState.usernameattendingrehearsal === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : '0 0 8px rgba(255,0,0,0.4)' }}>
                          <h2 style={{ margin: 0 }}>
                            {formState.usernameattendingrehearsal === true || formState.usernameattendingrehearsal === 'true' ? 'Attending' :
                             formState.usernameattendingrehearsal === false || formState.usernameattendingrehearsal === 'false' ? 'Not Attending' : 'Please note attendance'}
                          </h2>
                        </div>
                      )}
                    </div>
                  </>
                )}
                {rehearsalError && <p className='error'>{rehearsalError}</p>}

                {formState.source === 'WeddingParty' && formState.usernameguest && (
                 <div style={{
                    borderRadius: "30px",
                    padding: "0.2rem 0.6rem",
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: isSmallScreen ? 'center' : 'space-between',
                    gap: '1rem',
                    textAlign: isSmallScreen ? 'center' : 'left',
                  }}>
                    <h2 style={{ color: 'black', margin: 0 }}>{formState.usernameguest}</h2>
                    {isEditing ? (
                       <div style={{
                          display: 'flex',
                          flexDirection: isSmallScreen ? 'column' : 'row',
                          gap: '0.5rem',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: isSmallScreen ? '100%' : 'auto',
                        }}>
                        <div onClick={() => setFormState(prev => ({ ...prev, usernameguestattendingrehearsal: true }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameguestattendingrehearsal === true || formState.usernameguestattendingrehearsal === 'true' ? 'rgba(0, 180, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameguestattendingrehearsal === true || formState.usernameguestattendingrehearsal === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                          <h2 style={{ margin: 0 }}>Attending</h2>
                        </div>
                        <div onClick={() => setFormState(prev => ({ ...prev, usernameguestattendingrehearsal: false }))} style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameguestattendingrehearsal === false || formState.usernameguestattendingrehearsal === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.usernameguestattendingrehearsal === false || formState.usernameguestattendingrehearsal === 'false' ? '0 0 8px rgba(255,0,0,0.4)' : 'none', transition: 'all 0.2s ease' }}>
                          <h2 style={{ margin: 0 }}>Not Attending</h2>
                        </div>
                      </div>
                    ) : (
                      <div style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: formState.usernameguestattendingrehearsal === true || formState.usernameguestattendingrehearsal === 'true' ? 'rgba(0, 180, 0, 0.6)' : formState.usernameguestattendingrehearsal === false || formState.usernameguestattendingrehearsal === 'false' ? 'rgba(180, 0, 0, 0.6)' : 'rgba(255, 0, 0, 0.3)', color: 'white', boxShadow: formState.usernameguestattendingrehearsal === true || formState.usernameguestattendingrehearsal === 'true' ? '0 0 8px rgba(0,255,0,0.4)' : '0 0 8px rgba(255,0,0,0.4)' }}>
                        <h2 style={{ margin: 0 }}>
                          {formState.usernameguestattendingrehearsal === true || formState.usernameguestattendingrehearsal === 'true' ? 'Attending' :
                           formState.usernameguestattendingrehearsal === false || formState.usernameguestattendingrehearsal === 'false' ? 'Not Attending' : 'Please note attendance'}
                        </h2>
                      </div>
                    )}
                  </div>
                )}
                {guestRehearsalError && <p className='error'>{guestRehearsalError}</p>}
              </div>

              <div style={{ border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`, height: '4px', background: 'rgba(255, 255, 255, 0.5)', margin: '1.5rem auto', width: '80%', borderRadius: '2px' }} />

              <div className="d-flex" style={{ opacity: showBottom ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0s", marginBottom: '2%', justifyContent: 'center',  textAlign: isSmallScreen ? 'center' : 'left', }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>Reminder</h2>
                  <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>We cannot accommodate additional guests or children.</h2>
                  <h2 style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}>Thank you for understanding!</h2>
                </div>
              </div>

              <div style={{ border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`, height: '4px', background: 'rgba(255, 255, 255, 0.5)', margin: '1.5rem auto', width: '80%', borderRadius: '2px' }} />

              <Card style={{ display: 'block', marginBottom: '2%', width: 'auto', height: 'auto', boxSizing: 'border-box', background: "none", border: 'none', padding: "0.2rem 0.6rem",  textAlign: isSmallScreen ? 'center' : 'left', }}>
                <div className="d-flex" style={{ opacity: showBottom ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0s", paddingBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0 }}>Best Email contact for wedding related updates</h2>
                  </div>
                </div>
                <div className="row gy-4">
                  {isEditing ? (
                    <div className="col-12 col-md-12 col-lg-12 d-flex flex-column align-items-start">
                      <div style={{ position: 'relative', width: '100%' }}>
                        <input
                          className="form-control about-card-edit"
                          style={{ background: 'none', border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`, color: 'silver', caretColor: 'grey', width: '100%', fontSize: '4vmin', borderRadius: "30px" }}
                          type="text"
                          name="email"
                          value={formState.email || ''}
                          onChange={handleInputChange}
                        />
                        <p className='error'>{emailError && emailError}</p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: formState.email ? 'rgba(255,255,255,0.1)' : 'rgba(180, 0, 0, 0.3)', color: 'white', boxShadow: formState.email ? 'none' : '0 0 8px rgba(255,0,0,0.3)', wordBreak: 'break-word' }}>
                      <h2 style={{ margin: 0 }}>{formState.email ? formState.email : "Please enter email"}</h2>
                    </div>
                  )}
                </div>
              </Card>

              <div style={{ border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`, height: '4px', background: 'rgba(255, 255, 255, 0.5)', margin: '1.5rem auto', width: '80%', borderRadius: '2px' }} />

              <Card style={{ display: 'block', marginBottom: '2%', width: 'auto', height: 'auto', boxSizing: 'border-box', background: "none", padding: "0.2rem 0.6rem", border: 'none',  textAlign: isSmallScreen ? 'center' : 'left', }}>
                <div className="d-flex" style={{ opacity: showBottom ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0s", paddingBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0 }}>Dietary Restrictions or Food Allergies (optional)</h2>
                  </div>
                </div>
                <div className="row gy-4">
                  {isEditing ? (
                    <div className="col-12 col-md-12 col-lg-12 d-flex flex-column align-items-start">
                      <div style={{ position: 'relative', width: '100%' }}>
                        <input
                          className="form-control about-card-edit"
                          style={{ background: "none", borderRadius: "30px", border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)`, color: 'silver', caretColor: 'grey', width: '100%', fontSize: '4vmin' }}
                          type="text"
                          name="dietary"
                          placeholder="No dietary restrictions or allergies"
                          value={formState.dietary && formState.dietary !== 'null' ? formState.dietary : ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="col-12 col-md-12 col-lg-12 d-flex flex-column align-items-start">
                      <span style={{ padding: '0.4rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.3)', background: formState.dietary ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)', color: 'white', boxShadow: formState.dietary ? 'none' : '0 0 8px rgba(255,0,0,0.3)', transition: 'all 0.2s ease' }}>
                        {formState && formState.dietary && formState.dietary !== 'null' ? formState.dietary : "No dietary restrictions or allergies"}
                      </span>
                    </div>
                  )}
                </div>
              </Card>

            </div>
          </div>
        </>
      </>

      {AuthService.loggedIn() && (
        <Card className="p-4" style={{ marginBottom: '5%', marginRight: '25%', marginLeft: '25%', width: 'auto', display: 'block', overflow: 'hidden', boxSizing: 'border-box', border: 'none', background: "none" }}>
          <div className="row gy-4">
            {isEditing && (
              <div className='col col-md-6 col-lg-6 d-flex flex-column'>
                <Button
                  className="process-card-text hover-brighten"
                  style={{ display: 'block', height: 'auto', width: 'auto', margin: '5px auto', fontSize: '2.5vmin', background: 'none', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', textAlign: 'center' }}
                  onClick={handleSaveChanges}
                >
                  <img src={update} alt="" style={{ width: "100px", borderRadius: "30px", display: "block", border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)` }} />
                </Button>
              </div>
            )}
            {canEdit && (
              <div className={`col d-flex flex-column ${!isEditing ? 'col-12' : 'col-md-6 col-lg-6'}`}>
                <Button
                  className="process-card-text hover-brighten"
                  style={{ display: 'block', height: 'auto', width: 'auto', margin: '5px auto', fontSize: '2.5vmin', background: 'none', border: 'none', borderRadius: '5px', cursor: 'pointer', textAlign: 'center' }}
                  onClick={() => {
                    if (isEditing) {
                      setFormState(originalData);
                    } else {
                      setOriginalData(formState);
                    }
                    setIsEditing((prev) => !prev);
                  }}
                  disabled={!canEdit}
                >
                  <img src={isEditing ? cancel : update} alt="" style={{ width: "100px", borderRadius: "30px", display: "block", border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: `0 0 5px rgba(243, 174, 61, 0.6), 0 0 10px rgba(243, 174, 61, 0.35)` }} />
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}

export default InvestorProfile;