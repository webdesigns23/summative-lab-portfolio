import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

//user data to dynamically change accroding to user
import user from "../data/user";
console.log(user);

//need to add name,city,color to home component to be able to pass args(props)
function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} /> 
      <About bio={user.bio} image={user.image} name={user.name}/>
      <Projects />
    </div>
  );
}

export default App;
