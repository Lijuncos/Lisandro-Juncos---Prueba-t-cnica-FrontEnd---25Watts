import { useState, useEffect } from "react";
import './Contact.css';
import ImageContact from '../assets/img/contact-image.png';
function Contact() {
  const initialValues = {username:"", email:"", phone:""};
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){

    }
  },[formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!"
    }
    if (!values.email) {
      errors.email = "E-mail is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!"
    }
    if (!values.phone) {
      errors.phone = "Phone is required!"
    }
    return errors;
  };
  
  return (
    <section id="Contact" className='contact'>
        
        <div className='contact-info'>
          <h2 className='contact-title'>Get in touch <br></br> <span className='span'>We are hiring!</span></h2>
          
          {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="contact-succes">Message sent successfully</div>) : (<div></div>) }
          <form onSubmit={handleSubmit} className='contact-form'>

            <div className="campo">
              <label className="campo-label">
                <input className="campo-field"
                  type="text" 
                  name="username" 
                  placeholder="Name" 
                  value={formValues.username}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
            
            <p>{formErrors.username}</p>

            <div className="campo">
              <label className="campo-label">
                <input className="campo-field"
                  type="email" 
                  name="email" 
                  placeholder="E-mail" 
                  value={formValues.email}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
            
            <p>{formErrors.email}</p>

            <div className="campo">
              <label className="campo-label">
                <input className="campo-field"
                  type="tel" 
                  name="phone" 
                  placeholder="Phone" 
                  value={formValues.phone}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
            
            <p>{formErrors.phone}</p>

            <div className="campo">
              <label className="campo-label">
                <textarea className="campo-field"></textarea>
              </label>
            </div>
            
            <p>{formErrors.textarea}</p>

            
            <button type="submit" className="button form-button alinear-izquierda"> Send </button>
            

          </form>
        </div>

        <img src={ImageContact} className="image-contact" alt="Image About Us"></img>
        
        
    </section>
  );
}

export default Contact;