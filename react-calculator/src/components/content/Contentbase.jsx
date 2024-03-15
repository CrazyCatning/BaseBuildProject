import React, { Component } from 'react';


class ContentBase extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="card" style={{marginTop: "30px"}}>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ContentBase;