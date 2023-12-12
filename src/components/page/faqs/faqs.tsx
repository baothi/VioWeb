// FAQs.tsx
import React, { useState } from 'react';
import './faqs.css'

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is Vio?",
    answer: "Vio is a global visual schedule aggregator that connects you to the rest of the world from a personal, professional, and social standpoint."
  },
  {
    question: "How do you pronounce Vio?",
    answer: "Vio is pronounced as 'Vee-oh'."
  },
  // ... other FAQs
];

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log('Before toggle:', isOpen); // Check current state before toggling
    setIsOpen(!isOpen);
    console.log('After toggle:', !isOpen); // Check expected state after toggling
  };


  return (
    <div className="faq-section">
      <p className="faq-question" onClick={toggle}>
        {isOpen ? `- ${faq.question}` : `+ ${faq.question}`}
      </p>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

const FAQs: React.FC = () => {
  return (
    <section className="section home_sec_1">
      <div className="grid-container">
        <div className="grid-100">
          <h1>Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
