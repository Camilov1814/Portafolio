import React, { useState } from 'react';
import Cocina from '../assets/cocina.jpeg';
import Musica from '../assets/musica.jpeg';
import Series from '../assets/series.jpeg';
import Volley from '../assets/volley.jpeg';

interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
}

const cardData: CardData[] = [
  { 
    id: 1, 
    imageUrl: Cocina, 
    title: 'Cooking', 
    text: 'I am a culinary enthusiast and attend cooking classes once a week. My favorite dishes are ceviche, sushi, and ricotta ravioli with truffle.' 
  },
  { 
    id: 2, 
    imageUrl: Musica, 
    title: 'Music', 
    text: 'I love listening to and dancing to music, especially from the 70s and 80s. My taste is very eclectic, so my playlist is always on shuffle. My favorite artists are ABBA, Adele, and Diana Ross.' 
  },
  { 
    id: 3, 
    imageUrl: Series, 
    title: 'Series and Movies', 
    text: 'I enjoy series more than movies; if I really like a series, I can watch it over and over again. I am currently watching House of The Dragon, Gossip Girl, and Succession.' 
  },
  { 
    id: 4, 
    imageUrl: Volley, 
    title: 'Beach Volleyball', 
    text: 'I am not much into sports, but I occasionally play beach volleyball with my sister and friends. My height often gives me an advantage, so I try to make the most of it—I am 6\'3" (1.92 meters).' 
  },
];


const Hobbies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto bg-background-main p-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardData.map((card) => (
            <div key={card.id} className="w-full flex-shrink-0 px-2">
              <div className="flex flex-col h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-3/5">
                  <img src={card.imageUrl} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="h-2/5 p-3 bg-background-secondary flex flex-col justify-between">
                  <h3 className="font-heading text-primary text-3xl  mb-1">{card.title}</h3>
                  <p className="font-body text-secondary text-sm overflow-y-auto">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-background-main p-2 rounded-full shadow-md hover:bg-opacity-80 transition-colors duration-200"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-background-main p-2 rounded-full shadow-md hover:bg-opacity-80 transition-colors duration-200"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Hobbies;