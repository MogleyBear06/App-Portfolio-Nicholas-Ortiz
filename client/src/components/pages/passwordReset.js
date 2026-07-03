import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, CardText } from 'react-bootstrap';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(null);
  const [resetError, setResetError] = useState(null);
  const { token } = useParams();

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setResetError("Passwords don't match.");
      setResetSuccess(null);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3003/passwordRoutes/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword }),
      });

      if (!response.ok) {
        throw new Error('Password reset failed');
      }

      setResetSuccess('Your password has been successfully reset!');
      setResetError(null);
    } catch (e) {
      setResetError('Failed to reset password');
      setResetSuccess(null);
    }
  };

  return (
    <div  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <form onSubmit={handleResetPassword}>
        <Card className="card-body"
          style={{
            overflow: 'hidden',
            boxSizing: 'border-box',
            marginTop: '50%',
            width: '100%',
            marginBottom: '50%',
            position: 'relative',
            color: 'white',
            borderRadius: '10px'
          }}>

          <div>
          <h1 className='container col-12 justify-content-center'>Password Reset</h1>
          {resetSuccess ? (
            <>
            <p className='container col-12 justify-content-center'
            style={{ fontSize: '1.2rem' }}>{resetSuccess}</p>
              <p className='container col-12 justify-content-center'
              style={{ textAlign: 'center',}}
              >
                Go to
                 <Link to="/Login"
                  style={{
                    color: 'white',
                    fontWeight: 'bold', 
                    textDecoration: 'none'
                    }}
                  > Login</Link>
                </p>
            </>

  ) : (
    <>
<div className='container col-12 justify-content-center'>
  <label htmlFor="newPassword"></label>
  <h3>
    New Password
  </h3>
  <input
  className='form-control about-card-edit'
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
    type="password"
    id="newPassword"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    required
  />
</div>

<div className='container col-12 justify-content-center'>
  <label htmlFor="confirmPassword"></label>
  <h3>
  Confirm Password
  </h3>
  <input
  className='form-control about-card-edit'
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
    type="password"
    id="confirmPassword"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
  />
  </div>
  {resetError && <p className='container col-12 justify-content-center' style={{ color: 'red' }}>{resetError}</p>}
     <div
     style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px', 
      }}
     >
    <Button 
    type="submit"
    className="process-card-text hover-brighten"
    style={{
      marginTop: '1.5vmin',
      backgroundColor: 'rgb(67, 66, 66)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <h3 style={{ margin: '1%'}}>Reset Password</h3>
    </Button>
     </div>
      </>
      )}
    </div>
        </Card>
      </form>
    </div>
  );
}

export default ResetPassword;
