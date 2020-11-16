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

    editButton = () => {
        return (
            
            <p className="btn edit-button" type="button" onClick={() => {
                this.setState({ edit: true})
            }}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </p>
        );
    }

    submitButton = () => {
        return(
            <p className="btn edit-button" type="button">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </p>
        );
    }

    dontEditButton = () => {
        return(
            <div className="text-center delete-button" onClick={() => {
                this.setState({ edit: false})
            }}>
                <button className="btn w-100 pl-0 pr-0 pt-1 pb-1 m-0">Nah! This is fine.</button>
            </div>
        );
    }

    deleteButton = () => {
        return(
            <div className="text-center delete-button">
                <button className="btn w-100 pl-0 pr-0 pt-1 pb-1 m-0">Delete</button>
            </div>
        );
    }

    render(){
        let inputBody;
        let button;
        let deleteButton;

        if(this.state.edit === true){
            inputBody = this.editCard;
            button = this.submitButton;
            deleteButton = this.dontEditButton;
        }else{
            inputBody = this.displayCard;
            button = this.editButton;
            deleteButton = this.deleteButton;
        }

        return(
            
            <div className="col-md-4 p-0 m-xl-2 m-4">
                <div className="card  mb-3">
                    <div className="card-body pb-0">
                        {button()}
                        {inputBody()}
                        
                    </div>
                    {deleteButton()}
                </div>
            </div>
            
        );
    }

}

export default UrlCard;