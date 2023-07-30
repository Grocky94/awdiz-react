
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Counter from './components/counter';
import Selection from './components/Section';
import Type1UseEffect from './components/Type1UseEffect';
import Type2UseEffect from './components/Type2UseEffect';
import Type3UseEffect from './components/Type3UseEffect';
import Type4UseEffect from './components/Type4UseEffect';
import Wrapper from './components/01-07-23/Wrapper';
import StyleCompo from './components/01-07-23/StyleCompo';
import SingleProduct from './components/01-07-23/SingleProduct';
import Params from './components/01-07-23/Params';
import { useState } from 'react';
import Map from './components/01-07-23/Map';
import DeclerativeWay from './components/01-07-23/DeclerativeWay';
import Xyz from './components/02-07-23/Xyz';
import NewSingleProduct from './components/02-07-23/NewSingleProduct';
import ChildrenProp from './components/04-07-23/ChildrenProp';
import DynamicClases from './components/04-07-23/DynamicClases';
import DynamicStyling from './components/04-07-23/DynamicStyling';
import FormOne from './components/06-07-23/FormOne';
import FromSingleState from './components/08-07-23/FromSingleState';
import UseCallBack from './components/08-07-23/UseCallBack';
import UseMemo from './components/09-07-23/UseMemo';
import UseReducer from './components/09-07-23/UseReducer';
import ProductFromBackend from './components/10-07-23/ProductFromBackend';
import MultipleProductToSingle from "./components/10-07-23/MultipleProductToSingle"
import Register from './components/15-07-23/Register';
import Login from './components/15-07-23/Login';
import Cart from './components/18-07-23/cart';
import Profile from './components/22-07-23/Profile';
import Ref from './components/Ref';
function App() {
  const [myUser, setMyUser] = useState(["Rocky", "Santosh", "Pooja"])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/ref" element={<Ref/>}/>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="multipleProductToSingle/:id" element={<MultipleProductToSingle />} />
        <Route exact path="/productFromBackend" element={<ProductFromBackend />} />
        <Route eaxct path="/useReducer" element={<UseReducer />} />
        <Route exact path="/useMemo" element={<UseMemo />} />
        <Route exact path="/useCallBack" element={<UseCallBack />} />
        <Route exact path='/from-single-state' element={<FromSingleState />} />
        <Route exact path='/formOne' element={<FormOne />} />
        <Route exact path="/dynamic-styling" element={<DynamicStyling />} />
        <Route exact path='/dynamic-classes' element={<DynamicClases />} />
        <Route exact path="/childrenProp" element={<ChildrenProp />} />
        <Route exact path="/xyz" element={<Xyz />} />
        <Route exact path='/new-single-product/:id' element={<NewSingleProduct />} />
        <Route exact path='/declerative-way' element={<DeclerativeWay />} />
        <Route exact path="/map" element={<Map myUser={myUser} myName={'Rocky'} setMyUser={setMyUser} user={["Naval", "Swaraj", "Ajit"]} />} />
        <Route exact path="/params" element={<Params />} />
        <Route exact path='/single-product/:rocky' element={<SingleProduct />} />
        <Route exact path="/Style-Compo" element={<StyleCompo />} />
        <Route exact path="/wrapper" element={<Wrapper />} />
        <Route exact path="/type4UseEffect" element={<Type4UseEffect />} />
        <Route exact path="/type3UseEffect" element={<Type3UseEffect />} />
        <Route exact path="/type2UseEffect" element={<Type2UseEffect />} />
        <Route exact path="/type1UseEffect" element={<Type1UseEffect />} />
        <Route exact path="/section" element={<Selection />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Welcome" element={<Welcome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
