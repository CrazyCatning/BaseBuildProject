import React, { Component } from 'react';
import NavBar from './navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './content/home';
import Calculate from './content/calculate';
import Register from './content/register';
import NotFound from './content/notfound';
import Login from './content/login'
import { Navigate } from 'react-router-dom';


class App extends Component {
    state = { 
        is_login: false,
        username: "xx",

     };
    render() { 
        return (
            <React.Fragment>
                <NavBar is_login={this.state.is_login} username={this.state.username}/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/calculator' element={<Calculate />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path= "*" element={<Navigate replace to="/404/" />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;