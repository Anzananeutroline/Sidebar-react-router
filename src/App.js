import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Documentation from './pages/Documentation';
import Resources from './pages/Resources';
import GitHub from './pages/GitHub';
import Body from './components/Body';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Navbar/>}/>
        <Route path="/documentation" element={<Documentation/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/github" element={<GitHub/>} />
      </Routes>
      
   <Body/>
    </BrowserRouter>
  );
}

export default App;
