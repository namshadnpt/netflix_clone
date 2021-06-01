import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Banner from './components/banner/Banner'
import Rowpost from './components/rowpost/Rowpost'
import {actions,originals} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost title='Netflix Originals' url={originals}/>
      <Rowpost title='Actions' isSmall url={actions} />
    </div>
  );
}

export default App;
