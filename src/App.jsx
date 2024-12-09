import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
    </Routes>
    </>
  )
}

export default App ;
