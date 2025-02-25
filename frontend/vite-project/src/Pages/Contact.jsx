import React, {useState} from 'react'
import axios from "axios";
import 'animate.css'
import '../index.css'
import { message } from 'antd';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    interest:"",
    message:"",
    access_key:"Client Api Key",
  });

  const [status, setStatus] = useState("");
  const [tranferIcon, setTransferIcon] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("https://api.web3forms.com/submit",  {
        access_key: formData.access_key,
        subject: "New Submission from Solar Website",
        from_name: "Solar Website",
        ...formData,
      });
      if(response.data.success){
        setStatus("Message Sent Successfully");
        setTransferIcon(true)
        setFormData({
          firstName:"",
          lastName:"",
          email:"",
          phone:"",
          interest:"",
          message:"",
          access_key:"Client Api Key"
        })
      }
      else{
        setStatus("Something went Wrong.")
      }
    } catch (error) {
      setStatus("Error Sending Message.");
    }
  };


  return (
    <div className="container mx-auto px-4 pt-[120px] py-16">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <span className="text-[#1230AE] font-semibold">Contact Us</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Get Your Free Consultation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Schedule a free consultation with our solar experts and start your journey to energy independence</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="animate__animated animate__fadeInLeft">
          <div className="bg-neutral-900 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#1230AE] p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+91-8299053022, +91-8299179550, +91-9250755909
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#17594A] p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">vaibhav01enterprises@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#C84C05] p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Office Address : 1</h4>
                  <p className="text-gray-300">Ravi Nagar, Near Anjani Medical Mugalsarai, 232101
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#1230AE] p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Office Address : 2</h4>
                  <p className="text-gray-300">Bachhao, Akhari Varanasi, 221005
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight">
          <form onSubmit={handleSubmit} 
            id="formId"
            className="bg-neutral-900 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input type="hidden" name="access_key" value={formData.access_key} />                
                <input type="hidden" name="subject" value="New Submission from Solar Website"></input>
                <input type="hidden" name="from_name" value="Solar Website"/>

                <label className="block text-white mb-2">First Name*</label>

                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required
                  className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE]" />
              </div>
              <div>
                <label className="block text-white mb-2">Last Name</label>
                <input 
                  type="text"
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE]"/>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">Email Address*</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE]"/>
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">Phone Number*</label>
              <input 
                id="phone"
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE]" />
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">Interest*</label>
              <select 
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE]" >
                <option value="">Select your interest</option>
                <option value="Residential Solar">Residential Solar</option>
                <option value="Commercial Solar">Commercial Solar</option>
                <option value="Battery Storage">Battery Storage</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChangeCapture={handleChange}
                required
                rows="4"
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE]" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="w-full bg-[#1230AE] text-white py-4 rounded-lg hover:bg-[#ffffff] cursor-pointer hover:border border-[#1230AE] hover:text-[#1230AE] transition-colors" >
              Send Message
            </button>
            <div className='flex justify-center items-center mt-2'>
              <p className='text-white text-center text-sm'>{status}</p>
              {
                tranferIcon &&
                <div className="p-3 rounded-lg text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              }
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact