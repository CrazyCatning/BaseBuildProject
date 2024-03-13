import React, { Component } from 'react';
import ContentBase from './contentbase';
import $ from 'jquery'

class Login extends Component {
    state = {
        error_message: "",
        username: "",
        password: "",
    }
    handleClick = e => {
        e.preventDefault();
        if (this.state.username === "") {
            this.setState({error_message: "账号不能为空"})
        } else if (this.state.password === "") {
            this.setState({error_message: "密码不能为空"})
        } else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/login/",
                type: "post",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                dataType: "json",
                success: resp => {
                    if (resp.result === "success") {
                        window.location.href="/calculate";
                    } else {
                        this.setState({error_message: "账号或密码错误"})
                    }
                }
            })
        }

    }
    render() {
        return (
            <React.Fragment>
                <ContentBase>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-sm-3">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">账号</label>
                                        <input onChange={e => {this.setState({username: e.target.value})}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">密码</label>
                                        <input onChange={(e) => {this.setState({password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div style={{height: "2rem", color: "red"}}>{this.state.error_message}</div>
                                    <button onClick={this.handleClick} style={{width:"100%"}} type="submit" className="btn btn-primary ">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </ContentBase>
            </React.Fragment>
        );
    }
}




export default Login;
