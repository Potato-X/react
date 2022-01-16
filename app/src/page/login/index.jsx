import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./index.scss";
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="login">
        <div className="login-box">
          <div className="login-title">手机验证码登录</div>
          <div className="login-form">
            <div>
              <input type="tel" placeholder="输入手机号" />
            </div>
            <div className="login-form-code">
              <input type="number" placeholder="输入验证码" />
              <span className="code-btn">获取验证码</span>
            </div>
            <button className="login-btn" >登录</button>
          </div>
          <div className="login-tips">Lorem ipsum dolor sit amet consectetur adipisicisequuntur. Laboriosam hic ea unde seq</div>
        </div>
      </div>
    );
  }
}
