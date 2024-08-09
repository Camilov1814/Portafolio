import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-background-main py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading text-primary mb-6 text-center">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-heading text-primary mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:camilov1814@gmail.com" className="text-secondary hover:text-primary break-all">camilov1814@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaGithub className="text-primary mr-2 flex-shrink-0" />
                <a href="https://github.com/Camilov1814" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">GitHub</a>
              </li>
              <li className="flex items-center">
                <FaTwitter className="text-primary mr-2 flex-shrink-0" />
                <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-heading text-primary mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-secondary mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-secondary mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
