import React from 'react';
import { Helmet } from 'react-helmet';
const faqData = [
  {
    question: "What is Flipkart?",
    answer: "Flipkart is an Indian e-commerce company that provides a platform for online shopping of a variety of products including electronics, fashion, home appliances, and more."
  },
  {
    question: "How can I create an account on Flipkart?",
    answer: "To create an account on Flipkart, visit the Flipkart website or app, click on the 'Sign Up' button, and follow the instructions to register with your email or mobile number."
  },
  {
    question: "What are the payment options available?",
    answer: "Flipkart offers multiple payment options including credit/debit cards, net banking, UPI, e-wallets, and Cash on Delivery."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order by logging into your Flipkart account, going to the 'My Orders' section, and selecting the order you want to track."
  },
  {
    question: "What is the return policy on Flipkart?",
    answer: "Flipkart offers a 30-day return policy on most products. You can initiate a return from the 'My Orders' section by selecting the product you want to return and following the instructions."
  }
];
const FAndQ = () => {
  return (
    <>
     <Helmet>
      <title>Q And A</title>
    </Helmet>
     <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold text-gray-800">{item.question}</h2>
          <p className="mt-2 text-gray-600">{item.answer}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default FAndQ