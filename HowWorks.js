import React from 'react'
import { Upload, DollarSign, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: "Upload License", text: "Send us details of your unused software licenses securely." },
    { icon: DollarSign, title: "Get Valuation", text: "Receive a fair market valuation within 24 hours." },
    { icon: CheckCircle, title: "Get Paid", text: "We transfer funds once license transfer is confirmed." }
  ];

  return (
    <section className=" container py-5 text-center">
      <h2 className="mb-5 font-bold mb-5 mt-5">How It Works</h2>
      <div  className='row'>
    
        {steps.map((step, i) => (
          <div key={i} className="col-md-4 mb-4 ">
           <step.icon size={48} stroke="currentColor" className="text-primary mb-3" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
