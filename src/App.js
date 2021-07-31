import {BrowserRouter as Router, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList"
import ExerciseEdit from "./components/ExerciseEdit"
import ExerciseCreate from "./components/ExerciseCreate"
import UserCreate from "./components/UserCreate"

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={ExerciseEdit} />
        <Route path="/create" exact component={ExerciseCreate} />
        <Route path="/user" exact component={UserCreate} />
    </Router>
  );
}

export default App;
