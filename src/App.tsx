import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Label from './components/Label';
import Posts from "./components/Posts";
import Aps from "./components/Aps";
import Portal from "./components/Portal";
import { Contact } from "./components/Contact";
import { Users } from "./components/Users";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AboutUsPortal from "./components/AboutUsPortal";;
import BlogPortal from "./components/BlogPortal";
import GalleryPortal from "./components/GalleryPortal";
import AddNewUser from "./components/AddNewUser";
import { CreatePost } from "./components/CreatePost";
import Galleries from "./components/Galleries";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/label" element={<Label />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/apscalculator" element={<Aps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/portal" element={<Portal />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="blog" element={<BlogPortal />} />
            <Route path="about" element={<AboutUsPortal />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<GalleryPortal />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddNewUser />} />
            <Route path="createpost" element={<CreatePost />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
