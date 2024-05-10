import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import google from '../assets/google.svg';
import facebook from '../assets/facebook.svg';
import apple from '../assets/apple.svg';
import { UserAuth } from '../../config/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';


const Create = () => {
  const [value, setValue] = useState();
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
  const {signInWithGoogle, signInWithFacebook, createUserWithEmailPassword, user} = UserAuth();



    // Define the validation schema
    const validationSchema = yup.object().shape({
      firstname: yup.string().required('First Name is required'),
      lastname: yup.string().required('Last Name is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      password: yup.string().required('password is required'),
      confirmpassword: yup.string().required('confirm password is required')
    });
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState('signup');
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error)
    }
  }

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/')
    }
  },[user])

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setValidationErrors({});
    setShowRequiredMessage(false);
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createUserWithEmailPassword(values.firstname, values.lastname, values);
        setMessage('Account created successfully!');
        setSubmitted(true);
        resetForm();
      } catch (error) {
        setMessage(`Error: ${error.message}`);
        setSubmitted(true);
      }
    },
    
  });

  // const handleInputChange = (field, value) => {
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [field]: value,
  //   }));
  // };

  // const handleSignUp = async () => {
  //   // Validate the form
  //   const errors = {};
  //   let hasError = false;

  //   // Check if password and confirm password match
  //   if (formValues.password !== formValues.confirmPassword) {
  //     errors.confirmPassword = true;
  //     hasError = true;
  //   }
  
  //   // Check if the checkbox is checked
  //   if (!formValues.agreeTerms) {
  //     errors.agreeTerms = true;
  //     hasError = true;
  //   }

  //   setValidationErrors(errors);
  
  //   if (hasError) {
  //     setShowRequiredMessage(true);
  //   } else {
  //     try {
  //       // Call the createUserWithEmailPassword function
  //       await createUserWithEmailPassword(formValues.email, formValues.password);
  
  //       // Continue with signup logic (optional)
  
  //       // Reset form and validation state
  //       setFormValues({
  //         firstname: '',
  //         lastname: '',
  //         email: '',
  //         password: '',
  //         confirmPassword: '',
  //         agreeTerms: false,
  //       });
  //       setValidationErrors({});
  //       setShowRequiredMessage(false);
  //     } catch (error) {
  //       console.error('Error creating user:', error);
  //       // Handle error (e.g., display an error message)
  //     }
  //   }
  // };
  

  const renderForm = () => {
    if (selectedOption === 'signup') {
      return (
        <form 
        onSubmit={formik.handleSubmit}
        className="max-w-sm mx-auto">

          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              FIRST NAME
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
              className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.firstname && formik.errors.firstname ? 'border-red-500' : ''
              }`}
        />
        {formik.touched.firstname && formik.errors.firstname && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.firstname}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              LAST NAME
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.lastname && formik.errors.lastname ? 'border-red-500' : ''
              }`}
        />
        {formik.touched.lastname && formik.errors.lastname && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.lastname}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`mt-1 p-2 border h-16 w-full focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`mt-1 p-2 border h-16 w-full focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
              className={`mt-1 p-2 border h-16 w-full focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.confirmpassword && formik.errors.confirmpassword ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.confirmpassword}</p>
            )}
          </div>
          <div className="mb-4 flex flex-row items-start gap-2">
            <div>
            <input type="checkbox" name="check" id="check" className='w-5 h-5 bg-white text-tahiti'/>
            </div>
            <label htmlFor="check" className='text-sm'>By clicking the “Continue” button below, you confirm that you are 18 years or older, a U.S. legal resident, and that you agree to our <a href="" className='text-taha'> Terms of Service </a> and <a href="">Privacy Policy.</a> When you participate in the Pepper Perks program, we may offer you certain financial incentives. Please review our <a href="">financial incentives</a> notice.</label>
          </div>
          <div className='flex flex-row justify-center'>
          <button 
          type='submit'
          className="bg-tahiti font-bold text-white px-12 py-3 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Sign Up
          </button>
          </div> *
        </form>
      );
    } else {
      // Render Log In form
      return (
        <div className="max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className='flex flex-row justify-center'>
          <button 
          className="bg-tahiti font-bold text-white px-12 py-3 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Sign Up
          </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="bg-tahiti text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">YOUR PEPPER PERKS AWAIT</h1>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">CONTINUE WITH SOCIAL</h1>
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
          onClick={handleFacebookSignIn}
          className="flex flex-row gap-6 border border-black py-2 px-4 rounded-3xl text-black cursor-pointer w-80">
            <img src={facebook} alt="" className='w-6 h-6'/>
            <p className='flex-start'>
            SIGN IN WITH FACEBOOK
            </p>
            </button>
          <button
          onClick={handleGoogleSignIn}
          className="flex flex-row gap-6 border border-black py-2 px-4 rounded-3xl text-black cursor-pointer w-80">
          <img src={google} alt="" className='w-6 h-6'/>
            <p className='flex-start'>
            SIGN IN WITH GOOGLE
            </p>
            </button>
          <button className="flex flex-row gap-6 border border-black py-2 px-4 rounded-3xl text-black cursor-pointer w-80">
          <img src={apple} alt="" className='w-6 h-6 '/>
            <p className='flex-start'>
            SIGN IN WITH APPLE
            </p>
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">OR CREATE YOUR ACCOUNT</h2>
        <div className="flex justify-center items-center ">
          <button onClick={() => handleOptionChange('signup')} className={`mx-2 py-2 ${selectedOption === 'signup' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'} `}>
            SIGN UP
          </button>
          <button onClick={() => handleOptionChange('login')} className={`mx-2 py-2 ${selectedOption === 'login' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'}`}>
            LOG IN
          </button>
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

export default Create;
