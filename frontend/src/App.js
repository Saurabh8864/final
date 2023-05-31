import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contacts from "./components/Contact/Contacts";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./actions/user";
import Adminf from "./components/Admin/Adminf";
import Timelinef from "./components/Admin/Timelinef";
import Youtubef from "./components/Admin/Youtubef";
import Projectf from "./components/Admin/Projectf";
import Loader from "./components/loader/Loader";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading ,user} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
    <Loader/>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home timelines ={user.timeline} skills ={user.skills} />} />
            <Route path="/about" element={<About  about ={user.about} />} />
            <Route path="/projects" element={<Project  projects ={user.projects}/>} />
            <Route path="/contact" element={<Contacts />} />
            <Route
              path="/account"
              element={isAuthenticated ? <Adminf /> : <Login />}
            />

            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timelinef /> : <Login />}
            />
              <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtubef /> : <Login />}
            />
             <Route
              path="/admin/project"
              element={isAuthenticated ? <Projectf /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
