import './App.css';
// import  {Lobby}  from './screens/Lobby';
// import { Routes, Route } from 'react-router-dom';
// import Room from './screens/Room';



// function App() {
//   return (
//     <div >

     
// <Routes>
//   <Route path='/' element={<Lobby/>} />
//   <Route path='/room/:roomId' element={<Room/>} />
// </Routes>
    
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;