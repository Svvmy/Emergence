import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Profile/Posts/Posts'
import Experience from './components/Profile/Experiences/Experiences'
import Projet from './components/Profile/Projets/Projets'
import Messagerie from './components/Profile/Messagerie/Messagerie'


export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path ="/" element ={<Home />} />
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


