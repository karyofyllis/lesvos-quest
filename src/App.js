import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Playground from "./pages/playground";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/playground" element={<Playground />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
