// 注册路由组件
import React, { Component } from 'react';
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile'
import Logo from '../../components/logo/logo'

const Item = List.Item


class register extends Component {
    render() {
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>用户名:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type='password'>密码：</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type='password'>确认密码：</InputItem>
                        <WingBlank></WingBlank>
                        <Item>
                            <span>用户类型：</span>
                            <Radio>大神</Radio>
                            <Radio>老板</Radio>
                        </Item>
                        <WingBlank></WingBlank>
                        <Button type='primary'>注册</Button>
                        <WingBlank></WingBlank>
                        <Button>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default register;