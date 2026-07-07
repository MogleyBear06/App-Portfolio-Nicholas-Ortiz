import { Card, Nav } from 'react-bootstrap';
import { useAuth } from "./AuthContext";
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import mainimg from "../../assets/main2.jpeg";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [searchParams] = useSearchParams();
  const linkReason = searchParams.get('reason');
  const navigate = useNavigate();

  const CF_BASE = "https://d2b3xd88n081z3.cloudfront.net";

  const linkMessages = {
    invalid: "link No Longer Valid",
    missing: "No Link Provided",
    error:   "Something went wrong. Please try again.",
  };

if (loading) {
  console.log("PrivateRoute loading");
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#2a2620"
      }}
    />
  );
}

  if (!user) {
    return (
      <div

      >
         <img src={mainimg} alt=""
           style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
              }}
         />

        <Card
          className=' container col-10 col-md-6 justify-content-center'
            style={{
      background: "rgba(89, 66, 56, 0.8)",
      backdropFilter: "blur(1px)",
      WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: `
   0 0 5px rgba(243, 174, 61, 0.6),
  0 0 10px rgba(243, 174, 61, 0.35)
`, 
      padding: "0.2rem 0.6rem",
    }}
        >
          <h2
            className="password-heading1"
            style={{ textAlign: 'center', justifyContent: 'center' }}
          >
            {linkReason && linkMessages[linkReason]
              ? linkMessages[linkReason]
              : "You must be logged in to access this page"
            }
          </h2>
                
                        <h2 className='container col-12 justify-content-center'
                        style={{ textAlign: 'center',}}
                        >
                          <Nav.Link 
                            onClick={() => { 

      navigate('/Login'); }}>
    <h4 className='hover-brighten'>RSVP</h4>
  </Nav.Link>
                          </h2>
        </Card>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;