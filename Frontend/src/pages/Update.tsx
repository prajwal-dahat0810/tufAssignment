import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cardAtom } from "../store/atoms/cardAtom";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
export const Update = () => {
  const params = useParams();
  const [cards, setCards] = useRecoilState(cardAtom);
  const card = cards.filter((card) => `${card.id}` === params.id);
  const [question, setQuestion] = useState(card[0].question);
  const [answer, setAnswer] = useState(card[0].answer);
  console.log(params.id);
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex  pb-2  justify-center items-center border h-96 w-full">
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
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
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
              console.log("clicked");
              const filtered = cards.filter((x) => x.id !== card[0].id);
              filtered.push({
                id: Number(params.id),
                question: question,
                answer: answer,
              });
              setCards(filtered);
              navigate("/admin");
            }}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 text-center "
          >
            Update Flashcard
          </button>
        </div>
      </div>
    </div>
  );
};
