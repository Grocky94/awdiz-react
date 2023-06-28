import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Counter from './components/counter';
import Selection from './components/Section';
import Type1UseEffect from './components/Type1UseEffect';
import Type2UseEffect from './components/Type2UseEffect';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/type2UseEffect" element={<Type2UseEffect/>}/>
        <Route exact path="/type1UseEffect" element={<Type1UseEffect />}/>
        <Route exact path="/section" element={<Selection/>}/>
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/Welcome" element={<Welcome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
