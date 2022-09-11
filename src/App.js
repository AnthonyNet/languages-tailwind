import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import English from "./pages/English";
import English2 from "./pages/English2";
import IrregularSearch from "./pages/SearchIrregularEng";
import OxfordB1 from './pages/OxfordB1';
import OxfordB2 from './pages/OxfordB2';
import OxfordC1 from './pages/OxfordC1';
import Phrasal1 from './pages/Phrasal_1';
import Goethe from './pages/Goethe';
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
          <Route path="oxford-B2" element={<OxfordB2 />} />
          <Route path="oxford-C1" element={<OxfordC1 />} />
          <Route path="phrasal-1" element={<Phrasal1 />} />

          <Route path="goethe" element={<Goethe />} />
          <Route path="german" element={<German />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
