import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <section>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/home' element={<Home/>}  />
        <Route path='/add' element={<Add/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </section>
     
      <Footer/>
    </div>
  );
}

export default App;
