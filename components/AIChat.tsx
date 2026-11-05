import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'model',
  text: "Hi! I'm Naman's AI assistant. Ask me anything about his 8+ years of distributed systems engineering, banking solutions at RBC, Albertsons Kafka CDC, or avionics at Boeing!",
  timestamp: new Date(),
};

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 bg-white ${
          isOpen ? 'text-gray-900 rotate-90' : 'text-emerald-600 hover:text-emerald-700'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-600 rounded-full border-2 border-white shadow-xs"></span>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-20 sm:bottom-24 left-3 right-3 sm:left-auto sm:right-6 w-auto sm:w-96 max-h-[82vh] h-[480px] sm:h-[520px] z-50 transition-all duration-500 origin-bottom-right transform ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col h-full bg-white text-gray-900">
          
          {/* Header */}
          <div className="bg-gray-50 p-3.5 sm:p-4 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Bot className="w-4 h-4 sm:w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Naman's Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[11px] sm:text-xs text-gray-500 font-medium">Powered by Gemini</span>
                </div>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-gray-200/60 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-white">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[82%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-sm shadow-xs' 
                      : 'bg-gray-100 border border-gray-200/70 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 border border-gray-200/70 p-3 rounded-2xl rounded-bl-sm flex items-center gap-2 shadow-xs text-gray-500">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                  <span className="text-xs font-medium">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, RBC, Kafka..."
                className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
              >
                {isLoading ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-gray-400">AI assistant grounded in Naman's verified resume.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;