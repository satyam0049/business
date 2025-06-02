import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

const responses = {
  hi: "Hi there! I'm your personal assistant. Ask me anything about this portfolio.",
  skills: "I'm skilled in React, Node.js, MongoDB, and more. I love building interactive UIs!",
  projects: "You can view my projects in the Projects section above. Let me know if you want a summary!",
  resume: "You can download my resume from the top navbar or request a direct link here.",
  default: "I'm still learning! Try asking about skills, projects, or resume.",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your portfolio assistant. Ask me anything 😊" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const key = input.toLowerCase().includes('skill')
      ? 'skills'
      : input.toLowerCase().includes('project')
      ? 'projects'
      : input.toLowerCase().includes('resume')
      ? 'resume'
      : input.toLowerCase().includes('hi')
      ? 'hi'
      : 'default';

    const botMessage = { from: 'bot', text: responses[key] };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Floating Bot Button */}
      {!isOpen && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <Bot size={24} />
        </motion.button>
      )}

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-full max-w-[calc(100vw-2rem)] sm:max-w-sm h-[75vh] sm:h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">AI Assistant</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-red-500">
                <X />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto text-sm">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.from === 'bot' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx }}
                  className={`max-w-[85%] px-3 py-2 rounded-xl ${
                    msg.from === 'bot'
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 self-start'
                      : 'bg-blue-600 text-white self-end'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="flex p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-white focus:outline-none"
                placeholder="Ask me something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
