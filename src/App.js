import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import Navbar from './components/Navbar';

const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<About />} path='/about'></Route>
                <Route element={<SinglePost />} path='/post/:slug'></Route>
                <Route element={<Post />} path='/post'></Route>
                <Route element={<Project />} path='/project'></Route>
            </Routes>
        </BrowserRouter>


    )
}

export default App