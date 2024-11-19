import React from "react";
import styled from "styled-components";
import mmilLogo from "../src/assets/mmilLogo.svg";

const Logo = styled.div`
  display: inline-block;
  position: absolute;
  left: 4.5vh;
  top: 2vh;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10vh;
  border: 1px solid rgba(239, 236, 253, 1);
  width: 60%;
  margin: 7vh auto;
  // overflow: hidden;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vh;
  width: 100%;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.625rem;
`;

export const Header = () => {
  const navItems = ["About", "Team", "Projects", "Contacts"];

  return (
    <>
      <Logo>
        <img src={mmilLogo} alt="" />
      </Logo>
      <HeaderContainer>
        <Nav>
          {navItems.map((item, index) => (
            <NavItem href={`#${item.toLowerCase()}`} key={index}>
              {item}
            </NavItem>
          ))}
        </Nav>
      </HeaderContainer>
    </>
  );
};
