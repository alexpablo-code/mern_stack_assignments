
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Message from "./components/Message";
import MessageColors from "./components/MessageColors";
import NotFound from "./components/NotFound";




function App() {



  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:variable" element={<Message/>}/>
          <Route path="/:message/:color/:backgroundColor" element={<MessageColors/>}/>
          <Route path="*" element={<NotFound/>}/>
          


        </Routes>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
