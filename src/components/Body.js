import React, { PureComponent } from 'react';
import './Body.scss';

class Body extends PureComponent {

    render() {
        return <div className='Body'>
                    <div className='_name'>
                        Bill Cleanton Services
                    </div>
                    <div className='_tagline'>
                        airbnb laundry and cleaning. coming soon.
                    </div>
            </div>
    }
}

export default Body