import React from 'react';
import Navbar  from './Navbar';
import AddUrl from './AddUrl';
import UrlList from './UrlList';

class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <AddUrl />
                <UrlList />
            </div>
        );
    }
}

export default App;