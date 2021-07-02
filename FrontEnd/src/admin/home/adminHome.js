import React, {Component} from 'react';
import "./style/adminHome.css"

class AdminHome extends Component {
    render() {
        return (
            <div className="admin-container">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <div className="button">
                                <a className="nav-link" href="/admin/workshop">
                                    <button className="btn btn-primary" >
                                        WorkShop
                                    </button>
                                </a>
                                <a className="nav-link" href="/admin/attendee-workshop">
                                    <button className="btn btn-primary" >
                                        Attendee
                                    </button>
                                </a>
                                <a className="nav-link" href="/admin/attendee-payments">
                                    <button className="btn btn-primary" >
                                        Attendee Payment
                                    </button>
                                </a>
                            </div>
                        </div>
            </div>


        )
    }
}

export default AdminHome;