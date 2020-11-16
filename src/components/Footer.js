import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <div className="footer p-3">
                <p className="mb-0">By: </p>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <a href="https://github.com/nik-gautam/" target="_blank" style={{textDecoration: "none", color: "white"}}><p className="mb-0">Nikhil Gautam</p></a>
                    </div>
                    <div className="col-md-6 col-12">
                        <a href="https://github.com/vd152/" target="_blank" style={{textDecoration: "none", color: "white"}}><p className="mb-0">Vidhi Angrish</p></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;