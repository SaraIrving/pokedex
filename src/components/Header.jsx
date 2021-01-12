import React from 'react';
import Button from './Button';

export default function Header() {

  return(
    <div className="header">
      <img src={'https://www.logolynx.com/images/logolynx/s_84/84058ccd07dbf5a0389be9d79affd359.png'}></img>
      <Button className="headerButton" onClick={event => window.location.href='/'} buttonLabel="Home"></Button>
    </div>
  );
}