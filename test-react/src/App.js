import './App.css'
import {Routes, Route} from "react-router-dom"
import Accueil from './components/Home/Accueil'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Profile/Posts/Posts'
import Experience from './components/Profile/Experiences/Experiences'
import Projet from './components/Profile/Projets/Projets'
import Messagerie from './components/Profile/Messagerie/Messagerie'
import SignInMail from './components/Home/SignInMail/SignInMail'
import Login from './components/Home/Login/Login'
import Home from './components/Home/Home'
import Project from './components/Project/Project'


export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path ="/" element ={<Accueil />} />
        <Route path ="/home" element ={<Home />} />
        <Route path ="/signin_mail" element ={<SignInMail />} />
        <Route path ="/login" element ={<Login />} />
        <Route path ="/project" element ={<Project />} />
        <Route path ="/profil/:id" element ={<Profile />}>
          <Route path ="/profil/:id/post" element ={<Post />} />
          <Route path ="/profil/:id/experience" element ={<Experience />} />
          <Route path ="/profil/:id/projet" element ={<Projet />} />
          <Route path ="/profil/:id/messagerie" element ={<Messagerie />} />

        </Route>     
      </Routes>
    </div>
  );
}


