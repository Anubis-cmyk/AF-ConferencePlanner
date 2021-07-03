import React, {Component} from 'react';
import axios from "axios";
import * as jsPDF from "jspdf";
import moment from "moment";

class ViewWorkShops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshops: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8080/workshop/')
            .then(response => {
                this.setState({workshops: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deleteWorkShop(e, id){
        axios.delete(`http://localhost:8080/workshop/delete/${id}`)
            .then(response => {
                alert('Data successfully deleted')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        const date = prompt("Enter the date: ");
        axios.put(`http://localhost:8080/workshop/update/${id}`, {status: status,date: date, id:id})
        .then(response => {
            alert('Data successfully updated')
            this.componentDidMount()
        })
    }

    exportWorkShopPDF = () => {
        console.log("SSSSSSSSSS")
        const unit = "pt";
        const size = "A3";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        const title = "WorkShop Report";
        const headers = [["WorkShop Name", "Contact Number", "Email", "Title", "Description", "Estimated Duration(in days)", "Payment Amount($)", "Status"]];

        const workshops = this.state.workshops.map(
            workshops => [
                workshops.organizerName,
                workshops.organizerContactNo,
                workshops.organizerEmail,
                workshops.workShopTitle,
                workshops.description,
                workshops.estimatedDuration,
                workshops.paymentAmount,
                workshops.status,
                workshops.date
            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body: workshops
        };
        doc.setFontSize(20);
        doc.text(title, marginLeft, 40);
        require('jspdf-autotable');
        doc.autoTable(content);
        doc.save("WorkShops.pdf")
    }

    render() {
        return (
            <div className="p-3">
                <h1>Registered WorkShop List</h1>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" onClick={()=>this.exportWorkShopPDF()}>
                            Download Report <i className="fas fa-download"></i>
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Organizer Name</th>
                                    <th>Organizer ContactNo</th>
                                    <th>Organizer Email</th>
                                    <th>WorkShop Title</th>
                                    <th>Description</th>
                                    <th>Proposal URL</th>
                                    <th>Estimated Duration(in days)</th>
                                    <th>Payment Amount($)</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.workshops.length > 0 && this.state.workshops.map((item,index) => (
                                    <tr key={index} className="align-top">
                                        <td>{item.organizerName}</td>
                                        <td>{item.organizerContactNo}</td>
                                        <td>{item.organizerEmail}</td>
                                        <td>{item.workShopTitle}</td>
                                        <td>{item.description}</td>
                                        <td>{item.proposalURL}</td>
                                        <td>{item.estimatedDuration}</td>
                                        <td>{item.paymentAmount}</td>
                                        {item.status == "not approved" &&
                                            <td><h6><span className="badge bg-danger">{item.status}</span></h6></td>
                                        }
                                        {item.status == "approved" &&
                                            <td><h6><span className="badge bg-success">{item.status}</span></h6></td>
                                        }
                                        {item.date == null &&
                                            <td>-</td>
                                        }
                                        {item.date != null &&
                                            <td>{moment(item.date).format('YYYY-MM-DD')}</td>
                                        }
                                        <td><button className="btn btn-outline-warning" onClick={e => this.updateStatus(e,item._id)}>
                                            <i className="far fa-edit"></i>
                                        </button></td>
                                        <td><button className="btn btn-outline-danger" onClick={e => this.deleteWorkShop(e,item._id)}>
                                            <i className="fas fa-trash"></i>
                                        </button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewWorkShops;


