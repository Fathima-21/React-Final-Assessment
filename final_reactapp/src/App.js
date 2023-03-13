import './App.css';

import Reg from './account/register/Reg';
import Login from './account/login/Login';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './features/dashboard/Dashboard';


import Product from './features/products'
import Post from './features/posts';
import User from './features/users'
import Todo from './features/todos'
import Validation from './account/login/Validation';



function App() {
  return (
   <div>
     <Router>
      <Routes>
      <Route exact path="/" element={<Reg />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      {/* <Route exact path="/education" element={<EducationDetails/>}/> */}
      <Route exact path="/confirmation" element={<Validation/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/post" element={<Post/>}/>
      <Route exact path="/users" element={<User/>}/>
      <Route exact path="/todo" element={<Todo/>}/>
      

      </Routes>
      </Router>

    </div>
  );
}

export default App;