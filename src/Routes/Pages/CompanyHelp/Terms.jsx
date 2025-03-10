import React from 'react';
import { Helmet } from 'react-helmet';
const termsContent = [
  {
    heading: "Introduction",
    text: "This document is an electronic record in terms of Information Technology Act, 2000 and rules thereunder as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures."
  },
  {
    heading: "Acceptance of Terms",
    text: "By accessing, browsing or otherwise using the site indicates your agreement to all the terms and conditions under these terms of use, so please read the terms of use carefully before proceeding."
  },
  {
    heading: "Membership Eligibility",
    text: "Transaction on the Platform is available only to persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are 'incompetent to contract' within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not eligible to use the Platform."
  },
  {
    heading: "Account and Registration",
    text: "You shall be responsible for maintaining the confidentiality of your Display Name and Password and you shall be responsible for all activities that occur under your Display Name and Password."
  },
  {
    heading: "Privacy",
    text: "Your privacy is very important to us. Please review our Privacy Policy to understand our practices."
  }
];

const Terms = () => {
  return (
    <>
     <Helmet>
      <title>Terms</title>
    </Helmet>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      {termsContent.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.heading}</h2>
          <p className="text-gray-600">{item.text}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Terms;
