import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Body} />
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
