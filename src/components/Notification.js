import React from 'react';

class Notification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notification: false
        }
    }
    handleClose(){
        this.setState({
            notification: false
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.notification ? "ant-notification ant-notification-topRight" : "display-none"}>
                    <span>
                        <div className="ant-notification-notice ant-notification-notice-closable">
                            <div className="ant-notification-notice-content">
                                <div className="inner">
                                    <div className="ant-notification-notice-message">
                                        <img src={require("../images/icons8-listening-80.png")}/>
                                    </div>
                                    <div className="ant-notification-notice-description">
                                        Mute/Unmute video by taping on it.
                                    </div>
                                </div>
                            </div>
                            <a onClick={this.handleClose.bind(this)} tabIndex="0" className="ant-notification-notice-close">
                                <span className="ant-notification-notice-close-x">
                                    <i className="fa fa-times fa-2" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default Notification;