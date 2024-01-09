import { useRef, useState } from "react";
import Button from "./Button";
import { validateName, validateEmail, validateMessage, validateForm } from "../formValidation";
import errorIcon from '../assets/error.svg';
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const initialState = {name: '', email: '', message: ''};
  const [formInputs, setFormInputs] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialState);
  const [state, handleSubmit, reset] = useForm('xnqwjeel')
  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null) 
  };
  
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormInputs({...formInputs, [name]: value});
  }

  const handleBlur = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'name' : {
        return setFormErrors({...formErrors, [name]: validateName(value)})
      }
      case 'email' : {
        return setFormErrors({...formErrors, [name]: validateEmail(value)})
      }
      case 'message' : {
        return setFormErrors({...formErrors, [name]: validateMessage(value)})
      }
      default : {
        return
      }
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
 

    const newErrorObj = validateForm(formInputs);
   
    const firstErrorEl = Object.keys(newErrorObj).find((key) => {
      return newErrorObj[key];
    })

    if (firstErrorEl && fieldRefs[firstErrorEl].current) {
      fieldRefs[firstErrorEl].current.focus();
      setFormErrors(newErrorObj);
      return;
    }

    const formSubmit = await handleSubmit(event);
    
    setFormInputs(initialState);

    
    // do stuff to send email to me
  
  }

  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      {state.succeeded &&
        <div className="success message">Your Message was Submitted! Thank you.</div>
      }
      {
        state.errors && 
          <div className="formspree-error message">There was an error with the formSpree submission, Try again later.</div>
      }
      <div className="form-group">
        <input 
          className={formErrors.name ? 'error input': 'input'}
          type="text"
          name="name"
          label="Name text input"
          placeholder="name"
          onBlur={handleBlur}
          ref={fieldRefs.name}
          value={formInputs.name}
          onChange={handleChange}
        />
        {formErrors.name &&
          <>  
            <img className="error-icon" src={errorIcon} alt="form-error-icon"/>
            <div className='form-error'>{formErrors.name}</div>
          </>
        }
      </div>
      <div className="form-group">
        <input 
          className={formErrors.email ? 'error input': 'input'}
          type="email"
          name="email"
          label="Email input"
          placeholder="email"
          onBlur={handleBlur}
          ref={fieldRefs.email}
          value={formInputs.email}
          onChange={handleChange}
        />
        {formErrors.email &&
          <>  
            <img className="error-icon" src={errorIcon} alt="form-error-icon"/>
            <div className='form-error'>{formErrors.email}</div>
          </>
        }
      </div>
      <div className="form-group">
        <textarea 
          className={formErrors.message ? 'error input': 'input'}
          name="message"
          label="Message text area"
          placeholder="Message"
          onBlur={handleBlur}
          ref={fieldRefs.message}
          value={formInputs.message}
          onChange={handleChange}
          rows="4"
        />
        {formErrors.message &&
          <>  
            <img className="error-icon" src={errorIcon} alt="form-error-icon"/>
            <div className='form-error'>{formErrors.message}</div>
          </>
        }
      </div>
      <Button disabled={state.submitting} type="submit">Send Message</Button>
    </form>
  )
}