// components/ChatBox.js
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  RiChat3Line, 
  RiCloseLine, 
  RiSendPlaneFill, 
  RiUser3Line,
  RiArrowRightLine,
  RiTimeLine,
  RiCheckDoubleLine,
  RiQuestionLine
} from 'react-icons/ri';
import { 
  FiMinimize2,
  FiMaximize2
} from 'react-icons/fi';
import styles from './ChatBox.module.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Initial greeting message - only on mount
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm here to help with any questions about our IT services. Feel free to ask about our software development, hardware solutions, or technical support.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        timestamp: new Date(),
        read: true
      }
    ]);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Track unread messages - FIXED VERSION
  useEffect(() => {
    if (!isOpen || isMinimized) {
      const unread = messages.filter(msg => !msg.read && msg.sender === 'bot').length;
      setUnreadCount(unread);
    } else if (isOpen && !isMinimized) {
      // Only mark messages as read if there are unread messages
      const hasUnread = messages.some(msg => !msg.read && msg.sender === 'bot');
      if (hasUnread) {
        setMessages(prev => prev.map(msg => ({ ...msg, read: true })));
        setUnreadCount(0);
      }
    }
  }, [isOpen, isMinimized]); // REMOVED messages from dependencies

  // Additional effect to handle new bot messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      // Mark any new bot messages as read
      const newBotMessages = messages.filter(msg => 
        !msg.read && msg.sender === 'bot'
      );
      
      if (newBotMessages.length > 0) {
        setMessages(prev => prev.map(msg => ({ ...msg, read: true })));
        setUnreadCount(0);
      }
    }
  }, [messages.length]); // Only depend on messages length change

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: new Date(),
      read: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Clear any existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Simulate bot response after delay
    typingTimeoutRef.current = setTimeout(() => {
      generateBotResponse(inputValue);
    }, 1200);
  };

  const generateBotResponse = (userInput) => {
  const input = userInput.toLowerCase();

  const responseMap = [
    {
      keywords: ['hello', 'yoo', 'hi', 'hey'],
      text: "Hello! Welcome to our IT services support. How can I assist you today?",
      quickReplies: ["Software Development", "Hardware Support", "Technical Consulting", "Emergency Support"]
    },
    {
      keywords: ['software', 'development', 'app'],
      text: "Our Software Development Services include:\n• Custom Application Development\n• Web & Mobile Solutions\n• Cloud Integration\n• API Development & Integration\n• Software Maintenance & Support",
      quickReplies: ["Request a Quote", "View Case Studies", "Technical Requirements", "Development Timeline"]
    },
    {
      keywords: ['hardware', 'iot', 'device'],
      text: "Our Hardware Solutions cover:\n• IoT Device Development\n• Hardware Prototyping\n• Embedded Systems\n• Network Infrastructure\n• Hardware Maintenance",
      quickReplies: ["Hardware Specifications", "Support & Warranty", "Integration Services", "Request Consultation"]
    },
    {
      keywords: ['support', 'help', 'issue'],
      text: "For Technical Support:\n• Priority Support: 24/7 availability\n• Response Time: < 1 hour for emergencies\n• Support Portal: support.yourcompany.com\n• SLA: 99.9% uptime guarantee",
      quickReplies: ["Submit Support Ticket", "Emergency Contact", "Knowledge Base", "Schedule Maintenance"]
    },
    {
      keywords: ['price', 'cost', 'quote'],
      text: "Pricing is based on project scope, complexity, and timeline. We offer:\n• Fixed-price projects\n• Time & material contracts\n• Retainer agreements\n• Maintenance packages",
      quickReplies: ["Get Custom Quote", "View Pricing Tiers", "Schedule Discovery Call", "Budget Planning"]
    },
    {
      keywords: ['contact', 'email', 'phone', 'call'],
      text: "Contact Information:\n📧 Email: info@yourcompany.com\n📞 Phone: +1 (555) 123-4567\n📍 Address: 123 Tech Street, Silicon Valley, CA\n🕒 Hours: Mon-Fri 9am-6pm PST",
      quickReplies: ["Schedule a Meeting", "Sales Department", "Technical Support", "Visit Our Office"]
    },
    {
      keywords: ['hour', 'time', 'available'],
      text: "Business Hours:\nMonday - Friday: 9:00 AM - 6:00 PM PST\nSaturday: 10:00 AM - 2:00 PM PST\nSunday: Emergency Support Only\n24/7 monitoring for critical systems",
      quickReplies: ["Emergency Protocol", "After-Hours Support", "Holiday Schedule", "Remote Assistance"]
    },
    {
      keywords: ['emergency', 'urgent', 'critical'],
      text: "Emergency Support Protocol:\n🚨 Emergency Line: +1 (555) 911-HELP\n📋 Escalation: Immediate response\n⏱️ Response Time: < 15 minutes\n🔧 Resolution: 24/7 until resolved",
      quickReplies: ["Call Emergency Line", "System Down Protocol", "Data Recovery", "Security Incident"]
    },
    {
      keywords: ['thank', 'thanks', 'appreciate'],
      text: "You're welcome! We're here to ensure your technology works for you. Is there anything else you'd like to know about our services?",
      quickReplies: ["Service Catalog", "Client Testimonials", "Technical Documentation", "All Set, Thanks"]
    }
  ];

  // Find all matching responses
  const matchedResponses = responseMap.filter(r =>
    r.keywords.some(k => input.includes(k))
  );

  // Combine all matched responses if multiple
  let combinedText = "Thank you for your inquiry. Our team will respond shortly.";
  let combinedQuickReplies = ["Software Services", "Hardware Solutions", "Contact Information", "Business Hours"];

  if (matchedResponses.length > 0) {
    combinedText = matchedResponses.map(r => r.text).join("\n\n");
    // Merge quick replies and remove duplicates
    combinedQuickReplies = [...new Set(matchedResponses.flatMap(r => r.quickReplies))];
  }

  const botMessage = {
    id: Date.now() + 1,
    text: combinedText,
    sender: 'bot',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    timestamp: new Date(),
    read: !isMinimized && isOpen,
    quickReplies: combinedQuickReplies
  };

  setMessages(prev => [...prev, botMessage]);
  setIsTyping(false);
};


  const handleQuickReply = (text) => {
    setInputValue(text);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const formatMessageTime = (timestamp) => {
    const now = new Date();
    const msgTime = new Date(timestamp);
    const diffHours = (now - msgTime) / (1000 * 60 * 60);
    
    if (diffHours < 24) {
      return msgTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return msgTime.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        const chatButton = document.querySelector(`.${styles.chatButton}`);
        if (chatButton && !chatButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen && !isMinimized) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMinimized]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className={`${styles.chatButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleChat}
        aria-label="Open chat"
        data-unread={unreadCount > 0}
      >
        <RiChat3Line className={styles.chatIcon} />
        {unreadCount > 0 && (
          <span className={styles.unreadBadge}>{unreadCount}</span>
        )}
        <span className={styles.pulseRing}></span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div 
          className={`${styles.chatContainer} ${isMinimized ? styles.minimized : ''}`} 
          ref={chatBoxRef}
        >
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <div className={styles.avatar}>
                <RiQuestionLine />
              </div>
              <div className={styles.headerInfo}>
                <h3>IT Support Assistant</h3>
                <p className={styles.status}>
                  <span className={`${styles.statusDot} ${isTyping ? styles.typing : ''}`}></span>
                  {isTyping ? 'Typing...' : 'Online • Response time: < 1 min'}
                </p>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button 
                className={styles.minimizeButton}
                onClick={toggleMinimize}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
              </button>
              <button 
                className={styles.closeButton}
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <RiCloseLine />
              </button>
            </div>
          </div>

          {/* Chat Messages Area - Only show when not minimized */}
          {!isMinimized && (
            <>
              <div className={styles.chatMessages}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.message} ${
                      message.sender === 'user' ? styles.userMessage : styles.botMessage
                    }`}
                  >
                    <div className={styles.messageAvatar}>
                      {message.sender === 'user' ? <RiUser3Line /> : <RiQuestionLine />}
                    </div>
                    <div className={styles.messageContent}>
                      <div className={styles.messageText}>
                        {message.text.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <div className={styles.messageMeta}>
                        <RiTimeLine className={styles.timeIcon} />
                        <span>{formatMessageTime(message.timestamp)}</span>
                        {message.sender === 'user' && (
                          <RiCheckDoubleLine className={`${styles.readIcon} ${message.read ? styles.read : ''}`} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className={styles.typingIndicator}>
                    <div className={styles.typingAvatar}>
                      <RiQuestionLine />
                    </div>
                    <div className={styles.typingContent}>
                      <div className={styles.typingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {!isTyping && messages.length > 0 && messages[messages.length - 1].sender === 'bot' && 
               messages[messages.length - 1].quickReplies && (
                <div className={styles.quickReplies}>
                  {messages[messages.length - 1].quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      className={styles.quickReply}
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                      <RiArrowRightLine />
                    </button>
                  ))}
                </div>
              )}

              {/* Chat Input */}
              <div className={styles.chatInputContainer}>
                <div className={styles.inputWrapper}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your IT question here..."
                    className={styles.chatInput}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputValue.trim()}
                    className={styles.sendButton}
                    aria-label="Send message"
                  >
                    <RiSendPlaneFill />
                  </button>
                </div>
                <p className={styles.inputHint}>
                  Press Enter to send • Shift + Enter for new line
                </p>
              </div>
            </>
          )}

          {/* Minimized View */}
          {isMinimized && (
            <div className={styles.minimizedContent}>
              <div className={styles.minimizedHeader}>
                <RiQuestionLine />
                <span>IT Support Chat</span>
              </div>
              <button 
                className={styles.restoreButton}
                onClick={toggleMinimize}
              >
                <FiMaximize2 />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBox;