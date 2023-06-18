import{BrowserRouter as Router, Routes, Route}from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Offers from "./Pages/Offers"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import ForgotPassword from "./Pages/ForgotPassword"
import Header from "./Components/Header"

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>

    </Routes>
   </Router>
  );
}

export default App;
