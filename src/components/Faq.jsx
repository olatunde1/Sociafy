import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Sociafy and its primary goal?",
    answer: "Sociafy has a robust customer support system to help users in such situations. You can contact their support team to suspend your account temporarily to prevent unauthorized access and to facilitate account recovery."
  },
  {
     question: "What is Sociafy and its primary goal?",
    answer: "Sociafy has a robust customer support system to help users in such situations. You can contact their support team to suspend your account temporarily to prevent unauthorized access and to facilitate account recovery."
  },
  {
     question: "What is Sociafy and its primary goal?",
    answer: "Sociafy has a robust customer support system to help users in such situations. You can contact their support team to suspend your account temporarily to prevent unauthorized access and to facilitate account recovery."
  },
  {
     question: "What is Sociafy and its primary goal?",
    answer: "Sociafy has a robust customer support system to help users in such situations. You can contact their support team to suspend your account temporarily to prevent unauthorized access and to facilitate account recovery."
  },
  {
     question: "What is Sociafy and its primary goal?",
    answer: "Sociafy has a robust customer support system to help users in such situations. You can contact their support team to suspend your account temporarily to prevent unauthorized access and to facilitate account recovery."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions (FAQs)</h2>
      <p className="text-center text-gray-600 mb-8">
        Browse through the most frequently asked questions & answers.
      </p>

      {/* Search bar */}
      <div className="relative w-full max-w-xl mx-auto mb-10">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
        />
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="font-medium text-[#333]">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
