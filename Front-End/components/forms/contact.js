'use client';

import { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  // Assuming `userID` and `templateID` are passed from some part of your application
  const userID = 'PLACEHOLDER_USER_ID'; // Replace with actual UserID
  const templateID = 'PLACEHOLDER_TEMPLATE_ID'; // Replace with actual TemplateID

  const [formData, setFormData] = useState({
    UserID: userID,
    TemplateID: templateID,
    FormName: '', // This could be a static value or based on user input
    FormStructure: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    },
    // CreationDate will be set by default in the schema
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      FormStructure: {
        ...prevState.FormStructure,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Only send the fields that the backend is expecting based on the schema
      const submitData = {
        UserID: formData.UserID,
        TemplateID: formData.TemplateID,
        FormName: 'Contact Form Submission', // This is a placeholder, adjust as needed
        FormStructure: formData.FormStructure,
      };
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-forms`, submitData);
      console.log(response.data);
      // Handle success (e.g., notifying the user)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., form validation, displaying error messages)
    }
  };

  return (
    <form className="mx-auto max-w-md p-4" onSubmit={handleSubmit}>
      {/* Top Row */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Us!</h2>
      </div>

      {/* Bottom Row */}
      <div className="flex space-x-4">
        {/* Left Side */}
        <div className="w-1/2">
          <Input type="text" placeholder="First Name" name="firstName" value={formData.FormStructure.firstName} onChange={handleChange} className="mb-4" />
          <Input type="text" placeholder="Last Name" name="lastName" value={formData.FormStructure.lastName} onChange={handleChange} className="mb-4" />
          <Input type="email" placeholder="Email" name="email" value={formData.FormStructure.email} onChange={handleChange} className="mb-4" />
          <Input type="tel" placeholder="Phone Number" name="phoneNumber" value={formData.FormStructure.phoneNumber} onChange={handleChange} className="mb-4" />
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <Textarea placeholder="Message" name="message" value={formData.FormStructure.message} onChange={handleChange} className="mb-4" />
          <Button type="submit" variant="bank" size='contact'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
