import React from 'react'
import './Contact.css'


const person = {
    name : 'Shane Dixon',
    avatar : "https://randomuser.me/api/portraits/men/60.jpg",
    status : true,
}



const Fiche = () => (
  <div className="Contact">
    <img className="avatar" src={person.avatar}></img>
    <div className='status'>
        <div>
            <h4 className='name'> {person.name} </h4>
            <div className='status-online'></div>  
            <p className='status-text'> {person.status ? 'online' : 'offline'} </p>
      </div>
    </div>
  </div>);

  export default Fiche

