import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import EmptyPage from "../EmptyPage/EmptyPage";
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<EmptyPage />} />
        <Route path="/signup" element={<EmptyPage />} />
        <Route path="/todolist" element={<EmptyPage />} />
        <Route path="/calendar" element={<EmptyPage />} />
        <Route path="/reminders" element={<EmptyPage />} />
        <Route path="/planning" element={<EmptyPage />} />
        <Route path="/history" element={<EmptyPage />} />
        <Route path="/ourteam" element={<EmptyPage />} />
        <Route path="/blog" element={<EmptyPage />} />
        <Route path="/careers" element={<EmptyPage />} />
        <Route path="/about" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}

export default App;
