import React from 'react';
import './header.scss';

const Header = () => {
   return (
      <header className="header">
         <div className="logo">
            <img src="/images/logo.png" alt="logo"/>
         </div>
         <h1>Test Ltd</h1>
      </header>
   );
};

export default Header;
