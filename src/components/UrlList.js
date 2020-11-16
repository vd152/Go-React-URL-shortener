import React from 'react';
import UrlCard from './UrlCard';
import { connect } from "react-redux";
import {fetchAll} from '../actions/index';

class UrlList extends React.Component{

    constructor(props){
        super();
        this.state = {
           
            isLoaded: false
        }
    }


    async componentDidMount() {
        await this.props.fetchAll();
        this.setState({ isLoaded: true});
    }


    renderList=()=>{
        const urls = this.props.urls;
        if(urls.length){
        return urls.map(url => {
            return (
                <React.Fragment key={url.id}>
                    <UrlCard longUrl={url.longUrl} shortUrl={url.shortUrl} id={url.id} code={url.urlCode} count={url.count}/>
                </React.Fragment>
            );
        
        });
        }else{
            return <div style={{color: "white"}}>Add your first URL!!</div>;
        }
    }

    render(){
        if(this.state.isLoaded){
            return(
                <div className="row justify-content-center mt-5">
                    {this.renderList()}
                </div>
            );
            
        }else{
            return (
                <div className="row justify-content-center">
                    <div className="col-12 text-center" style={{color: "white"}}>
                        <br />
                         <br />
                        <h1>Good things take time.</h1>
                        <img src="loading.gif" alt="load"></img>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return { urls: state.urls };
};

export default connect(mapStateToProps, { fetchAll })(UrlList);
