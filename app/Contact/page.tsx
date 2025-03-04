"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill, GoVerified } from "react-icons/go";
import { BsTrophy } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => (
  <div className="flex gap-4 items-start">
    <div className="text-[#029FAE] mt-1">{icon}</div>
    <div>
      <h2
        className={`${poppins.className} text-xl md:text-2xl font-medium mb-1`}
      >
        {title}
      </h2>
      {details.map((detail, index) => (
        <p key={index} className="text-sm md:text-base text-black">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const Feature = ({ icon, title, subtitle }: FeatureProps) => (
  <div className="flex items-center gap-4">
    <div className="text-[#029FAE] w-14 h-14">{icon}</div>
    <div>
      <h2 className={`${poppins.className} text-xl md:text-2xl font-semibold`}>
        {title}
      </h2>
      <p className={`${poppins.className} text-[#898989] text-base md:text-lg`}>
        {subtitle}
      </p>
    </div>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setNotification(
        "Your message has been received. We will contact you soon!"
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setNotification(""), 5000); // Clear notification after 5 sec
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Address",
      details: ["236 5th SE Avenue, New York NY10000, United States"],
    },
    {
      icon: <FaPhone size={28} />,
      title: "Phone",
      details: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
    },
    {
      icon: <GoClockFill size={28} />,
      title: "Working Time",
      details: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
    },
  ];

  const features = [
    {
      icon: <BsTrophy size={56} />,
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      icon: <GoVerified size={56} />,
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      icon: <MdSupportAgent size={56} />,
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6">
      <div className="text-center">
        <h1
          className={`${poppins.className} text-4xl font-semibold sm:text-3xl`}
        >
          Get In Touch With Us
        </h1>
        <p className="text-base text-[#9F9F9F] mt-8 max-w-3xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="space-y-8 px-6 sm:px-10">
          {contactInfo.map((info, index) => (
            <ContactInfo key={index} {...info} />
          ))}
        </div>

        <div className="p-8 w-full max-w-2xl">
          {notification && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              {notification}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="mb-8">
              <label
                className={`${poppins.className} text-base md:text-lg font-medium block mb-5`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
                required
                className="w-full h-[75px] p-6 border border-[#9F9F9F] rounded-lg"
              />
            </div>

            <div className="mb-8">
              <label
                className={`${poppins.className} text-base md:text-lg font-medium block mb-5`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Abc@def.com"
                required
                className="w-full h-[75px] p-6 border border-[#9F9F9F] rounded-lg"
              />
            </div>

            <div className="mb-8">
              <label
                className={`${poppins.className} text-base md:text-lg font-medium block mb-5`}
              >
                Subject (Optional)
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is an optional"
                className="w-full h-[75px] p-6 border border-[#9F9F9F] rounded-lg"
              />
            </div>

            <div className="mb-8">
              <label
                className={`${poppins.className} text-base md:text-lg font-medium block mb-5`}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! I'd like to ask about..."
                required
                className="w-full h-32 p-6 border border-[#9F9F9F] rounded-lg resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-60 h-14 bg-[#029FAE] border border-[#B88E2F] rounded text-white transition-colors hover:bg-[#028694]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#F4F4F4] py-12 px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
