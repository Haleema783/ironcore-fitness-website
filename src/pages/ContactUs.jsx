// pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Your message has been sent! We'll get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-100">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about memberships, personal training, or facilities?
            Reach out and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-950 rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white ${
                    errors.name ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white ${
                    errors.email ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white ${
                    errors.phone ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white ${
                    errors.subject ? "border-red-500" : "border-gray-800"
                  }`}
                >
                  <option value="">Select a topic</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="personalTraining">Personal Training</option>
                  <option value="classes">Group Classes</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white ${
                    errors.message ? "border-red-500" : "border-gray-800"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:opacity-90 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-neutral-950 rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Reach Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li>📍 IronCore Fitness, Main Street, Your City</li>
                <li>📞 +123 456 7890</li>
                <li>📧 support@ironcorefitness.com</li>
              </ul>
            </div>

            <div className="bg-neutral-950 rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Mon - Fri: 6:00 AM - 10:00 PM</li>
                <li>Sat - Sun: 7:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
