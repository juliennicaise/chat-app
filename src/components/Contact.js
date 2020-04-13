import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }


  render() {

    return (

      <div className="Contact">
        <img src={this.props.avatar} className="avatar" alt="" />
        <div>
          <h4 className="name"> {this.props.name} </h4>
          <div className="status">
            <div
              onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}
            >
              
              {this.state.online ? (
                <div className="status-online" />
              ) : (
                <div className="status-offline" />
              )}
              {this.state.online ? (
                <div className="status-text">online </div>
              ) : (
                <div className="status-text">offline </div>
              )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

