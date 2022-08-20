import { Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import Overview from "./pages/Overview";
import PageNotFound from "./pages/PageNotFound";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="app d-flex flex-column justify-content-between min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
