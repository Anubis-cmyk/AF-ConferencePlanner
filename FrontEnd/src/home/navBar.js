import React, {Component} from 'react';
import logo from './image/logo.jpg';
import {Link, withRouter} from "react-router-dom";

const isActive = (history, path) => {
    if(history.location.pathname === path){
        return { color: "#ff9900"}
    } else {
        return { color: "#ffffff"}
    }
};

const localUser = JSON.parse(localStorage.getItem('user')) || null;
let [user,setUser] = useState(localUser);

useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')));
    console.log("data " +user);

},[location]);

const NavBar = ({history}) => (
    <div data-testid="nav-1">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
    &nbsp;I<span>CAF</span>
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

    {/* Without Login */}

            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/view')} to="/view">Conference</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/workshop-template-download')} to="/workshop-template-download">Download Template</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/registration')} to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign in</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/about-us')} to="/about-us">AboutUs</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/contact-us')} to="/contact-us">ContactUs</Link>
            </li>
{/* With WorkShop Conductor Login */}
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop/my')} to="/workshop/my">My WorkShop</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop/registration')} to="/workshop/registration">Workshop Registration</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop-template-download')} to="/workshop-template-download">Download Template</Link>
</li>

{/* With Attendee Login */}
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop-attendee')} to="/workshop-attendee">My WorkShop</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop-attendee/registration')} to="/workshop-attendee/registration">WorkShop Registration</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop-payment')} to="/workshop-payment">My Payments</Link>
</li>

{/* With Admin Login */}
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/admin')} to="/admin">Admin</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/admin/workshop')} to="/admin/workshop">Workshop</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/admin/attendee-workshop')} to="/admin/attendee-workshop">WorkShop Attendee</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/admin/attendee-payments')} to="/admin/attendee-payments">Attendee Payment</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/admin-editor')} to="/admin-editor">Conference</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/research-paper')} to="/research-paper">Researcher</Link>
    </li>

{/* With Editor Login */}
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/editor')} to="/editor">Dashboard</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/create-conference')} to="/create-conference">Create Conference</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/create-speaker')} to="/create-speaker">Create Speaker</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/create-topic')} to="/create-topic">Create Topic</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/manage-conference')} to="/manage-conference">Manage Conference</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/manage-speaker')} to="/manage-speaker">Manage Speaker</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/manage-topics')} to="/manage-topics">Manage Topics</Link>
</li>

{/* With Researcher Login */}
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/researcher')} to="/researcher">Researcher</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/research-paper')} to="/research-paper">Research Papers</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/research-payment-details')} to="/research-payment-details">Research Payment</Link>
</li>

{/* With Reviewer Login */}
<li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" style={isActive(history, '/research-paper')} to="/research-paper">Research Papers</Link>
</li>

</ul>
</div>
</div>
</nav>
</div>
)

export default withRouter(NavBar);