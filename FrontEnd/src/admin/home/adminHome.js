import React, {Component} from 'react';
import "./style/adminHome.css"

class AdminHome extends Component {
    render() {
        return (
            <div className="admin-container">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <div className="button">
                                <button className="btn btn-primary" onClick={()=>{
                                    window.location.replace('/admin/workshop')
                                }}>
                                    WorkShop
                                </button>

                                <button className="btn btn-primary" onClick={()=>{
                                    window.location.replace('/admin/attendee-workshop')
                                }}>
                                    Attendee
                                </button>

                                <button className="btn btn-primary" onClick={()=>{
                                    window.location.replace('/admin/attendee-payments')
                                }}>
                                    Attendee Payment
                                </button>

                            </div>
                        </div>
            </div>


        )
    }
}

export default AdminHome;