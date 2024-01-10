import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CommingSoon from "./pages/comingsoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<CommingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
