import { useEffect, useState } from 'react';
import AllEvents from './AllEvents';
import AllItemsList from './AllItemsList';
import './App.css';
import Header from './Header';
import UsersItemList from './UsersItemList';
import { Switch, Route } from "react-router-dom";

function App() {

  const [allToys, setAllToys] = useState([])
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(data => setAllToys(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(data => setAllEvents(data))
  }, [])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <UsersItemList allToys={allToys} />
        </Route>
        <Route path="/all-listings">
          <AllItemsList allToys={allToys} />
        </Route>
        <Route path="/events">
          <AllEvents allEvents={allEvents} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
