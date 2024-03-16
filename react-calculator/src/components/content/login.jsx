import React, { Component } from 'react';
import ContentBase from './Contentbase';
import $ from 'jquery';
class Login extends Component {
    state = {
        error_message: "",
        username: "",
        password: ""
    };
    handleClick = e => {
        e.preventDefault();
        if(this.state.username === "") this.setState({error_message: "用户名不能为空"});
        else if(this.state.password === "") this.setState({error_message: "密码不能为空"});
        else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/login/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                dataType: "json",
                success: resp => {
                    if (resp.result === "success") {
                        window.location.href="/calculate"
                    } else {
                        this.setState({error_message: resp.result});
                    }
                }

            })
        } 
    }

    render() {
        return (
            <ContentBase>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-2">
                            <form className=''>
                                <div className="mb-3">
                                    <label for="username" className="form-label">用户名</label>
                                    <input onChange={(e) => {this.setState({username: e.target.value})}} type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">密码</label>
                                    <input onChange={(e) => {this.setState({password: e.target.value})}} type="password" className="form-control" id="password" />
                                </div>
                                <div style={{height: "2rem"}}>{this.state.error_message}</div>

                                <button onClick={this.handleClick} style={{width: "100%"}} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </ContentBase>
        );
    }
}

export default Login;