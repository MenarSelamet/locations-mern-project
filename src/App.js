import Home from "./Pages/Home/Home";
import Places from "./Pages/Places/Places";
import Auth from "./Pages/Authentication/Auth";
import NewPlaceForm from "./Pages/NewPlace/NewPlaceForm";
import UpdatePlaceForm from "./Pages/UpdatePlace/UpdatePlaceForm";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/new" element={<NewPlaceForm />} />
        <Route path="/update" element={<UpdatePlaceForm />} />
      </Routes>
    </div>
  );
}

export default App;
