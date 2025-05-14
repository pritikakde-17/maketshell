import React from 'react'

import { Star } from "lucide-react";

export default function TestiMonials() {
  const reviews = [
    {
      name: "John Doe",
      role: "CEO",
      company: "Tech Solutions",
      testimonial: "SoftSell provided us with excellent service and fair valuations. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "Operations Manager",
      company: "Creative Minds",
      testimonial: "The process was smooth, quick, and transparent. A great experience overall.",
    },
  ];

  return (
    <section className="bg-light py-5 text-center">
      <h2 className="display-4 mb-5">What Our Clients Say</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {reviews.map((review, i) => (
          <div key={i} className="col">
            <div className="card shadow-sm p-4 h-100">
              <div className="d-flex justify-content-center mb-3">
                <Star className="text-warning" size={24} />
              </div>
              <p className="font-italic mb-3">{`"${review.testimonial}"`}</p>
              <h5 className="mb-0">{review.name}</h5>
              <p className="text-muted">{review.role} at {review.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
