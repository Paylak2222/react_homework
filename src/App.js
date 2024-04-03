import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Order from './components/order/Order';
import Posts from './components/posts/Posts';
import Section from './components/section/Section';
import TranslateContext from './components/translate-context/TranslateContext';
import Translate from './components/translate/Translate';
import Language from './components/language/Language';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/profile-page/ProfilePage';
import Home from './screen/home/Home';
import Balance from './screen/balance/Balance';


function App() {
  const [lang, setLang] = useState(Translate.ru);

  return (
    <div className="App">   
      <TranslateContext.Provider value={{lang,setLang}}>
        <Header />
        <Language />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:userId' element={<ProfilePage />}/>
          <Route path='/notes' element={<Posts />}/>
          <Route path='/balance' element={<Balance />}/>
        </Routes>
        <Footer />
      </TranslateContext.Provider>
    </div>
  );
}

export default App;
