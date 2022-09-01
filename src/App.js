import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import English from "./pages/English";
import English2 from "./pages/English2";
import IrregularSearch from "./pages/SearchIrregularEng";
import OxfordB1 from './pages/OxfordB1';
import German from "./pages/German";
import Error from "./pages/Error";


function App() {
  return (
    <div className="App">
   
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="english" element={<English />} />
          <Route path="english2" element={<English2 />} />
          <Route path="irregularSearch" element={<IrregularSearch />} />
          <Route path="oxford-B1" element={<OxfordB1 />} />
          <Route path="german" element={<German />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
