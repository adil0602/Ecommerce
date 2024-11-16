


import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
 <>
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="profile" element={<Profile/>} ></Route>
  </Routes>
 </Router>
 </>
  );
}

export default App;
