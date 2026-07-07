import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardText } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useAuth } from '../utils/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import mainimg from "../../assets/main2.jpeg";
import loginImg from "../../assets/login.jpg";
import HeroBackground from "../HeroBackground";

function Login(props) {
  const [formState, setFormState] = useState({ login: '', password: '' });
  const [error, setError] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [username, setusername] = useState('');
  const [resetError, setResetError] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const getCardStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
     });
  const navigate = useNavigate();
const { login } = useAuth();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://wedding-dek9.onrender.com/rsvp/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const { token } = await response.json();
      login(token);
      navigate('/Profile');
    } catch (e) {
      console.error(e);
      setError("The provided credentials are incorrect"); 
    }
  };

   useEffect(() => {
             const timer = setTimeout(() => {
               setCardVisible(true);
             }, 500);
             return () => clearTimeout(timer);
           }, []);

    useEffect(() => {
        const t = setTimeout(() => setShowBottom(true), 300);
        return () => clearTimeout(t);
      }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
  
    if (!username.trim()) {
      setResetError('Please enter your username address.');
      setResetSuccess(null);
      return;
    }
  
    try {
      const response = await fetch('https://wedding-dek9.onrender.com/passwordRoutes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send password reset username');
      }
  
      setResetSuccess('Please check your username and follow the instructions');
      setResetError(null);
    } catch (e) {
      setResetError('Could not reset password');
      setResetSuccess(null);
    }
  };

  const CF_BASE = "https://d3duw5o0obopn7.cloudfront.net";

  return (
    <div 
    >
 <HeroBackground image="main2.jpeg" bgColor="#2a2620" />

<div
  className="d-flex justify-content-center"
  style={{
    opacity: showBottom ? 1 : 0,
    transition: "opacity 0.6s ease",
     transitionDelay: "0s"
    
  }}
>
  <div
    style={{
       background: "rgba(89, 66, 56, 0.8)",
      backdropFilter: "blur(1px)",
      WebkitBackdropFilter: "blur(5px)",
      borderRadius: "30px",
      padding: "0.2rem 0.6rem",
          maskImage: `linear-gradient(to right, transparent, white 3%, white 90%, transparent), 
                    linear-gradient(to bottom, transparent, white 20%, white 30%, transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, white 2%, white 95%, transparent), 
                          linear-gradient(to bottom, transparent, white 25%, white 60%, transparent)`,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
    }}
  >
    <h1
      style={{
        margin: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "0",
        animation: "typing 2.5s ease-out forwards",
        color: "white",
      }}
    >
      RSVP
    </h1>
  </div>
</div>
      <form onSubmit={handleFormSubmit}>
        <Card className=' container col-10 col-md-6 justify-content-center'
          style={{
    transition: "opacity 0.6s ease",
     transitionDelay: "0s",
      ...getCardStyle(cardVisible, 0),
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
            marginBottom: '2vmin',
          }}
        >

          <div className="container justify-content-center row"
            style={{
              display: 'block', 
              flexWrap: 'wrap', 
              gap: '5%',
              
            }}
          >
            {forgotPassword ? (
              // Reset password form
              <div className="forgot-password-section col-12 justify-content-center"
              style={{
                display: 'block', 
                flexWrap: 'wrap', 
                gap: '5%',
                margin:'2%'}}
              >
                 {resetSuccess ? (
              <CardText>
                {resetSuccess}
              </CardText>
              
            ) : (
              <>
                <div className="flex col-12">
                <h2>Username</h2>
                <input
                  className='form-control about-card-edit'
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                  style={{
                    // background: 'none',
                    border: 'none',
                    color: 'silver',
                    caretColor: 'grey',
                    width: '100%',
                    maxWidth: '100%',
                    marginBottom: '10px',
                    boxSizing: 'border-box',
                    fontSize: '1.2rem',
                  }}
                />
                </div>

                <div className="col-12 flex-row flex-end">
                <Button 
                  type="button"
                  onClick={handleForgotPassword}
                  className="process-card-text hover-brighten col-12"
                  style={{
                    display: 'block',
                   
                    width: 'auto',
                    margin: '20px auto',
                    fontSize: '2.5vmin',
                    background: 'none',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ margin: '1%' }}>Reset Password</h3>
                </Button>
                </div>        
                {resetError && 
                <CardText>
                  {resetError}
                </CardText>}
                </>
                )}
              </div>
            ) : (
              // Login form
              <div className='justify-content-center row'
                style={{
                  // display: 'block', 
                  flexWrap: 'wrap', 
                  gap: '5%',
                  margin:'2%'
                }}
              >
                <div className="flex col-12">
                  <label htmlFor="login">
                    <h2>Username</h2>
                  </label>
                  <input
                    placeholder=""
                    name="login"
                    type="text"
                    id="login"
                    className="form-control about-card-edit"
                    onChange={handleChange}
                    style={{
                      background: "rgba(172, 168, 166, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: `
                    0 0 5px rgba(243, 174, 61, 0.6),
                    0 0 10px rgba(243, 174, 61, 0.35)
                  `, 
                      color: 'white',
                      caretColor: 'white',
                      width: '100%',
                      maxWidth: '100%',
                      marginBottom: '10px',
                      boxSizing: 'border-box',
                      fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                    }}
                  />
                </div>

                {/* <div className="flex col-12">
                  <label htmlFor="pwd">
                    <h2>Password</h2>
                  </label>
                  <input
                    placeholder=""
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="pwd"
                    className="form-control about-card-edit"
                    onChange={handleChange}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'silver',
                      caretColor: 'grey',
                      width: '100%',
                      maxWidth: '100%',
                      marginBottom: '10px',
                      boxSizing: 'border-box',
                      fontSize: '1.2rem',
                    }}
                  />
                  
                </div> */}
<div className="flex col-12">
  <label htmlFor="pwd">
    <h2>Password</h2>
  </label>

  <div style={{ position: 'relative', width: '100%' }}>
    <input
      placeholder=""
      name="password"
      type={showPassword ? "text" : "password"}
      id="pwd"
      className="form-control about-card-edit"
      onChange={handleChange}
      style={{
           background: "rgba(172, 168, 166, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: `
                    0 0 5px rgba(243, 174, 61, 0.6),
                    0 0 10px rgba(243, 174, 61, 0.35)
                  `, 
                      color: 'white',
                      caretColor: 'white',
        width: '100%',
        paddingRight: '40px', // 👈 space for the icon
        marginBottom: '10px',
        boxSizing: 'border-box',
        fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
      }}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'silver',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span className="eye-icon"
       style={{
    fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
    display: "flex",
    alignItems: "center",
    color: "white"
  }}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </button>
  </div>
</div>
                
                {error && (
                  <div>
                    <p className="error-text">{error}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {!forgotPassword && (
            <div className="flex col-12">
              <Button 
                type="submit" 
               className="process-card-text hover-brighten"
              style={{
                display: 'block',
                height: 'auto',
                width: 'auto',
                margin: '5px auto',
                fontSize: '2.5vmin',
                background: 'none',
                // color: !isEditing ? 'silver': '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center',
              }}
              >
                  <img
                                    src={loginImg}
                                    alt=""
                                    style={{
                                      width: "100px",
                                      borderRadius: "30px",
                                      display: "block",
                                      border: "1px solid rgba(255, 255, 255, 0.3)",
                                      boxShadow: `
                                    0 0 5px rgba(243, 174, 61, 0.6),
                                    0 0 10px rgba(243, 174, 61, 0.35)
                                  `, 
                                    }}
                                  />
              </Button>
            </div>
          )}
 

          {/* Forgot Password Button */}
          {!forgotPassword && (
            <div className="forgot-password-button d-flex justify-content-center col-12 ">
              <Button className="hover-brighten"
                onClick={() => setForgotPassword(true)}
                style={{ border: 'none', textAlign: 'center', background: 'none', cursor: 'pointer',
                  
                 }}
              >
               <h3>Forgot Password?</h3>
              </Button>
            </div>
          )}
        </Card>
      </form>
    </div>
  );
}

export default Login;
