import { useEffect, useState } from 'react';
import AllEvents from './AllEvents';
import AllItemsList from './AllItemsList';
import './App.css';
import Header from './Header';
import UsersItemList from './UsersItemList';
import { Switch, Route, Link } from "react-router-dom";

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
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/user">
          <UsersItemList currentUser={currentUser} setCurrentUser={setCurrentUser} allToys={allToys} setAllToys={setAllToys} allUsers={allUsers} setAllUsers={setAllUsers} />
        </Route>
        <Route exact path="/">
          <AllItemsList allToys={allToys} setAllToys={setAllToys} currentUser={currentUser} />
        </Route>
        <Route path="/events">
          <AllEvents allEvents={allEvents} setAllEvents={setAllEvents} currentUser={currentUser} />
        </Route>
        <Route path="*">
          <div>
            <h1>You're on the wrong side of town, nothing to see here.</h1>
            <Link to="/">Back Home</Link>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
