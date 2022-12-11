import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import English from "./pages/Irregular_Eng";

import IrregularSearch from "./pages/SearchIrregularEng";
import OxfordB1 from './pages/OxfordB1';
import OxfordB2 from './pages/OxfordB2';
import OxfordC1 from './pages/OxfordC1';
import Phrasal1 from './pages/Phrasal_1';
import Goethe from './pages/Goethe';
import German from "./pages/Irregular_Ger";
import Error from "./pages/Error";

import Pagination from './pages/Pagination';


function App() {


  return (
    <div className="App">
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="english" element={<English />} />
          <Route path="irregularSearch" element={<IrregularSearch />} />
          <Route path="oxford-B1" element={<OxfordB1 />} />
          <Route path="oxford-B2" element={<OxfordB2 />} />
          <Route path="oxford-C1" element={<OxfordC1 />} />
          <Route path="phrasal-1" element={<Phrasal1 />} />
          <Route path="pagination" element={<Pagination />} />

          <Route path="goethe" element={<Goethe />} />
          <Route path="german" element={<German />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
