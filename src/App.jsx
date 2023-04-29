import { useState, useRef } from "react";
import context from "./context";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main/index";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import language from "./components/lang/language";
import InfoWindow from "./components/Main/InfoWindow";
function App() {
  const [lang, setLang] = useState("uz");
  const mainDark = useRef();
  return (
    <>
      <context.Provider value={{ language, lang, setLang }}>
        <Navbar data={language} lang={lang} setLang={setLang} ke={""}/>
        <main ref={mainDark}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/:cname" element={<InfoWindow />} />
          </Routes>
        </main>
        <Footer />
      </context.Provider>
    </>
  );
}
export default App;
