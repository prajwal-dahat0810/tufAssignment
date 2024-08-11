import { useEffect, useState } from "react";
import { flashcardInterface } from "../App";
import { Navbar } from "../components/Navbar";
import { useRecoilState } from "recoil";
import { cardAtom } from "../store/atoms/cardAtom";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const [flashcards, setFlashcards] = useRecoilState(cardAtom);
  useEffect(() => {
    console.log("in  useeffect ");
    const stringArray = JSON.stringify(flashcards);
    localStorage.setItem("card", stringArray);
  }, [setFlashcards]);
  // const addFlashcard = () => {
  //   axios
  //     .post("http://localhost:5000/flashcards", { question, answer })
  //     .then((response: { data: any }) => {
  //       setFlashcards([...flashcards, response.data]);
  //       setQuestion("");
  //       setAnswer("");
  //     })
  //     .catch((error: any) => console.error("Error adding flashcard:", error));
  // };

  // Similar logic for editing and deleting flashcards
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [cards, setCards] = useRecoilState(cardAtom);
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex py-2 justify-center items-center border  w-full">
        <div className="flex  border gap-4 rounded-lg flex-col px-2 py-2 w-96">
          <div className="h-20 flex flex-col items-center">
            <h1 className="text-slate-700 font-medium"> Striver Here</h1>
            <div className="text-slate-700 font-normal">
              Creating a new Question!{" "}
            </div>
          </div>
          <input
            type="text"
            placeholder="Question"
            value={question}
            className="p-3"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input
            type="text"
            placeholder="Answer..."
            className="p-3"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button
            onClick={() => {
              if (question.length === 0 || answer.length === 0) {
                alert("Please Enter Question and Answer");
              } else {
                let newCards = cards;
                const index = cards.length - 1;
                newCards = [
                  ...newCards,
                  {
                    id: cards[index].id,
                    question: question,
                    answer: answer,
                  },
                ];
                console.log("delete kiya");
                setCards(newCards);
                // axios.post('http://localhost:5000/api/cards', newCard)
                // .then((response) => {
                //   console.log('Delete :', response.data);
                // })
                // .catch((error) => {
                //   console.error('There was an error saving the data:', error);
                // });
              }
            }}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 text-center "
          >
            Add Flashcard
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="w-[60%]  h-full ">
          {flashcards.map((flashcard: flashcardInterface, index: number) => (
            <li
              key={index}
              className=" justify-start items-start py-6  flex flex-row h-full min-h-20 "
            >
              <div className="px-3 justify-between border py-2 w-full rounded-xl  items-start gap-2 flex flex-row">
                <div>
                  <div>{flashcard.question}</div>
                  <div>{flashcard.answer}</div>
                </div>

                <div className="flex flex-row gap-5">
                  <button
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => navigate(`/update/${flashcard.id}`)}
                  >
                    update
                  </button>
                  <button
                    onClick={() => {
                      const Cards = flashcards.filter(
                        (card) => card.id !== flashcard.id
                      );
                      setFlashcards(Cards);
                    }}
                    className="text-white bg-gradient-to-r from-red-300 via-red-400 to-red-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
