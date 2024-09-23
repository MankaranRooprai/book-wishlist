import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import NoMatch from "./pages/noMatch/NoMatch";
import PostBook from "./pages/book/PostBook";
import UpdateBook from "./pages/book/UpdateBook";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/book" element={<PostBook />}></Route>
        <Route path="/book/:id" element={<UpdateBook />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
