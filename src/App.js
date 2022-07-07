import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Message from "./pages/message";
import Article from "./pages/article";
import SearchByCategory from "./pages/searchByCategory";
import Quotes from "./pages/Quotes";
import Facts from "./pages/Facts";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "sv"],
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assests/locales/{{lng}}/translation.json",
    },

    react: {
      useSuspense: false,
    },
  });

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/search/:search" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/blog/category/:category" element={<SearchByCategory />} />
        <Route path="/message_success" element={<Message />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/Facts" element={<Facts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
