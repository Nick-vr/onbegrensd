import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const ShopItem = styled.button`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  color: #232323;
  outline: none;
  border: 2px solid #232323;
  background-color: #fff;
  white-space: nowrap;
  appearance: none;
  box-shadow: inset 0 -4px 0 0 #232323;
  border-radius: 7px;
  line-height: 18px;
  padding: 25px 25px 18px;
  min-width: 225px;
  cursor: pointer;
  &:hover {
    border: 2px solid #0ad266;
    box-shadow: inset 0 -10px 0 0 #0ad266;
    p {
      color: #0ad266;
    }
  }
  p {
    font-size: 3em;
    font-family: 'Rajdhani', sans-serif;
  }
  img {
    width: 300px;
    height: 300px;
  }
`;

const ShopCard = props => (
  <>
    <ShopItem
      className="snipcart-add-item"
      data-item-id={props.itemId}
      data-item-name={props.itemName}
      data-item-price={props.itemPrice}
      data-item-custom1-name="Size"
      data-item-custom1-options={props.itemSize}
      data-item-custom1-value="M"
      data-item-image={props.itemImage}
      data-item-url={props.itemUrl}
      data-item-description={props.itemDesc}
    >
      <img src={props.itemImage} alt="poop" />
      <p>yeet</p>
      <p>€ {props.itemPrice}</p>
    </ShopItem>
  </>
);

export default ShopCard;
