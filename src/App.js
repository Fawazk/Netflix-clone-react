import './App.css';
import {originals,action,comedy,horror,romance} from './urls'
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Orginals' />
     <RowPost url={action} title='Action' isSmall  /> 
     <RowPost title="Comedy" isSmall url={comedy}/>
      <RowPost title="Horror" isSmall url={horror}/>
      <RowPost title="Romance" isSmall url={romance}/>
    </div>
  );
}

export default App;
