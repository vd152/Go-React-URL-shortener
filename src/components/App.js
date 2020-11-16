import React from 'react';
import Navbar  from './Navbar';
import AddUrl from './AddUrl';
import UrlList from './UrlList';
import Footer from './Footer';

class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <AddUrl />
                <UrlList />
                <Footer />
            </div>
        );
    }
}

export default App;