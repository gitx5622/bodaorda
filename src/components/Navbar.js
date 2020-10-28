import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SignOut} from "../store/auth/actions/authActions";


const { Header, Content} = Layout;

const  Navbar = () => {
    const currentState = useSelector((state) => state);

    const { isAuthenticated } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };


    const SignedInLinks = (
        <Menu.Item style={{float:"right"}} key="7"> <NavLink to="/signup">REGISTER</NavLink></Menu.Item>,
        <Menu.Item style={{float:"right"}} key="2"><NavLink to="/login">LOGIN</NavLink></Menu.Item>

    );
    const SignedOutLinks = (
        <Menu.Item style={{float:"right"}} key="2"><NavLink to="/logout"><a href="#/" onClick={logout} style={{color:"white"}}>LOGOUT</a></NavLink></Menu.Item>
    );

        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><NavLink to="/">BODA ORDA</NavLink></Menu.Item>
                            { isAuthenticated ? SignedOutLinks: SignedInLinks }
                            <Menu.Item style={{float:"right"}} key="3"><NavLink to="/">CONTACT</NavLink></Menu.Item>
                            <Menu.Item style={{float:"right"}} key="4"><NavLink to="/">Why Boda Orda ?</NavLink></Menu.Item>
                            <Menu.Item style={{float:"right"}} key="5"><NavLink to="/">ABOUT US</NavLink></Menu.Item>
                            <Menu.Item style={{float:"right"}} key="6"><NavLink to="/">HOME</NavLink></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                    </Content>
                </Layout><br/>
            </div>
        );

}

export default Navbar;

