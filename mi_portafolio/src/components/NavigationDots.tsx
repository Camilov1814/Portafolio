import React from 'react';

interface NavigationDotsProps {
  activeSection: number;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ activeSection }) => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-3">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`rounded-full transition-all duration-300 ${
            activeSection === index
              ? 'bg-primary w-4 h-4'
              : 'bg-secondary w-3 h-3'
          } ${index === 0 || index === 3 ? 'my-1' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default NavigationDots;