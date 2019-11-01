import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../images/onbegrensd.png"
import bag from "../images/checkoutbag2.png"

const Nav = styled.nav`
  z-index: 110;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  background: #fff;
  border-bottom: 10px solid #000;
  border-top: 10px solid #000;
  ul {
    display: flex;
    align-self: center;
    list-style: none;
    text-decoration: none;
    padding: 0;
    li {
      margin: 0 40px;
      font-size: 1.5em;
      a {
        color: #000;
        outline: none;
        font-weight: 700;
        transition: all 0.5s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
`

const Checkout = styled.div`
  display: flex;
  align-self: center;
  z-index: 9999;
  margin-right: 20px;
  a {
    img {
      width: 40px;
    }
  }
`

const StyledLink = styled(Link)`
  display: flex;
  img {
    height: 50px;
    align-self: center;
    margin-right: 20px;
  }
`

const CheckoutLogoWrap = styled.div`
  display: flex;
`

const navList = [
  {
    name: "VOOR HAAR",
    link: "/dames",
  },
  {
    name: "VOOR HEM",
    link: "/heren",
  },
  {
    name: "VOOR DE KIDS",
    link: "/kids",
  },
]

const navListItems = navList.map((item, index) => (
  <li key={index}>
    <Link
      to={item.link}
      activeStyle={{ backgroundColor: "#000", color: "#FFF" }}
    >
      {item.name}
    </Link>
  </li>
))

const Header = ({ siteTitle }) => (
  <>
    <Nav>
      <ul>{navListItems}</ul>

      <CheckoutLogoWrap>
        <Checkout className="snipcart-summary">
          <a href="/" className="snipcart-checkout">
            <img src={bag} alt="checkout" />
          </a>
        </Checkout>
        <StyledLink to="/">
          <img src={logo} alt="logo" />
        </StyledLink>
      </CheckoutLogoWrap>
    </Nav>
  </>
)

export default Header
