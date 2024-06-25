import Cards from './components/Cards';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/pages/Project';
import ProjectDetail from './components/pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:name" element={<ProjectDetail />} />
        <Route path="/blog" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
