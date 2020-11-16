import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class UrlCard extends React.Component{
    constructor(props){
        super();
    }

    state = {
        edit: false,
        newUrlCode: "",
        newLongUrl: ""
    };

    displayCard = () => {
        return (
            <form className="display-form">
                <div className="form-group">
                    <label className="label">Long URL</label>
                    <input className="form-control" type="text" value={this.props.longUrl} readOnly></input>
                </div>
                <div className="form-group">
                    <label className="label">Short URL</label>
                    <div className="d-flex">
                        <span><p className="mt-2 mb-1">octavemusic.tk/</p></span>
                        <input className="form-control" type="text" value={this.props.code} readOnly style={{width: "100%"}} readOnly></input>
                        <CopyToClipboard text={this.props.shortUrl}>
                            <p type="button" className="btn pt-2 pb-0 pl-2 pr-0 m-0">Copy</p>
                        </CopyToClipboard>
                    </div>
                </div>
                    <input className="form-control" type="hidden" value={this.props.id}></input>
            </form>
        );
    }

    editCard = () => {
        return(
            <form className="display-form">
                <div className="form-group">
                    <label className="label">Long URL</label>
                    <input className="form-control" type="text" value={this.props.longUrl} onChange={e=>{
                        this.setState({ newLongUrl: e.target.value});
                    }}></input>
                </div>
                <div className="form-group">
                    <label className="label">Short URL</label>
                    <div className="d-flex">
                        <span><p className="mt-2 mb-1">octavemusic.tk/</p></span>
                        <input className="form-control" type="text" value={this.props.code} style={{width: "100%"}} onChange={e => {
                            this.setState({ newUrlCode: e.target.value });
                        }}></input>
                        <CopyToClipboard text={this.props.shortUrl}>
                            <p type="button" className="btn pt-2 pb-0 pl-2 pr-0 m-0">Copy</p>
                        </CopyToClipboard>
                    </div>
                </div>
                    <input className="form-control" type="hidden" value={this.props.id}></input>
            </form>
        );
    }

    render(){
        let inputBody;

        if(this.state.edit === true){
            inputBody = this.editCard;
        }else{
            inputBody = this.displayCard;
        }

        return(
            
            <div className="col-md-4 p-0 m-xl-2 m-4">
                <div className="card  mb-3">
                    <div className="card-body ">
                        {inputBody()}
                    </div>
                </div>
            </div>
            
        );
    }

}

export default UrlCard;