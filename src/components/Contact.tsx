import { motion } from "framer-motion";
import {
  MdArrowOutward,
  MdCopyright,
  MdContentCopy,
  MdCheck,
} from "react-icons/md";
import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mauryahimanshu416@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // Very gentle stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-lead">
            Open for freelance, collaborations, or just interesting
            conversations.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Email + Education block */}
          <motion.div className="contact-block email-block" variants={fadeUp}>
            <h3 className="block-title">Email</h3>
            <div
              className="email-row"
              onClick={copyToClipboard}
              role="button"
              tabIndex={0}
            >
              <span className="email-text">{email}</span>
              <motion.span
                className="copy-icon"
                animate={copied ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {copied ? <MdCheck className="success" /> : <MdContentCopy />}
              </motion.span>
            </div>

            <div className="education">
              <h4>Education</h4>
              <p>B.Sc. — Physics, Chemistry, Mathematics</p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div className="contact-block social-block" variants={fadeUp}>
            <h3 className="block-title">Online</h3>
            <div className="social-list">
              <SocialLink
                label="GitHub"
                href="https://github.com/Mr-HimanshuMaurya"
              />
              <SocialLink
                label="LinkedIn"
                href="http://www.linkedin.com/in/mr-himanshumaurya"
              />
              <SocialLink
                label="Instagram"
                href="https://www.instagram.com/itz.himanshu2k4"
              />
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div className="contact-block signature" variants={fadeUp}>
            <p className="crafted-by">
              Designed & Developed by <span>Himanshu Maurya</span>
            </p>
            <p className="year">
              <MdCopyright /> {new Date().getFullYear()}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

type SocialLinkProps = {
  label: string;
  href: string;
};

const SocialLink = ({ label, href }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    whileHover={{ x: 6 }}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
  >
    {label}
    <MdArrowOutward className="arrow" />
  </motion.a>
);

export default Contact;
