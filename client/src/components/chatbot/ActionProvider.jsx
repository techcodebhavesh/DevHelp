import React from 'react';

import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const { GoogleGenerativeAI } = require("@google/generative-ai"); // Assuming library is installed

const genAI = new GoogleGenerativeAI("gemini api key");
async function generateChatbotResponse(question) {
  // Retrieve API key from environment variable (assuming it's set)

  console.log(question);
  const normalText=question;
  

  // Create a new GenerativeAI instance
  

  // For question answering, use the gemini-pro model
  const model = await genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `**

  Question: ${normalText}

  **Note:**
  * Respond to the question in a conversational and informative way, as if you were a chatbot.
  `;

  try {
    const result = await model.generateContent([prompt]);
    const reply = await result.response;
    const text = reply.text();
    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    return "An error occurred while generating a response. Please try again later.";
  }
}

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleUserMessage = async (message) => {
    const botMessage = createChatBotMessage('Thinking...'); // Show a loading message
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));

    try {
      const userQuestion = message; // Assuming the user message contains the question

      const chatbotResponse = await generateChatbotResponse(userQuestion);
      const finalBotMessage = createChatBotMessage(chatbotResponse);
      setState((prev) => ({ ...prev, messages: [...prev.messages, finalBotMessage] }));
    } catch (error) {
      console.error('Error fetching response from Gemini:', error);
      const errorBotMessage = createChatBotMessage('I\'m having trouble understanding. Please try rephrasing your question.');
      setState((prev) => ({ ...prev, messages: [...prev.messages, errorBotMessage] }));
    }
  };

  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { actions: { handleUserMessage } })
      )}
    </div>
  );
};

export default ActionProvider;
