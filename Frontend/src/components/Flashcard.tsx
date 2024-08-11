import { useState } from "react";

export const Flashcard = ({ flashcard }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-full h-96 bg-white border rounded-lg shadow-md cursor-pointer perspective transition-transform duration-700 ease-in-out transform ${
        isFlipped ? "rotate-y-180" : ""
      }`}
      onClick={handleFlip}
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute w-full bg-teal-50 h-full backface-hidden ${
            isFlipped ? "hidden" : ""
          } flex items-center justify-center`}
        >
          <p className="text-lg text-gray-800">{flashcard.question}</p>
        </div>
        <div
          className={`absolute w-full h-full bg-white backface-hidden rotate-y-180 ${
            isFlipped ? "flex" : "hidden"
          } items-center justify-center bg-gray-100`}
        >
          <p className="text-lg text-gray-800">{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};
