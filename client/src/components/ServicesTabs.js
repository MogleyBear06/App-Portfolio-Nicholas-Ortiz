import React, { useState, useEffect } from 'react';
import { Carousel, Card, CardGroup, ListGroup, ListGroupItem, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";
import BringMe from "../assets/bringmelogo.jpg"
import BarkBook from "../assets/bb.jpeg"
import SecondTeam from "../assets/2ndTeamProductions.png"
import CitySlicker from "../assets/cs.jpg"
import Weatherapi from "../assets/weather.png"
import BusyBee from '../assets/Busybee.png'

function ServicesTabs({ currentPage, handlePageChange }) {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (page) => {
    setSelectedTab(page);
  };

  useEffect(() => {
    // Add a click event listener to the document's body
    const handleBodyClick = (event) => {
      // Check if the click was outside of the expanded card
      if (selectedTab && !event.target.closest('.expanded-content')) {
        setSelectedTab(null); // Return to unexpanded state
      }
    };

    // Attach the event listener when the component mounts
    document.body.addEventListener('click', handleBodyClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [selectedTab]);

  return (
    <div className="container" >
      <div className='container d-flex justify-content-center'> 
      <div className='container'>
      <div className='row align-items-center'>
      <div> 
        <h2 className="d-flex justify-content-center">Our Services</h2>
        <p>
          From validating the market to advertising, we support clients from all industry backgrounds in various
          stages of the business lifecycle. Explore our offerings to see which service areas are most relevant to 
          meeting your company's objectives.
        </p>
      </div>
      </div>
      </div>
      </div>
      <br></br>
      <br></br>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div
            className={`card ${currentPage === 'BusinessConsulting' ? 'active' : ''} ${
              selectedTab === 'BusinessConsulting' ? 'expanded' : ''
            }`}
            onClick={() => handleTabClick('BusinessConsulting')}

          >
            <div> 
            <h3 className="d-flex justify-content-center"> Business Development</h3>
            </div>
            <div className="card-body" >
            <a href="#businessconsulting" className="nav-link">
                {selectedTab !== 'BusinessConsulting' && (
                  <>
                    <p>
                      Through market research, business plan writing, and pitch deck creation, we put
                      your business in the best position possible for market uptake.
                    </p>
                  </>
                )}
              </a>
              {selectedTab === 'BusinessConsulting' && (
                <div className="expanded-content">
                  <Carousel indicators={false} interval={null}>
                    <Carousel.Item >
                      <div className="d-flex justify-content-center">
                        <h4>Market Research</h4>
                      </div>
                      <div>
                    <ul className='list-unstyled'>
                      <li>
                      <p>
                        Sourcing data from the most credible and up to date databases, we deliver specialized market
                        research reports providing stakeholders with reliable and keen insight allowing for a well-informed, decision-making
                        process. Our reports are comprehensive and comprised of the following:
                      </p>
                      </li>
                      <Card> 
                        <ListGroup>
                        <ListGroupItem>
                          Executive Summary
                        </ListGroupItem>
                        <ListGroupItem>
                          Market Size and Structure
                        </ListGroupItem>
                        <ListGroupItem>
                          Industry Trends and Drivers
                        </ListGroupItem>
                        <ListGroupItem>
                          Barriers to Entry
                        </ListGroupItem>
                        <ListGroupItem>
                          Industry News
                        </ListGroupItem>
                        <ListGroupItem>
                          Insights and Considerations
                        </ListGroupItem>
                        </ListGroup>
                      </Card>
                    </ul>
                    <ul className='list-unstyled'>
                      <li>
                      </li>
                    </ul>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="d-flex justify-content-center">
                        <h4>Business Plan Writing</h4>
                      </div>
                      <div>
                    <ul className='list-unstyled'>
                    <li>
                      <p>
                        Whether you're organizing your business' structure and objectives for internal purposes,
                        with the intent of securing a loan or raising investor capital, we generate a comprehensive 
                        document enabling you to reference all necessary information in a synthesized format. 
                        Business plans include: 
                      </p>
                      </li>
                      <Card> 
                        <ListGroup>
                        <ListGroupItem>
                         Executive Summary
                        </ListGroupItem>
                        <ListGroupItem>
                         Company Description
                        </ListGroupItem>
                        <ListGroupItem>
                         Market Analysis
                        </ListGroupItem>
                        <ListGroupItem>
                         Organization and Management
                        </ListGroupItem>
                        <ListGroupItem>
                         Service and/ or product line
                        </ListGroupItem>
                        <ListGroupItem>
                         Marketing and Sales
                        </ListGroupItem>
                        <ListGroupItem>
                         Funding Request
                        </ListGroupItem>
                        <ListGroupItem>
                         Financial Projections
                        </ListGroupItem>
                        <ListGroupItem>
                         Appendix
                        </ListGroupItem>
                        </ListGroup>
                      </Card>
                    </ul>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="d-flex justify-content-center">
                        <h4>Pitch Deck</h4>
                      </div>
                      <div>
                    <ul className='list-unstyled'>
                      <li>
                      <p>
                        Acquiring private capital via friends and family, angel investors, 
                        or venture capitalists requires comprehensive yet visually appealing 
                        material. Our pitch decks are designed to clearly convey your business' narrative and
                        objectives, inspiring confidence among potential investors. Using a problem/ solution approach, 
                        our pitch decks cover the following areas:
                      </p>
                      </li>
                      <Card> 
                        <ListGroup>
                        <ListGroupItem>
                         Company Overview
                        </ListGroupItem>
                        <ListGroupItem>
                         Problem
                        </ListGroupItem>
                        <ListGroupItem>
                         Solution
                        </ListGroupItem>
                        <ListGroupItem>
                         Solution- Company vs. Competition
                        </ListGroupItem>
                        <ListGroupItem>
                         Primary Market
                        </ListGroupItem>
                        <ListGroupItem>
                         Market Size
                        </ListGroupItem>
                        <ListGroupItem>
                         Business Model
                        </ListGroupItem>
                        <ListGroupItem>
                         Financial Projections
                        </ListGroupItem>
                        <ListGroupItem>
                         Raise and Use of Funds
                        </ListGroupItem>
                        <ListGroupItem>
                         Management Team
                        </ListGroupItem>
                        <ListGroupItem>
                         Investment Overview
                        </ListGroupItem>
                        </ListGroup>
                      </Card>
                    </ul>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`card ${currentPage === 'WebDev' ? 'active' : ''} ${
              selectedTab === 'WebDev' ? 'expanded' : ''
            }`}
            onClick={() => handleTabClick('WebDev')}
          >
            <div> 
            <h3 className="d-flex justify-content-center">Web Development</h3>
            </div>
            <div className="card-body">
              <a href="#webdev" className="nav-link">
              {selectedTab !== 'WebDev' && (
                  <>
                  <p>
                   Whether it's web design, front-end development, back-end development, or app deployment,
                   we provide an end-to-end service allowing your web application to evolve from concept to 
                   creation all in one place. 
                  </p>
                  </>
              )}
              </a>
              {selectedTab === 'WebDev' && (
                <div className="expanded-content">
                      <div className="d-flex justify-content-center">
                        <h4>Full-stack, Front-end, Back-end</h4>
                      </div>
                      <div>
                      <ul className='list-unstyled'>
                      <li>
                      <p>
                    Specializing in the MERN stack- MongoDB, Express.js, React.js, Node.js- we can transform your
                    design into a fully functional web app, take an existing design and bring it to life, or refractor existing code. Our
                    iterative process is collaborative in nature ensuring that all of our clients expectations are met. Although 
                    MERN is our most frequently used tech stack, we're well versed in a number of programming areas. Explore 
                    our sample web apps to find a solution suitable for your use case and visit our GitHub for more examples
                    showcasing our technical capabilities. 
                      </p>
                      <CardGroup className='justify-content-center align-items-center'>
                      <Card className='card-app align-content-center'>
                      <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">
                        BringMe! Is a real life treasure hunt game where user's
                        solve a riddle, take a picture of the answer and win points!</Tooltip>}
                        >
                        <a href="https://main--riddlesnap.netlify.app/" >
                        <Card.Img variant="top" src={BringMe} alt="BringMe" className="card-img"/>
                        </a>
                        </OverlayTrigger>
                      </Card>
                      <Card className='card-app align-content-center' >
                      <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">
                        BarkBook is a grooming app enabling users to find dog groomers, browse their
                        profiles and write reviews.</Tooltip>}
                        >
                      <a href="https://barkbookapp.herokuapp.com/">
                       <Card.Img variant="top" src={BarkBook} alt="BarkBook" className="card-img"/>
                      </a>
                      </OverlayTrigger>
                      </Card>
                      <Card className='card-app align-content-center'>
                      <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">
                        2nd Team Productions is a production studio as well as streaming platform for 
                        independent artists to create both short and feature length films.</Tooltip>}
                        >
                      <a href="https://secondteamproductions.com/">
                       <Card.Img variant="top" src={SecondTeam} alt="SecondTeamProductions" className="card-img"/>
                      </a>
                      </OverlayTrigger>
                      </Card>
                      </CardGroup>
                      <CardGroup className='justify-content-center align-items-center'>
                      <Card className='card-app align-content-center'>
                      <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">
                       City Slicker is an inter-city destination app providing users with optimal routes,
                       trip durations as well as destination weather data.</Tooltip>}
                        >
                        <a href="https://mogleybear06.github.io/CitySlicker/" >
                        <Card.Img variant="top" src={CitySlicker} alt="CitySlicker" className="card-img"/>
                        </a>
                        </OverlayTrigger>
                      </Card>
                      <Card className='card-app align-content-center' >
                      <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">
                       What's the Weather is a weather app allowing users to get weather for local 
                       regions as well as other places of interest.</Tooltip>}
                        >
                      <a href="https://mogleybear06.github.io/Whats-The-Weather/">
                       <Card.Img variant="top" src={Weatherapi} alt="WeatherAPI" className="card-img"/>
                      </a>
                      </OverlayTrigger>
                      </Card>
                      <Card className='card-app align-content-center'>
                      <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">
                      Busy Bee Daily Planner is a daily calender enabling users to schedule events by the hour.</Tooltip>}
                        >
                      <a href="https://mogleybear06.github.io/Busy-Bee-Daily-Planner/">
                       <Card.Img variant="top" src={BusyBee} alt="SecondTeamProductions" className="card-img"/>
                      </a>
                      </OverlayTrigger>
                      </Card>
                      </CardGroup>
                      </li>
                      </ul>
                      <footer className='centered-footer'>
                        <a href=' https://github.com/MogleyBear06' target="_blank" rel="noopener noreferrer">
                        <AiFillGithub style={{color:"white", fontSize:"40px"}}/>
                        </a>
                      </footer>
                      </div>
                    
                    {/* <Carousel.Item>
                      <div className="d-flex justify-content-center">
                      <h4>Front-end</h4>
                      </div>
                      <div>
                      <ul className='list-unstyled'>
                      <li>
                      
                      <p>
                     Our Front-end services combine a number of tools and libraries providing users with an appealing experience
                     through seamless UI. Explore our front-end web apps to acquire an understanding of our capabilities and talent.
                      </p>
                      <CardGroup className='justify-content-center align-items-center'>
                      <Card className='card-app align-content-center'>
                        <a href="https://mogleybear06.github.io/CitySlicker/" >
                        <Card.Img variant="top" src={CitySlicker} alt="CitySlicker" className="card-img"/>
                        </a>
                      </Card>
                      <Card className='card-app align-content-center' >
                      <a href="https://mogleybear06.github.io/Whats-The-Weather/">
                       <Card.Img variant="top" src={Weatherapi} alt="WeatherAPI" className="card-img"/>
                      </a>
                      </Card>
                      <Card className='card-app align-content-center'>
                      <a href="https://mogleybear06.github.io/Busy-Bee-Daily-Planner/">
                       <Card.Img variant="top" src={BusyBee} alt="SecondTeamProductions" className="card-img"/>
                      </a>
                      </Card>
                      </CardGroup>
                      </li>
                      </ul>
                      </div>
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                      <div className="d-flex justify-content-center">
                      <h4>Back-end</h4>
                      </div>
                      <div>
                      <ul className='list-unstyled'>
                      <li>
                      <p>
                       Our Back-end services range from database building and management, writing customized 
                       JavaScript functions, configuring and connecting 3rd party API's, and more. Feel free to explore and test 
                       our Back-end apps via GitHub and reach out if there's something we can build for you.
                      </p>
                      </li>
                     
                      </ul>
                      </div>
                    </Carousel.Item> */}
                  
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className={`card ${currentPage === 'DMAD' ? 'active' : ''} ${
              selectedTab === 'DMAD' ? 'expanded' : ''
            }`}
            onClick={() => handleTabClick('DMAD')}
          >
            <div> 
            <h3 className="d-flex justify-content-center"> Digital Marketing</h3>
            </div>
            <div className="card-body">
              <a href="#dmad" className="nav-link">
              {selectedTab !== 'DMAD' && (
                  <>
                  <p>
                    From SEO to PPC, we use the latest techniques and softwares to ensure your
                    brand is getting the exposure you expect and deserve.
                  </p>
                  </>
              )}
              </a>
              {selectedTab === 'DMAD' && (
                <div className="expanded-content">
                  <Carousel indicators={false} interval={null}>
                    {/* <Carousel.Item>
                      <div className="d-flex justify-content-center">
                        <h4>Digital Audit</h4>
                      </div>
                    </Carousel.Item> */}
                    <Carousel.Item>
                      <div className="d-flex justify-content-center">
                        <h4>Search Engine Optimization</h4>
                      </div>
                      <div>
                    <ul className='list-unstyled'>
                    <li>
                      <p>
                    Generating organic traffic to your site is paramount to digital marketing success. 
                    Our analysis and renovations enable our client's to secure an online presence that 
                    maximizes potential for webpage visits. Our SEO process is two-fold: a comprehensive 
                    analysis of your website's current status followed up with an implementation of enhancements 
                    based on our findings. The key deliverables for this service are:   
                      </p>
                      </li>
                      <Card>
                        <ListGroup>
                      <ListGroupItem>
                        Full Site Audit
                        </ListGroupItem>
                        <ListGroupItem>
                        Local SEO Audit
                        </ListGroupItem>
                        <ListGroupItem>
                        Keyword Research
                        </ListGroupItem>
                        <ListGroupItem>
                        Persona Development
                        </ListGroupItem>
                        <ListGroupItem>
                        Partnership Outreach
                        </ListGroupItem>
                        </ListGroup>
                      </Card>
                    
                    </ul>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="d-flex justify-content-center">
                        <h4>Pay-Per-Click</h4>
                      </div>
                      <div>
                    <ul className='list-unstyled'>
                    <li>
                      <p>
                     Navigating the intricacies of paid online advertising can be confusing and overwhelming
                     if you aren't familiar with the nuances of the practice. Specializing in Google Ads, we 
                     derive and manage online campaigns suitable to our client's industry, objectives and budget. 
                     Throughout this time, we regularly communicate with our clients to enure their brand positioning 
                     meets expectations. Our PPC service includes the following:   
                      </p>
                      </li>
                      <Card>
                        <ListGroup>
                      <ListGroupItem>
                        Google Ads Account
                        </ListGroupItem>
                        <ListGroupItem>
                        Campaign Development
                        </ListGroupItem>
                        <ListGroupItem>
                        Campaign Management
                        </ListGroupItem>
                        <ListGroupItem>
                        Weekly Status Reports
                        </ListGroupItem>
                        </ListGroup>
                      </Card>
                    </ul>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ServicesTabs;
