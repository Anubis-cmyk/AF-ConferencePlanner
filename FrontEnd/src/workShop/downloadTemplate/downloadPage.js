import React, {Component} from 'react';
import './style/downloadPage.css'
class DownloadPage extends Component {
    render() {
        return (
            <div className="a p-3"><br/>
                <center>
                    <div className="container-2">
                        <div className="card shadow p-3 rounded"><br/>
                            <h4>Download the template for workShop proposal</h4>
                            <br/><br/>
                            <button className="button button2" onClick={()=>{
                                window.location.replace('/workshop-template')
                            }}>Download the template</button><br/><br/>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default DownloadPage;