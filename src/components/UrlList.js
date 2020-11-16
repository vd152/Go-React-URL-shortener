import React from 'react';
import UrlCard from './UrlCard';

class UrlList extends React.Component{

    constructor(props){
        super();
    }

    renderList(){
        var urls = [
            {
                code: "123564",
                longUrl: "https://google.com",
                shortUrl: "www.octavemusic.tk/123564",
                id: "1"
            },
            {
                code: "9875",
                longUrl: "https://github.com",
                shortUrl: "www.octavemusic.tk/9875",
                id: "2"
            },
            {
                code: "85968574",
                longUrl: "https://msit.in",
                shortUrl: "www.octavemusic.tk/85968574",
                id: "3"
            }
        ];
        return urls.map(url => {
            return (
                <React.Fragment key={url.id}>
                    <UrlCard longUrl={url.longUrl} shortUrl={url.shortUrl} id={url.id} code={url.code} />
                </React.Fragment>
            );
        });
    }

    render(){
        return(
            <div className="row justify-content-center mt-5">
                {this.renderList()}
            </div>
        );
    }
}

export default UrlList;