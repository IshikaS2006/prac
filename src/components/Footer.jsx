import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/YOUR-ID",
      icon: <FaInstagram className="text-xl" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/YOUR-ID",
      icon: <FaLinkedinIn className="text-xl" />
    },
    {
      name: "GitHub",
      url: "https://github.com/YOUR-ID",
      icon: <FaGithub className="text-xl" />
    },
    {
      name: "Email",
      url: "mailto:yourmail@example.com",
      icon: <FaEnvelope className="text-xl" />
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-b from-zinc-800 to-zinc-900 px-10 py-24 flex flex-col items-center text-center gap-8"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
      >
        Let's <span className="text-indigo-400">Connect</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-lg text-gray-300 text-sm"
      >
        Have a project in mind or just want to say hello? Feel free to reach out.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-6 mt-6"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-800  text-sm hover:bg-indigo-600 text-gray-300 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            {link.icon}
            <span>{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
      
      <div className="w-full max-w-4xl border-t border-zinc-700 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="font-medium text-indigo-400">Ishika Singh</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Crafted with <span className="text-red-500 mx-1">❤️</span> and passion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;