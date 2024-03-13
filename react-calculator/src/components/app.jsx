import React, { Component } from 'react';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import { Routes, Route } from 'react-router-dom';
import Login from './content/login';
import Register from './content/register';
import Calculate from './content/calculate';
import NotFound from './content/notfound';
import { Navigate } from 'react-router-dom';
import Home from './content/home';

class App extends Component {
    state = {
        is_login: false,
        username: "shxuiao",
    }
    render() {
        return (
            <React.Fragment>

                <NavBar is_login={this.state.is_login} username={this.state.username}/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={this.state.is_login ? <Home /> : <Login /> } />
                        <Route path='/register' element={this.state.is_login ? <Home /> : <Register />} />
                        <Route path='/calculate' element={<Calculate />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path= "*" element={<Navigate replace to="/404/" />} />
                    </Routes>
                </div >  
            </React.Fragment>
            

        );
    }
}

export default App;