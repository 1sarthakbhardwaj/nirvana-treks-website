"use client";

import Container from "@/components/ui/container";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtitle: "Available 9 AM - 7 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@nirvanatreks.com", "bookings@nirvanatreks.com"],
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Adventure Street", "Manali, Himachal Pradesh 175131"],
      subtitle: "Monday - Saturday, 10 AM - 6 PM"
    }
  ];

  const popularDestinations = [
    "Kashmir Great Lakes Trek",
    "Spiti Valley Road Trip", 
    "Kerala Backwaters",
    "Ladakh Expedition",
    "Rajasthan Cultural Tour",
    "Custom Adventure"
  ];

  return (
    <main className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Let's Plan Your Adventure</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to explore incredible India? Get in touch with our expert team to create your perfect journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-white/80 mb-2">
                    Interested Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="" className="bg-black">Select a destination</option>
                    {popularDestinations.map((dest) => (
                      <option key={dest} value={dest} className="bg-black">{dest}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Tell us about your dream adventure *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                  placeholder="Tell us about your travel dates, group size, interests, and any special requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <p className="text-white/70 mb-8">
                We're here to help you plan the adventure of a lifetime. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-emerald-500/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    {item.details.map((detail, j) => (
                      <p key={j} className="text-white/80">{detail}</p>
                    ))}
                    <p className="text-sm text-white/60 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold text-white">Business Hours</h3>
              </div>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Emergency Contact</h3>
              <p className="text-white/80 mb-2">24/7 Support during your adventure</p>
              <p className="text-red-400 font-semibold">+91 99999 00000</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}


