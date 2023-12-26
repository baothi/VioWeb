// FAQs.tsx
import { useState, useEffect } from 'react';
import './faqs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  {
    question: "Is there any connotation to Vio?",
    answer: "Yes, Vio: pronounced (vee-oh), is a portmanteau for Visual Optimization and a homophone for View. The foundation of our app is based on visual cues, conveying a more thorough story than just words and numbers alone."
  },
  {
    question: "Is this app affiliated with Facebook?",
    answer: "No"
  },
  {
    question: "Where can I find Vio?",
    answer:"Vio is currently available for download in Vietnam on both the App Store and Google Play. We are in our U.S. beta test and the Vio app will be available on both Google Play and the App Store in the U.S. and Canada upon our U.S. launch."
  },
  {
    question:  "Will Vio charge a fee?",
    answer: "Creating a \"personal\" user account is free and end-users may leverage all features and functionality available. If you're a business entity and/or corporation and would like to promote an event using our platform, please contact us for more information.",
  },
  {
    question: "Does Vio support multiple languages?",
    answer: "Yes, currently Vio supports Vietnamese and English. We will continue to add additional supported languages as we go.",
  },
  {
    question: "Is my information secure?",
    answer: "Vio is dedicated to ensuring your privacy is our number one priority. This includes all of your information on our app.",
  },
  {
    question: "Can businesses and corporations use Vio?",
    answer: "Absolutely. You may perform one of the following:\n\nContact our Sales department for more information.\nLeave us your information in the Contact section.",
  },
];


const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  useEffect(() => {
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true, //
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log('Before toggle:', isOpen); // Check current state before toggling
    setIsOpen(!isOpen);
    console.log('After toggle:', !isOpen); // Check expected state after toggling
  };


  return (
    <div className="faq-section" data-aos="fade-right">
      <p className="faq-question" onClick={toggle}>
        {isOpen ? `- ${faq.question}` : `+ ${faq.question}`}
      </p>
      {isOpen && <div className="faq-answer" data-aos="fade-right">{faq.answer}</div>}
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
