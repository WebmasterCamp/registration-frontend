import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-scroll';

import colors from '../../utils/colors';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  z-index: 15;
`;

const NavImg = styled.img`
  display: block;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: darken(.4, ${darken(0.6, colors.cyan)});
  margin: 12px 0;
  opacity: 0.6;
  transition: all .2s;

  &:before {
    content: '';
    height: 10px;
    width: 10px;
    display: flex;
    border: 1px solid ${darken(0.4, colors.cyan)};
    border-radius: 50%;
    margin: 5px;
  }
  
  .text {
    opacity: 0;
    display: flex;
    position: absolute;
    right: 2.2em;
    width: 200px;
    justify-content: flex-end;

  }

  &:hover {
    opacity: 1;
    &:before {
      border: 1px solid ${darken(0.3, colors.cyan)};
    }

    .text {
      opacity: 1;
      color: ${darken(0.3, colors.cyan)};
    }
  }

  &.active {
    opacity: 1;
    
    &:before {
      border: 1px solid ${colors.cyan};
    }

    .text {
      opacity: 1;
      color: ${colors.cyan};
    }
  }
`;

const sections = [
  { href: 'what-is-ywc', title: 'WHAT IS YWC' },
  { href: 'guru', title: 'GURU' },
  { href: 'register', title: 'REGISTER' },
  { href: 'timeline', title: 'TIMELINE' },
  { href: 'map', title: 'MAP' },
  { href: 'gallery', title: 'GALLERY' },
  { href: 'faq', title: 'Q&A' },
  { href: 'sponsor', title: 'SPONSOR' },
  { href: 'pr', title: 'PR' },
  { href: 'contactus', title: 'CONTACT US' },
];

const Navbar = () => (
  <NavbarWrapper>
    <NavImg src="/static/img/landing/materials/navbar-up.png" alt="" />
    <ul>
      {
        sections.map(e => (
          <li key={e.href}>
            <NavLink
              activeClass="active"
              to={e.href}
              spy
              smooth
              offset={50}
              duration={500}
              offset={-50}
            >
              <div className="text">
                {e.title}
              </div>
            </NavLink>
          </li>
        ))
      }
    </ul>
    <NavImg src="/static/img/landing/materials/navbar-up.png" alt="" />
  </NavbarWrapper>
);

export default Navbar;