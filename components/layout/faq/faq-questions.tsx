"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in Web Development, Mobile App Development, UI/UX Design, SEO Optimization, and E-commerce Solutions. Whether you're a startup or an established brand, we tailor digital solutions to help you grow.",
  },
  {
    question: "How much does a typical website or app cost?",
    answer:
      "The cost depends on the features, design complexity, and timeline. After a quick discussion, we'll send you a transparent quote with all the details—no hidden charges.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer 1 month of free post-deployment support. For ongoing maintenance and updates, we provide affordable monthly plans.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Absolutely! Every website we build is fully responsive across devices and follows SEO best practices to help you rank better on search engines.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we proudly work with clients across the globe. Time zones aren't a barrier—we're flexible and adapt to your availability for smooth communication.",
  },
  {
    question: "Will I be able to edit the website myself later?",
    answer:
      "Yes. We build with user-friendly CMS or admin panels so you can easily update your content without needing to touch code. We also offer training if needed.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity. A standard website may take 2-3 weeks, while larger projects can take up to 4-8+ weeks. We always provide an estimated timeline before starting.",
  },
  {
    question: "Do I own the website and code after it's done?",
    answer:
      "Yes, once the project is completed and paid for, all rights and code are transferred to you. It's your digital property.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Definitely! We can give your old site a fresh, modern look while improving performance, user experience, and SEO.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy—just contact us via the form, email, or WhatsApp. We'll set up a free consultation call to understand your needs and propose a plan of action.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = memo<AccordionItemProps>(
  ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="font-workSans border-b border-muted">
        <button
          className="flex justify-between items-center w-full py-4 text-left focus:outline-none cursor-pointer"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-foreground text-base">{question}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 text-muted-foreground ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="pb-2 text-muted-foreground text-sm">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export const FAQQuestions = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = useCallback((index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  }, []);

  return (
    <div className="w-full ">
      <div className=" overflow-hidden">
        <AnimatePresence initial={false}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
