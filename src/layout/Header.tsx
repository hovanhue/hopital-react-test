import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav
      className='navbar border-bottom border-bottom-dark'
      style={{ backgroundColor: '#65CEA7', marginBottom: 20, padding: 10 }}
    >
      <div className='container'>
        {currentPath !== '/' && (
          <div className='container-md ' style={{ color: 'white' }}>
            <Link to={''} className='text-white' style={{ textDecoration: 'none' }}>
              Trang chủ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
