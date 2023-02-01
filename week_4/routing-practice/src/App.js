
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Message from "./components/Message";
import MessageColors from "./components/MessageColors";




function App() {



  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:variable" element={<Message/>}/>
          <Route path="/:message/:color/:backgroundColor" element={<MessageColors/>}/>
          


        </Routes>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
