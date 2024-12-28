"use client";
import React, { useState } from "react";
import AccordionItem from "./page";
import "./accordian.css";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    header: "What is E-Cell Fest 2024?",
    text: `E-Cell Fest 2024 is an annual event designed to foster innovation, entrepreneurship, and student engagement. It provides a platform for students to explore diverse domains related to entrepreneurship, participate in hands-on activities, and network with industry professionals.`,
  },
  {
    id: 2,
    header: "When and where will the event take place?",
    text: `The event will take place on January 8th, 2025, at Aryabhatt Hall & Ignite Auditorium`,
  },
  {
    id: 3,
    header: "Who can participate in E-Cell Fest 2024?",
    text: `E-Cell Fest is open to all students interested in entrepreneurship, innovation, and skill development. Whether you are a beginner or have prior experience, there are activities for everyone!`,
  },
  {
    id: 4,
    header: "How do I register for the event?",
    text: `To register for E-Cell Fest 2024, visit our registration page and fill out the registration form with your details. You can also scan the QR code available on our promotional materials for quick access.`,
  },
  {
    id: 5,
    header: "Is there a registration fee?",
    text: `Yes, there is a nominal registration fee of ₹50 to participate in E-Cell Fest 2024.`,
  },
  {
    id: 6,
    header:
      "What domains can I choose from?",
    text: `Participants can choose from the following domains:• Designing • Technical • Social Media • Marketing • Research & Development (R&D) • Content.`,
  },
  {
    id: 7,
    header: "How do you determine the cost of a lamination project What activities will take place in each domain?",
    text: `Each domain will have specific activities tailored to enhance skills and creativity. For example: • Designing: Prototype Development, UI/UX Workshops • Technical: Coding Challenges, Hackathon Sessions • Social Media: Photography Workshops, Content Creation • Marketing: Brand Story Development, Live Pitch Competition • R&D: Market Research Sessions, Feedback Analysis Workshops • Content: Copywriting Sessions, Blogging Workshops`,
  },
  {
    id: 8,
    header: "How can I contact the organizers if I have more questions?",
    text: `For any inquiries or assistance regarding E-cell Fest 2024, you can reach out to our event coordinators: • Hitanshi Muthaliya: [Phone Number] • Rishabh Kumar: [Phone Number] • Email: support@ecellignite.in.`,
  },
  {
    id: 9,
    header: "Can I participate in multiple domains?",
    text: `While you can express interest in multiple domains, you will need to select one primary domain for participation during registration to ensure focused engagement in that area.`,
  },
  {
    id: 10,
    header: "What should I bring to the event?",
    text: `Participants are encouraged to bring their enthusiasm and creativity! Additionally, if you have any specific materials or tools relevant to your chosen domain (e.g., laptops for coding), feel free to bring them along.`,
  },
  {
    id: 11,
    header: "Will food be provided during the event?",
    text: `Yes! A variety of food and refreshments will be available throughout the day to keep participants energized. This FAQ section aims to provide clear and concise answers to common questions about E-Cell Fest 2024, helping participants feel informed and prepared for the event.`,
  },
  {
    id: 12,
    header: "Will there be any awards or recognition?",
    text: `Yes! Top-performing teams and individuals in each domain will be recognized during the Awards Ceremony at the end of the event.`,
  },
];

const FaqData = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div className="containerFluid max-w-6xl m-auto">
      <div className="py-5">
        <div>
        <p className=" border border-slate-400 rounded-full px-4 py-2 ">FAQ</p>
        </div>

      </div>
      <div>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqData;
