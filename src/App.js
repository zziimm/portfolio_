import Bubbles from './components/Cards';
import Navigation from './components/Navigation';
import GlobalStyles from './css/GlobalStyles';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/pages/Project';
import ProjectDetail from './components/pages/ProjectDetail';

function App() {
  return (
    // <>
    //   <Home />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:name" element={<ProjectDetail />} />
        <Route path="/blog" element={<Bubbles />} />
      </Routes>
      {/* <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/projects/:name" component={ProjectDetail} />
      <Route exact path="/blog" component={BlogPage} /> */}
    </BrowserRouter>
    // <>
    //   <GlobalStyles />
    //   <Header />
    //   <main>
    //     <div className='container'>
    //       <Navigation />
    //       <Home />
    //       <About />
    //     </div>
    //   </main>
    //   <Bubbles />
    // </>
  );
}

export default App;
