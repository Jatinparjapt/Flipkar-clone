import React from 'react';
import { Helmet } from 'react-helmet';
const helpTopics = [
  {
    topic: "How to place an order?",
    details: "To place an order, browse through our products, select the items you wish to purchase, add them to your cart, and proceed to checkout. Fill in your shipping details and select your preferred payment method to complete the order."
  },
  {
    topic: "How to track my order?",
    details: "You can track your order by logging into your account, navigating to the 'My Orders' section, and clicking on the order you wish to track. You'll find the current status and estimated delivery date there."
  },
  {
    topic: "What are the payment methods available?",
    details: "We offer multiple payment methods including credit/debit cards, net banking, UPI, and various e-wallets. Cash on Delivery is also available for select locations."
  },
  {
    topic: "How to return a product?",
    details: "To return a product, go to 'My Orders', select the order you want to return, and click on 'Return Item'. Follow the instructions to complete the return process. Ensure the product is in its original condition."
  },
  {
    topic: "How to contact customer support?",
    details: "You can contact our customer support via the 'Contact Us' page. Fill out the form with your query or call our support hotline available 24/7."
  }
];

const Help = () => {
  return (
    <>
     <Helmet>
      <title>Help</title>
    </Helmet>
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Help & Support</h1>
      {helpTopics.map((item, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold text-gray-800">{item.topic}</h2>
          <p className="mt-2 text-gray-600">{item.details}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Help;
