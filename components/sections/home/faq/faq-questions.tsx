"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs-data";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = memo<AccordionItemProps>(
  ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-muted font-workSans">
        <button
          className="flex w-full cursor-pointer items-center justify-between py-4 text-left focus:outline-none"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-base text-foreground">{question}</span>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
              isOpen ? "rotate-180 transform" : ""
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
              <div className="pb-2 text-sm text-muted-foreground">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

export const FAQQuestions = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = useCallback((index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  }, []);

  return (
    <div className="w-full">
      <div className="overflow-hidden">
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
