import { Admin } from "./pages/Admin";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { RecoilRoot } from "recoil";
import { Update } from "./pages/Update";
export interface flashcardInterface {
  id: number;
  question: String;
  answer: String;
}

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
