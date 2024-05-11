import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UseAuthContext } from './context/userContext';

function App() {
  const { authUser } = UseAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Router>
        <Routes>
          <Route path='/' element={authUser? <Home /> : <Navigate to="/login"/>} />
          <Route path='/login' element={authUser? <Navigate to="/"/>: <Login />} />
          <Route path='/signup' element={authUser? <Navigate to="/"/>: <Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
