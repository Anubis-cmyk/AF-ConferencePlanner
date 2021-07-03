import React, {Component, useState} from 'react';
import Select from 'react-select';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

//Initial states of input fields
const initialState ={type:'',firstName:'',contactNo:'',email:'',password:'',conPass:''};


const SignIn  = () =>{

    const dispatch = useDispatch();
    const history = useHistory();

    const [isSignUp,setSignUp] =useState(false);
    const [formData,setFormData]=useState(initialState);


    const onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    /**
     * form submit
     * @param e
     */
    const onSubmit=(e) =>{
        e.preventDefault();
        console.log(formData);
        if(isSignUp){
            /*dispatch(singUp(formData,history));*/
        }else{
            /*  dispatch(singIn(formData,history));*/
        }
    }

    /**
     * switch form mode sign in and sign up
     */
    const swichText =()=>{
        setSignUp((prvIsSignUp)=>!prvIsSignUp);
    }

    return (
        <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
            <div className="p-3">
                <h1>User Registration</h1>
                <div className="p-3">
                    <form onSubmit={onSubmit} className="row g-3">
                        <div className="col-12">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="contactNo" className="form-label">Contact Number</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactNo"
                                    name="contactNo"
                                    value={this.state.contactNo}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroupPrepend"><i className="far fa-envelope"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="type" className="form-label">User type</label>
                            <Select
                                onChange={onChange}
                                id='type'
                                name='type'
                            >
                                <option value="workShopPresenter">Work Shop Presenter</option>
                                <option value="Attendee">Attendee</option>
                                <option value="Reviewer">Reviewer</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Editor">Editor</option>
                            </Select>
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
};

export default SignIn;