import React, { Component } from 'react';


class ContentBase extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container" style={{margin: "20px auto"}}>
                    <div className="card">
                        <div className="card-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default ContentBase;