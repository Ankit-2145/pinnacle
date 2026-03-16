"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: "user" | "assistant";
  content: string;
  timestamp?: string;
}

const messages: Message[] = [
  {
    id: "1",
    sender: "user",
    content: "I need a fast-loading website. My current one takes forever",
  },
  {
    id: "2",
    sender: "assistant",
    content: "Understood! Slow sites lose users — and we don't like losing",
  },
  {
    id: "3",
    sender: "user",
    content: "It's going to be an e-commerce store with tons of product images",
  },
  {
    id: "4",
    sender: "assistant",
    content:
      "Perfect! We'll go with Next.js, optimize every image, and lazy-load like pros. Speed is non-negotiable",
  },
];

export const ProcessChat = () => {
  return (
    <div className="mt-4 flex h-full flex-col p-4 font-workSans">
      <div className="flex-1 space-y-3 overflow-hidden">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            className={`flex items-start gap-2 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
            initial={{
              opacity: 0,
              x: message.sender === "user" ? 30 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {message.sender === "assistant" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.1,
                }}
                viewport={{ once: true }}
              >
                <Avatar className="h-6 w-6 flex-shrink-0 bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600">
                  <AvatarFallback className="border border-brand-blue bg-gray-100 text-xs font-semibold text-brand-blue">
                    P
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            )}

            <motion.div
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                message.sender === "user"
                  ? "rounded-br-md bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 text-white"
                  : "rounded-bl-md bg-gray-100 text-gray-800"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
                delay: index * 0.1 + 0.05,
              }}
              viewport={{ once: true }}
            >
              {message.content}
            </motion.div>

            {message.sender === "user" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.1,
                }}
                viewport={{ once: true }}
              >
                <Avatar className="h-6 w-6 flex-shrink-0 bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600">
                  <AvatarFallback className="border border-brand-blue bg-gray-100 text-xs font-semibold text-brand-blue">
                    U
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
