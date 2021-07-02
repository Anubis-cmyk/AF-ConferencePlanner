import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <section>
                <>
                    <section>
                        <div>
                            <div className="container-fluid mt-5">
                                <h2>Welcome</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                               placeholder="Enter Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Contact Number">Name</label>
                                        <input type="tel" className="form-control" id="name"
                                               placeholder="Enter contact number"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                               placeholder="Enter Name"/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4"
                                                   placeholder="Password"/>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </section>

                </>
            </section>
        )
    }
}

export default Home;