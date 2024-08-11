import { useState } from "react";
import { Flashcard } from "../components/Flashcard";
import { useRecoilState } from "recoil";
import { cardAtom } from "../store/atoms/cardAtom";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  const [flashcards, setFlashcards] = useRecoilState(cardAtom);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //
  // }, []);

  const nextFlashcard = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const previousFlashcard = () => {
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="App h-screen bg-slate-100">
      <div className="">
        <Navbar />
      </div>{" "}
      <div>Click on Question to answer</div>
      <div className="pt-10 flex items-center justify-center bg-slate-100 h-full w-full ">
        {flashcards.length > 0 && (
          <div className="w-3/6 h-3/5 px-2  max-sm:w-full ">
            <Flashcard
              flashcard={flashcards[currentIndex]}
              setFlashcards={setFlashcards}
            />
            <div className="w-full items-center h-20 px-6 bg-slate-400 flex justify-between">
              <button onClick={previousFlashcard}>Previous</button>
              <button onClick={nextFlashcard}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
