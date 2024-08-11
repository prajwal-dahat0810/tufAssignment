import { atom } from "recoil";
////cardSelector use
// import { cardSelector } from "./cardSelector";
export const cardAtom = atom({
    key:'cardAtom',
    
    default:
      // cardSelector
    [
        {
          id: 1,
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces.",
        },
        {
          id: 2,
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
        },
        {
          id: 3,
          question: "What are React components?",
          answer:
            "Components are the building blocks of a React application. They are reusable pieces of UI.",
        },
        {
          id: 4,
          question: "What is state in React?",
          answer:
            "State is an object that determines how a component renders and behaves. It is mutable and can be updated over time.",
        },
        {
          id: 5,
          question: "What is a prop in React?",
          answer:
            "Props (short for properties) are read-only inputs that are passed from a parent component to a child component.",
        },
        {
          id: 6,
          question: "What is a useEffect hook?",
          answer:
            "The useEffect hook allows you to perform side effects in function components.",
        },
        {
          id: 7,
          question: "What is the virtual DOM?",
          answer:
            "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM using a library such as React.",
        },
        {
          id: 8,
          question: "What is a key prop in React?",
          answer:
            "The key prop is a special string attribute you need to include when creating lists of elements in React.",
        },
        {
          id: 9,
          question: "What is a controlled component?",
          answer:
            "A controlled component is an input element whose value is controlled by React state.",
        },
        {
          id: 10,
          question: "What is the difference between state and props?",
          answer:
            "State is managed within the component (mutable), while props are passed to the component from outside (immutable).",
        },
      ]

})
