import './App.css';
import Homepage from './Components/Homepage/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
