import React from 'react';
import nick from '../../assets/Nicholas_James_Ortiz3.jpeg';

export default function About() {
  return (
    <> 
    <div className="container" 
    style={{ 
      marginTop:'2.70vmin',
      marginBottom:'5vmin',
      }}> 
    <div className='container'>
      <div>
      <h2 className="d-flex justify-content-center">About Us</h2>
    </div>
    <br></br>
    <div className='container d-flex justify-content-center'>
      <div className='card' style={{ maxWidth: '95vmin', border: 'solid', borderStyle: 'groove', borderWidth: '3px', borderColor: 'silver' }}>
        <div className='row align-items-center'>
          <div className='container col-sm-8 align-items-center'>
            <h3>Nicholas Ortiz, MS</h3>
            <h5>Founder, CEO</h5>
            <p>
              Nicholas believes that anyone with the desire to pursue a business endeavor, has the right to do so. As a result of rapid technological 
              innovation, start-ups and small businesses have an abundance of opportunity to build and scale at an unprecedented pace; 
              an exciting but potentially intimidating and overwhelming proposition. Nicholas understands this dilemma and helps entrepreneurs
              navigate this environment so they can not only achieve their goals, but enjoy their journey to success.   
            </p>
            <br></br>
            <p>
              Nicholas has a BA from the University of Texas at Austin, an MS Marketing degree
              specializing in entrepreneurship and consulting from the University of Houston,
              and a full-stack web development certificate from The University of Texas at Austin.
            </p>
          </div>
          <div className='container col-sm-4 d-flex ' style={{ maxHeight: '30vmin', maxWidth: '30vmin' }}>
            <img src={nick} alt='Nick' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

