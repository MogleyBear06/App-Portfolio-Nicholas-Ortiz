import React from "react";
import { AiFillGithub } from "react-icons/ai";
import BringMe from "../../../assets/bringmelogo.jpg"
import BarkBook from "../../../assets/bb.jpeg";
import CitySlicker from "../../../assets/cs.jpg"
import NiftyNote from "../../../assets/niftynote.png";
import Weatherapi from "../../../assets/weather.png";
import BusyBee from "../../../assets/Busybee.png";
import PasswordGen from "../../../assets/Passwordgenerator.png";
import SecondTeam from "../../../assets/2ndTeamProductions.png";
import { Carousel } from "react-bootstrap";
import './style.css';

function WebDev() {
  return (
    <>
      <div className="container header"> 
      <h4>Portfolio</h4>
      </div>
      <br></br>
      <div className="container d-flex intro"> 
      <p>
        Browse Nicholas' apps to see their work performed during their time in the
        Full-stack web development UT Bootcamp. Although these projects display 
        the use of several technologies, these are only a few examples of Nicholas'
        proficiencies. To see more of Nicholas' apps, visit 
        their <a href="https://github.com/MogleyBear06" target="_blank" rel="noopener noreferrer">GitHub</a> 
      </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <Carousel indicators={false}>
      <Carousel.Item>
        <div className="container featured"> 
              <h4>
                *Featured* - In Development
              </h4>
            </div>
          <div className='main-container d-flex'>
          <div className="row align-items-center">
          <div className=" container brandimg col-2"> 
          <a href="https://main--riddlesnap.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={BringMe} alt="Barkbook" className="img"/>
          </a>
          </div>
           
            <div className="p-container col-5">
            <p>
              BringMe! Is an real life treasure hunt game where user's
              solve a riddle, take a picture of the answer and win points!
            </p>
            </div>
          
          <div className="github-container col-2">
           <a href='https://github.com/MogleyBear06/BringMeRender' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}} />
           </a>
          </div>
          </div>
          </div>
          </Carousel.Item>
        
        <Carousel.Item>
        <div className="container featured"> 
              <h4>
                *Featured*
              </h4>
            </div>
          <div className='main-container d-flex'>
          <div className="row align-items-center">
          <div className=" container brandimg col-2"> 
          <a href="https://barkbookapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={BarkBook} alt="Barkbook" className="img"/>
          </a>
          </div>
           
            <div className="p-container col-5">
            <p>
              BarkBook is a grooming app enabling users to find dog groomers, browse their
              profiles and write reviews after service.
            </p>
            </div>
          
          <div className="github-container col-2">
           <a href='https://github.com/MogleyBear06/BarkBook.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}} />
           </a>
          </div>
          </div>
          </div>
          </Carousel.Item>

          <Carousel.Item>
        <div className="container featured"> 
              <h4>
                *Featured*
              </h4>
            </div>
          <div className='main-container d-flex'>
          <div className="row align-items-center">
          <div className=" container brandimg col-2"> 
          <a href="https://mogleybear06.github.io/CitySlicker/" target="_blank" rel="noopener noreferrer">
              <img src={CitySlicker} alt="cityslicker" className="img"/>
          </a>
          </div>
           
            <div className="p-container col-5">
            <p>
              City Slicker is an inter-city destination app giving users optimal routes,
              durations as well as destination weather.
            </p>
            </div>
          
          <div className="github-container col-2">
           <a href='https://github.com/MogleyBear06/CitySlicker' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}} />
           </a>
          </div>
          </div>
          </div>
          </Carousel.Item>
        
          <Carousel.Item>
          <div className="main-container">
          <div className="row align-items-center">

          <div className="container brandimg col-2">
            <a href="https://nifteynotebynick.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={NiftyNote} alt='NiftyNote'className="img"/>
            </a>
          </div>

            <div className="p-container col-5">
            <p>
              Nifty Note is a note taking app for busy bee's on the go!
            </p>
            </div>

          
          <div className="github-container col-2">
          <a href="https://github.com/MogleyBear06/Nifty-Note.git" target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}}/>
            </a>
            </div>

          </div>
          </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className="main-container">
          <div className="row align-items-center">
          <div className=" container brandimg col-2">
            <a href="https://mogleybear06.github.io/Whats-The-Weather/" target="_blank" rel="noopener noreferrer">
              <img src={Weatherapi} alt="weather api" className="img"/>
            </a>
          </div>

            <div className="p-container col-5">
            <p>
              What's the Weather is an app helping users get weather for local regions as well as destinations.
            </p>
            </div>

          
          <div className="github-container col-2">
          <a href='https://github.com/MogleyBear06/Whats-The-Weather.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}}/>
            </a>
            </div>

          </div>
          </div>
          </Carousel.Item>
        
        <Carousel.Item>
          <div className="main-container">
          <div className="row align-items-center">
          <div className=" container brandimg col-2">
            <a href="https://mogleybear06.github.io/Busy-Bee-Daily-Planner/" target="_blank" rel="noopener noreferrer">
              <img src={BusyBee} alt='busybee' className="img"/>
            </a>
          </div>

            <div className="p-container col-5">
            <p>
              Busy Bee Daily Planner is a daily calender enabling users to schedule events by the hour.
            </p>
            </div>

          
          <div className="github-container col-2">
          <a href='https://github.com/MogleyBear06/Busy-Bee-Daily-Planner.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}}/>
            </a>
            </div>

          </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-container">
          <div className="row align-items-center">
          <div className=" container brandimg col-2">
            <a href="https://mogleybear06.github.io/Password-Generator-by-Nicholas-Ortiz/" target="_blank" rel="noopener noreferrer">
              <img src={PasswordGen} alt='password generator app'className="img"/>
            </a>
          </div>

            <div className="p-container col-5">
            <p>
              The Password Generator allows users to create secure passwords at the click of a button.
            </p>
            </div>
           
          
          <div className="github-container col-2">
          <a href=' https://github.com/MogleyBear06/Password-Generator-by-Nicholas-Ortiz.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}}/>
            </a>
            </div>

          </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="main-container">
          <div className="row align-items-center">
          <div className=" container brandimg col-2">
            <a href="https://mogleybear06.github.io/Nicholas_Ortiz-Portfolio-Second-Team-Productions/" target="_blank" rel="noopener noreferrer">
              <img src={SecondTeam} alt='first portfolio' className="img"/>
            </a>
          </div>

            <div className="p-container col-5">
            <p>
              2nd Team Productions is a website for independent artists to create both short and feature lenght films.
            </p>
            </div>

          
          <div className="github-container col-2">
          <a href='https://github.com/MogleyBear06/Nicholas_Ortiz-Portfolio-Second-Team-Productions.git' target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{color:"white", fontSize:"40px"}}/>
            </a>
            </div>
          </div>
          </div>
        </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default WebDev;
