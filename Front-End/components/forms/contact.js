'use client'

import { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-forms`, formData);
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
          <Input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} className="mb-4" />
          <Input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className="mb-4" />
          <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="mb-4" />
          <Input type="tel" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mb-4" />
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <Textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} className="mb-4" />
          <Button type="submit" variant="bank" size='contact'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
