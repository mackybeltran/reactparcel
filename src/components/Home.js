import React, { PureComponent } from 'react';
import './Home.scss';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

class Home extends PureComponent {

    render() {
        return <div className='Home'>
        <Header/>
        <Body/>            
        <Footer/>
        </div>
    }

}

export default Home