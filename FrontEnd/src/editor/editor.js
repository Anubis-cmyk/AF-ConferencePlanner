import React from 'react';
import Layout from "./layout";
import {Link} from "react-router-dom";



const EditorDashboard = () => {

    const Actions = () => {
        return (
            <div className="card mb-5" style={{border: '2px solid #666'}}>
                <h3 className="card-header" style={{background: "#BEBEBE"}}> Manage Conferences </h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create-conference" > Add Conference </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create-speaker" > Add Speaker </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create-topic" > Add Topic </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/manage-conference" > Manage Conference </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/manage-speaker" > Manage Speaker </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/manage-topics" > Manage Topics </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/view" > Active Conference </Link>
                    </li>
                </ul>
            </div>
        )
    };

    const editorInfo = () => {
        return (
            <div className="card mb-5" style={{border: '2px solid #666'}}>
                <h3 className="card-header" style={{background: "#BEBEBE"}}> Editor Details </h3>
                <ul className="list-group">
                    <li className="list-group-item">Name : Jay</li>
                    <li className="list-group-item">Email : jay@gmail.com</li>
                    <li className="list-group-item">Role : Editor</li>
                </ul>
            </div>
        )
    };


    return (
        <div className="border border-info" style={{margin: 40}}>
        <Layout titleheader="Dashboard" titleDescription="Editor Dashboard"  className="container-fluid">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-4">
                        {editorInfo()}
                    </div>
                    <div className="col-4">
                        {Actions()}
                    </div>
                </div>
            </div>
        </Layout>
        </div>
    );
};

export default EditorDashboard;
