import React, { useState } from "react";
// import { validateEmail } from "../utlls/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    serviceType: "",
    message: "",
  });

    // const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { fullName, email, serviceType, message } = formState;
    // const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('Form state before fetch:', formState);

       // setSubmitErrorMessage("");

    // // Validation logic
    // let errors = [];
    // if (!fullName) {
    //   errors.push("Name is required.");
    // }
    // if (!email) {
    //   errors.push("Email is required.");
    // } else if (!validateEmail(email)) {
    //   errors.push("Please enter a valid email.");
    // }

    // if (errors.length > 0) {
    //   setSubmitErrorMessage(errors.join(" "));
    //   return;
    // }

    try {
      const response = await fetch("https://mbkconsulting.onrender.com/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormState({
          fullName: "",
          email: "",
          serviceType: "",
          message: "",
        });
        setSubmitted(true);
        // Set the submitted state to true
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="container" style={{ 
      marginTop:'2.70vmin',
      marginBottom:'5vmin',
      }}>
      {submitted ? (
        <h4>
          Thank you for your message, we'll get back to you soon!
        </h4>
      ) : (
        <>
      <div className='container d-flex justify-content-center'> 
      <div className='container' style={{ maxWidth: "95vmin"}}>
      <div className='row align-items-center'>
      <div> 
        <h2 className="d-flex justify-content-center">Contact Us</h2>
        <h5>
          Are you interested in working with us? Send us a message and we'll get back to 
          soon.
        </h5>
      </div>
      </div>
      </div>
      </div>
          <br />
          <section className="container" style={{ maxWidth: "112vmin" }}>
            <div className="card contact-form">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-sm-10 col-md-6">
                      <div className="section">
                      <div className="col-12 col-sm-10 col-md-6">
                        <label>Name</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={handleChange}
                          name="fullName"
                          placeholder="Firstname, Lastname"
                          className="contact-text"
                        />
                        
                        </div>
                        <br></br>
                        <div className="col-12 col-sm-10 col-md-6">
                        <label>Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={handleChange}
                          name="email"
                          placeholder="johndoe@gmail.com"
                          className="contact-text"
                        />
                        </div>
                        <br></br>
                      
                        <label htmlFor="serviceType">
                          Which service would you like to learn more about?
                        </label>
                        <select
                          className="col-6 text-center contact-text"
                          placeholder="Select"
                          value={serviceType}
                          onChange={handleChange}
                          name="serviceType"
                        >
                          <option value="Business Development">Business Development</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6">
                      <div className="section">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="col-12 col-sm-10 col-md-12 contact-text"
                          value={message}
                          onChange={handleChange}
                          name="message"
                          placeholder="Tell us about your business and how we can help."
                          rows="6"
                          
                        /> 
                       <div className="col-12 col-sm-10 col-md-12">
                      <button className="button" type="submit">Submit</button>
                    </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* {errorMessage && (
                          <div>
                            <p className="error-text">{errorMessage}</p>
                          </div>
                        )} */}
                  
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Contact;
