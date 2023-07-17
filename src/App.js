import{BrowserRouter as Router, Routes, Route}from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Offers from "./Pages/Offers"
import SignUp from "./Pages/SignUp"
import PrivateRoute from "./Components/PrivateRoute"
import SignIn from "./Pages/SignIn"
import ForgotPassword from "./Pages/ForgotPassword"
import Header from "./Components/Header"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from "./Pages/CreateListing"

function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/create-listing" element={<CreateListing/>}/>

    </Routes>
   </Router>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

   </>
   
  );
}

export default App;
