import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/homepage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PostedSkill from './pages/PostedSkill';
import BrowseSkills from './pages/BrowseSkills';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/postedSkill' element={<PostedSkill/>} />
      <Route path='/browseSkills' element={<BrowseSkills/>} />
    </Routes>
    </>
  )
}

export default App ;
