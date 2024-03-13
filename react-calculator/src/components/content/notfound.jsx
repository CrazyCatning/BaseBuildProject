import React, { Component } from 'react';
import ContentBase from './contentbase';

class NotFound extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <ContentBase>404</ContentBase>
            </React.Fragment>
        );
    }
}
 
export default NotFound;