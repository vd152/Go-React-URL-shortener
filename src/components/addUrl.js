import React from 'react';
import { connect } from "react-redux";
import { addUrl } from '../actions/index'

class AddUrl extends React.Component{

    state = {
        LongUrl: "",
        CustomUrlCode: ""
    };
    
    handleLongUrlChange = e => {
        this.setState({ LongUrl: e.target.value });
    };

    handleUrlCodeChange = e => {
        this.setState({ CustomUrlCode: e.target.value });
    };

    handleSubmit = () => {
        this.props.addUrl(this.state.LongUrl, this.state.CustomUrlCode);
        this.setState({
            LongUrl: "",
            CustomUrlCode: ""
        })
    };

    render(){
        return(
            <form id="form">
                <div className="row text-center justify-content-center mt-5">
                    <div className="col-md-4 col-10 form-group has-error p-md-2 m-md-2 p-md-0 m-md-0">
                        <div className="form-horizontal row ">
                            <div className="col-2 control-label">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </div>
                            <div className="col-10 pl-0 pr-md-3 pr-0" >
                                <input className="form-control" type="text" name="LongUrl" placeholder="Long URL" value={this.state.LongUrl} onChange={this.handleLongUrlChange} required/>
                            </div>
                        </div>				
                    </div>
                    <div className="col-md-4 col-10 form-group has-error p-md-2 m-md-2 p-md-0 m-md-0">
                        <div className="form-horizontal row">
                        <div className="col-2 control-label" >
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-fullscreen-exit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
                            </svg>
                        </div>
                        <div className="col-5 control-label" style={{backgroundColor: '#108dbe'}}>
                            <span>www.octavemusic.tk/</span>
                        </div>
                            <div className="col-5 pl-0 pr-md-3 pr-0">
                                <input className="form-control" type="text" name="CustomUrlCode" value={this.state.CustomUrlCode} onChange={this.handleUrlCodeChange} placeholder="Custom Shortcode" />
                            </div>
                        </div>				
                    </div>
                    <div className="col-md-2 col-10 form-group p-2 m-2 text-center">
                        <button className="btn form-control" type="button" onClick={this.handleSubmit.bind(this)}>Shorten</button>
                    </div>
                </div>  
            </form>   
        );
    }
}

const mapStateToProps = state => {
    return { short: state.short };
};

export default connect(mapStateToProps, { addUrl })(AddUrl);
