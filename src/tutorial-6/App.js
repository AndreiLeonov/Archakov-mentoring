import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './Article';
import Home from './pages/Home';
import About from './pages/About';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

export default function App() {

    return (
        <div className="App">
            <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>} exact={true}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/post/:id'} element={<Article/>} exact={true}/>
                    <Route path={'*'} element={<h2 style={{ textAlign: 'center' }}>Страница не найдена!</h2>}/>
                </Routes>
            <br/>
            <Footer/>
        </div>
    );
}
