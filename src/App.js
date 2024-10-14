import React  from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
function App() {
//navbar=>home,about contact,login(form appears=>email,password,login with google,submit,)post(image,description),
//footer
//
const navigate=useNavigate()
return(
<nav>
  <h1>Navbar</h1>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li onClick={()=>navigate('/post')}>Create Post</li>
    <li  onClick={()=>navigate('/login')}>Login</li>
  </ul>
</nav>

)
}

export default App;


