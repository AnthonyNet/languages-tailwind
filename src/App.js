import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import English from './pages/English';
import German from './pages/German';
import Error from './pages/Error';


function App() {
  return (
    <div className="App"> 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="english" element={<English />} />
          <Route path="german" element={<German />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
