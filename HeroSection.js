import React from 'react'

export default function HeroSection() {
  return (
    <section className="text-center p-10" style={{ backgroundColor: '#2563eb', color: 'white' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Turn Unused Software into Cash</h1>
      <p className="text-lg md:text-2xl mb-6">
        SoftSell helps businesses resell unused software licenses easily and securely.
      </p>
      <button className="bg-white px-6 py-3 text-lg rounded">Sell My Licenses</button>
    </section>
  );
}

