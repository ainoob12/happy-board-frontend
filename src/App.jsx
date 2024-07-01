import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import MainPage from "./Page/MainPage/MainPage";
import Header from "./SideComponent/Header/Header";
import Footer from "./SideComponent/Footer/Footer";
import NonePage from "./Page/NonePage/NonePage";
import DetailPost from "./Page/DetailPostPage/DetailPost";
import MoreNews from "./Page/MorePage/MoreNews";
import LoginPage from "./Page/TestLoginPage/LoginPage";
import SignupPage from "./Page/TestLoginPage/SignupPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/example" element={<DetailPost />} />
        <Route path="/more" element={<MoreNews />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup1" element={<SignupPage/>} />
        <Route path="*" element={<NonePage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
