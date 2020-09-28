import React,{useState} from "react";
import { Label, Input, FormGroup, Button, Card, CardHeader, CardBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import background from '../images/background.jpg';
import "./Auth.css";
import { SignUp } from '../store/auth/actions/authActions';
import Navbar from "../components/Navbar";


const Register = () => {
    const currentState = useSelector((state) => state.Auth);

    const [user, setUser] = useState({
        first_name:'',
        last_name:'',
        username:'',
        email: '',
        password: '',
        password_confirmation:''
    });
    const dispatch = useDispatch();

    const addUser = (credentials) => dispatch(SignUp(credentials));

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    const submitUser = (e) => {
        e.preventDefault();
        addUser({
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        });
    };

    if(currentState.isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <div>
            <Navbar/>
        <div className="App"  style={{ backgroundImage:`url(${background})`,backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="container Auth animated flash">
                <Card className="card-style">
                    <CardHeader><h1 className="title">Boda Order</h1></CardHeader>
                    <CardBody>
                        <form onSubmit={submitUser}>
                            <FormGroup>
                                <Label>User Name</Label>
                                <Input type="text" name="username" placeholder="Enter username"  onChange={handleChange}/>
                                { currentState.signupError && currentState.signupError.Required_username ? (
                                    <small className="color-red">{currentState.signupError.Required_username}</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Taken_username ? (
                                    <small className="color-red">{ currentState.signupError.Taken_username }</small>
                                ) : (
                                    ""
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input type="text" name="first_name" placeholder="Enter FirstName"  onChange={handleChange}/>
                                { currentState.signupError && currentState.signupError.Required_first_name ? (
                                    <small className="color-red">{currentState.signupError.Required_first_name}</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Taken_first_name ? (
                                    <small className="color-red">{ currentState.signupError.Taken_first_name }</small>
                                ) : (
                                    ""
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input type="text" name="last_name" placeholder="Enter LastName"  onChange={handleChange}/>
                                { currentState.signupError && currentState.signupError.Required_last_name ? (
                                    <small className="color-red">{currentState.signupError.Required_last_name}</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Taken_last_name ? (
                                    <small className="color-red">{ currentState.signupError.Taken_last_name }</small>
                                ) : (
                                    ""
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
                                { currentState.signupError && currentState.signupError.Required_email ? (
                                    <small className="color-red">{currentState.signupError.Required_email}</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Invalid_email ? (
                                    <small className="color-red">{ currentState.signupError.Invalid_email }</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Taken_email ? (
                                    <small className="color-red">{ currentState.signupError.Taken_email }</small>
                                ) : (
                                    ""
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
                                { currentState.signupError && currentState.signupError.Required_password ? (
                                    <small className="color-red">{ currentState.signupError.Required_password }</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Invalid_password ? (
                                    <small className="color-red">{ currentState.signupError.Invalid_password }</small>
                                ) : (
                                    ""
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Password Confirmation</Label>
                                <Input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange}/>
                                { currentState.signupError && currentState.signupError.Required_password_confirmation ? (
                                    <small className="color-red">{ currentState.signupError.Required_password_confirmation }</small>
                                ) : (
                                    ""
                                )}
                                { currentState.signupError && currentState.signupError.Invalid_password_confirmation ? (
                                    <small className="color-red">{ currentState.signupError.Invalid_password_confirmation }</small>
                                ) : (
                                    ""
                                )}
                            </FormGroup>
                            { currentState.isLoading ? (
                                <Button
                                    color="primary"
                                    type="submit"
                                    block
                                    disabled
                                >
                                    Registering...
                                </Button>
                            ) : (
                                <Button
                                    color="primary"
                                    type="submit"
                                    block
                                    disabled={ user.username === "" || user.email === "" || user.password === ""  }
                                >
                                    Register
                                </Button>
                            )}
                        </form>
                        <div className="mt-2">
                            <small>Have an account? <Link to="/login">Please login</Link></small>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
        </div>
    );

}

export default Register