import logo from './logo.svg';
import './App.css';
import  NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
