import React from 'react'

import { Star, DollarSign, CheckCircle, Mail } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-light py-5 text-center">
      <h2 className="display-4 font-bold mb-5">Why Choose Us</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <Star className="w-8 h-8 mx-auto text-primary mb-3" />
          <h4 className="h5">Trusted by Businesses</h4>
          <p className="small">Hundreds of satisfied clients across industries.</p>
        </div>
        <div className="col">
          <DollarSign className="w-8 h-8 mx-auto text-primary mb-3" />
          <h4 className="h5">Top Market Rates</h4>
          <p className="small">We provide fair, competitive offers.</p>
        </div>
        <div className="col">
          <CheckCircle className="w-8 h-8 mx-auto text-primary mb-3" />
          <h4 className="h5">Secure Transactions</h4>
          <p className="small">Your data and license transfers are protected.</p>
        </div>
        <div className="col">
          <Mail className="w-8 h-8 mx-auto text-primary mb-3" />
          <h4 className="h5">Fast Support</h4>
          <p className="small">Our team is here to help every step of the way.</p>
        </div>
      </div>
    </section>
  );
}
