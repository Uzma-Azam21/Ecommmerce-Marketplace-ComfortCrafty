"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: FAQ[] = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
];

const FAQCard = ({
  faq,
  expanded,
  onToggle,
}: {
  faq: FAQ;
  expanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="w-full p-5 bg-gray-100 rounded-md shadow hover:shadow-md transition duration-300">
      <button
        className="flex justify-between items-center w-full text-left font-semibold"
        onClick={onToggle}
        style={{ color: "#333333" }}
      >
        <span>{faq.question}</span>
        {expanded ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      {expanded && (
        <p className="mt-4 text-sm" style={{ color: "#4F4F4F" }}>
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h2
        className="text-2xl lg:text-3xl font-bold mb-16 font-helvetica"
        style={{ color: "#333333" }}
      >
        Questions Look Here
      </h2>

      <p className="mb-12" style={{ color: "#4F4F4F" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </p>
      <div className="space-y-6">
        {FAQs.map((faq, index) => (
          <FAQCard
            key={index}
            faq={faq}
            expanded={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
