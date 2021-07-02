import React, {Component} from 'react';
import axios from 'axios'

//Initial states of input fields
const initialState = {
    organizerName:'',
    organizerContactNo:'',
    organizerEmail: '',
    workShopTitle: '',
    description: '',
    proposalURL: '',
    estimatedDuration: 0,
    paymentAmount: 0
}

class CreateWorkShop extends Component {

    constructor(props) {
        super(props);
        //bind onChange function
        this.onChange = this.onChange.bind(this);
        //bind onSubmit function
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    //to store values into input fields
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    //To pass values into database
    onSubmit(e) {
        e.preventDefault();
        //create a object to send to database
        let workshop = {
            organizerName: this.state.organizerName,
            organizerContactNo: this.state.organizerContactNo,
            organizerEmail: this.state.organizerEmail,
            workShopTitle: this.state.workShopTitle,
            description: this.state.description,
            proposalURL: this.state.proposalURL,
            estimatedDuration: this.state.estimatedDuration,
            paymentAmount: this.state.paymentAmount
        }
        //call the end point and pass the values using axios
        console.log('data to send', workshop);
        axios.post('http://localhost:8080/workshop/create', workshop)
            .then(response => {
                alert('Data successfully inserted')
                this.props.history.push('/workshop/my');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                <div className="p-3">
                    <h1>WorkShop Registration</h1>
                    <div className="p-3">
                        <form onSubmit={this.onSubmit} className="row g-3" data-testid='form-tag'>
                            <div className="col-12">
                                <label htmlFor="organizerName" className="form-label">Organizer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="organizerName"
                                    name="organizerName"
                                    value={this.state.organizerName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organizerContactNo" className="form-label">Organizer Contact Number</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="organizerContactNo"
                                        name="organizerContactNo"
                                        value={this.state.organizerContactNo}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="organizerEmail" className="form-label">Organizer Email</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="far fa-envelope"></i></span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="organizerEmail"
                                        placeholder="name@example.com"
                                        name="organizerEmail"
                                        aria-describedby="inputGroupPrepend"
                                        value={this.state.organizerEmail}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="workShopTitle" className="form-label">Title of the WorkShop</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="workShopTitle"
                                    name="workShopTitle"
                                    value={this.state.workShopTitle}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}>
                                </textarea>
                            </div>
                            <div className="col-12">
                                <label htmlFor="proposalURL" className="form-label">Proposal</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="proposalURL"
                                    name="proposalURL"
                                    value={this.state.proposalURL}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="estimatedDuration" className="form-label">Estimated Duration</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Days</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="estimatedDuration"
                                        name="estimatedDuration"
                                        aria-label="duration"
                                        value={this.state.estimatedDuration}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="paymentAmount" className="form-label">Payment Amount</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="paymentAmount"
                                        name="paymentAmount"
                                        aria-label="Amount"
                                        value={this.state.paymentAmount}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div><br/>
            </div>
        )
    }
}

export default CreateWorkShop;