
import 'react-bootstrap';
import 'bootstrap';
import { Route, Routes } from 'react-router-dom';
import Navi from './components/Navbar.js';
import LandPage from './components/LandingPage'
import FactOne from './components/FactionOne.js';
import FactTwo from './components/FactionTwo.js';



function App() {
  //setting up state  *state and functional components don't like each other*
  // const [cards, setCard] = useState(['test 1', 'test 2']);
//state should be the array of char objects, which are made from the data in NewCharForm, or from an api if i have time to figure that out...
//would an api have simplified this whole thing? I feel like it might...
/* 
example char obj:
{
  id: 1, 
  charName: "belle", 
  charStory:"girl from the country lost in the big city", 
  faction1: false
}


*/



  return (
    <>
      <Navi/> 
      <Routes>
        <Route path="/" element={<LandPage/>} />
        <Route path="/Faction-One" element={<FactOne/>} />
        <Route path="/Faction-Two" element={<FactTwo/>} />        
      </Routes>
      
      
   </>
  );
}

export default App;
