import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import CarList from "./components/CarList";

class App extends Component {

  render() {
    return (
      <main>
        <Navbar/>
        <CarList/>
      </main>

    );
  }
}

export default App;
