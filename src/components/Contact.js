import React from 'react'
import './Contact.css'
import PropTypes from 'prop-types'


const Fiche = props => (
  <div className="Contact">
    <img className="avatar" src={props.avatar}></img>
    <div className='status'>
        <div>
            <h4 className='name'> {props.name} </h4>
            <div className={props.online === 'online' ? 'status-online' : 'status-offline'}></div>  
            <p className='status-text'> {props.online === 'online' ? 'online' : 'offline'} </p>
      </div>
    </div>
  </div>);

  Fiche.propTypes = {
      name : PropTypes.string,
      online : PropTypes.string,
      avatar : PropTypes.string,
  }

  export default Fiche

