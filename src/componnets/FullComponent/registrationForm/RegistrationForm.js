import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../styles/form/regi.css';
import moment from 'moment';
import { FaCheckCircle } from 'react-icons/fa';
import video1 from '../../../assets/videos/174086-850404739_small.mp4'
import { FaPaperPlane } from 'react-icons/fa';
import Navbar from '../../header/NavBar';
import Footer from '../../footer/Footer';

const RegistrationForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    Course: '',
    Name: '',
    Phone: '',
    Email: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.Course) {
      errors.Course = 'Please select a course';
      isValid = false;
    }

    if (!formData.Name.trim()) {
      errors.Name = 'Name is required';
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.Phone)) {
      errors.Phone = 'Phone must be 10 digits';
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      errors.Email = 'Invalid email address';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('Course', formData.Course);
    formDataToSend.append('Name', formData.Name);
    formDataToSend.append('Phone', formData.Phone);
    formDataToSend.append('Email', formData.Email);
    formDataToSend.append('time', moment().format('MM/DD h:mmA'));

    console.log('Submitting data:', Object.fromEntries(formDataToSend.entries()));

    try {
      await axios.post(
        'https://script.google.com/macros/s/AKfycbzoI5cy7A5utQyhf-no4dNKEMSEH9virvLYsz5zpeHUvZ-sM1q-5AUY0Js-1kVDNweetQ/exec',
        formDataToSend
      );

      setFormData({
        Course: '',
        Name: '',
        Phone: '',
        Email: '',
      });

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 12000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsLoading(false);
  };

  return (
   <>

    <Navbar/>
     <div className="video-form-wrapper">
      <video autoPlay muted loop className="background-video">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="add-back-image-ogg-img" style={{ marginTop: '80px' }}>
        {showSuccessMessage && (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <p>Your Course Enquiry Form submitted successfully!</p>
            <p>Code4Coder team will contact you soon. Thank you for your patience.</p>
            <p>Avail an 85% discount on our courses currently!</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="formsssssssss">
          <div className="register-button-join-djebde-header button">
            <h1>Book Free Demo Class</h1>
          </div>

          <label>
            <select name="Course" value={formData.Course} onChange={handleChange} required>
              <option value="" disabled>Select a Course</option>
              <option value="Web-Development">Web Development</option>
              <option value="MERN-Stack">MERN Stack</option>
              <option value="React-JS">React JS</option>
              <option value="Java-with-DSA">Java with DSA</option>
              <option value="Python">Python</option>
            </select>
          </label>
          {formErrors.Course && <p style={{ color: 'red' }}>{formErrors.Course}</p>}

          <label>
            <input
              className="inputssppss"
              type="text"
              placeholder="Enter Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
          </label>
          {formErrors.Name && <p style={{ color: 'red' }}>{formErrors.Name}</p>}

          <label>
            <input
              className="inputssppss"
              type="text"
              placeholder="Enter Mobile No."
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
            />
          </label>
          {formErrors.Phone && <p style={{ color: 'red' }}>{formErrors.Phone}</p>}

          <label>
            <input
              className="inputssppss"
              type="email"
              placeholder="Enter Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </label>
          {formErrors.Email && <p style={{ color: 'red' }}>{formErrors.Email}</p>}

          <div>
            <button className="register-button-join-djebde buttons submit-btn" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="spinner"></span> Registering...
                </>
              ) : (
                <>
                  <FaPaperPlane style={{ marginRight: '8px' }} />
                  Register
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
   </>
   
  );
};

export default RegistrationForm;
