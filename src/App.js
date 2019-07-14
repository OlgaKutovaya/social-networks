import React from 'react';
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import './App.scss';

function App() {
  return (
    <div className="app">
       <Header/>
       <CardList/>
    </div>
  );
}

export default App;
