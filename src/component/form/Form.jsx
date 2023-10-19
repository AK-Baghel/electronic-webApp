import React from 'react'
import "./style.css"

function Form() {
  return (
    <div className="formContainer">
      <div className="formSection1">
        <input type="text" className="formInput formName" placeholder='First Name' required/>
        <input type="text" className="formInput formName" placeholder='Last Name' required/>
      </div>
      <input type="text" className="formInput" placeholder='Email Address' required/>
      <input type="number" className="formInput" placeholder='Phone Number' required/>
      <input type="text" className="formInput" placeholder='Subject' required/>
      <textarea name="message" className='formInput formTextarea' placeholder='Your Message'></textarea>
      <div className="formButtonSection">
        <div className="formButton">Submit Form</div>
      </div>
    </div>
  )
}

export default Form