import { useEffect, useState } from 'react';
import AllEvents from './AllEvents';
import AllItemsList from './AllItemsList';
import './App.css';
import Header from './Header';
import UsersItemList from './UsersItemList';
import { Switch, Route } from "react-router-dom";
import ChangeCurrentUser from './ChangeCurrentUser';

function App() {

  const [allToys, setAllToys] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({
    name: "",
    password: "",
    isSignedIn: false
  })

  useEffect(() => {
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(data => setAllToys(data))

    fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(data => setAllEvents(data))

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(data => setAllUsers(data))
  }, [])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/user">
          <UsersItemList currentUser={currentUser} setCurrentUser={setCurrentUser} allToys={allToys} setAllToys={setAllToys} allUsers={allUsers} setAllUsers={setAllUsers}/>
        </Route>
        <Route exact path="/">
          <AllItemsList allToys={allToys} />
        </Route>
        <Route path="/events">
          <AllEvents allEvents={allEvents} />
        </Route>
        <Route path="*">
          <h1>You're on the wrong side of town, nothing to see here.</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
