// src/components/Background.js
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-550]">
      <div className="w-full h-full bg-[url('/bg1.gif')] bg-cover bg-center animate-background" />
    </div>
  );
};

export default Background;
