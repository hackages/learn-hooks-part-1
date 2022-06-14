import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSidebar } from './Styled';
import { withRouter } from 'react-router';

const routes = [
  {
    link: '/exercise-1',
    text: 'useState'
  },
  {
    link: '/exercise-2',
    text: 'useReducer'
  },
  {
    link: '/exercise-3',
    text: 'useRef'
  },
  {
    link: '/exercise-4',
    text: 'useEffect 1'
  },
  {
    link: '/exercise-5',
    text: 'useEffect 2'
  },
  {
    link: '/exercise-6',
    text: 'useEffect 3'
  },
  {
    link: '/exercise-7',
    text: 'useContext'
  },
  {
    link: '/exercise-8',
    text: 'useLayoutEffect'
  },
  {
    link: '/exercise-9',
    text: 'useCallback'
  }
];

const _Sidebar = ({ location: { pathname } }) => {
  return (
    <StyledSidebar className="w3-sidebar w3-light-grey w3-bar-block">
      <h3 className="w3-bar-item">Menu</h3>
      {routes.map(({ link, text }) => {
        const className = `w3-bar-item w3-button${
          pathname === link ? ' active' : null
        }`;
        return (
          <Link key={link} to={link} className={className}>
            {text}
          </Link>
        );
      })}
    </StyledSidebar>
  );
};

export const Sidebar = withRouter(_Sidebar);
