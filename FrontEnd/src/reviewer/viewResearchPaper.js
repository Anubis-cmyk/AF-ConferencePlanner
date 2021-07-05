import React, {Component} from 'react';
import axios from "axios";
import jsPDF from 'jspdf';

class ViewResearchPaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researchPapers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/research/').then(response => {
            this.setState({researchPapers: response.data.data});
            console.log(response.data);
        })
    }

    deleteResearchPaper(e, id){
        axios.delete('http://localhost:8080/research/delete/:id').then(response => {
            this.componentDidMount()
            alert("Delete successfully!");
        })
    }
    download = () => {
        let doc = new jsPDF();
        doc.text("paper", 20, 20);
        doc.save("Paper.pdf");
    }

    navigatePaymentPage(e) {
        window.location = `/research-paper-payment`
    }
    render() {
        return(
            <div className="container mt-5">
                <h3>Review Research Papers</h3>
                {this.state.researchPapers.length > 0 && this.state.researchPapers.map((item, index) => (
                    <div key={index} className="card mb-3 shadow">
                        <div className="card-header">
                            <h5 className='card-title'>{item.title}</h5>
                            </div>
                        <div className="p-3 row" >
                            <div className="col-md-8">
                            <h6><b>Description:</b> {item.description}</h6>
                            <h6><b>Author: </b>{item.author}</h6>
                            <h6><b>Paper:</b> {item.paper}</h6>
                            <h6><b>Status:</b> {item.status}</h6>
                            </div>
                            <div className="col-md-4">
                                <div className="center">
                                <button type="submit" className="btn btn-outline-primary" onClick = {this.download}><i className="fa fa-eye mr-3"></i>&nbsp; View</button>
                            <button style={{marginLeft: "20px"}} type="submit" className="btn btn-outline-success" onClick={e => this.navigatePaymentPage(e)}><i className="fa fa-check mr-3"></i>&nbsp; Approve</button>
                            <button style={{marginLeft: "20px"}} onClick = {e => this.deleteResearchPaper(e, item._id)} className="btn btn-outline-danger"><i className="fa fa-times mr-3"></i>&nbsp; Decline</button> 
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default ViewResearchPaper;