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

const ShopCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { new: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              name
              path
              price
              desc
              image {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
              customFields {
                name
                required
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ShopItem
          className="snipcart-add-item"
          key={node.id}
          data-item-id={node.id}
          data-item-name={node.frontmatter.name}
          data-item-price={node.frontmatter.price}
          data-item-custom1-name="Size"
          data-item-custom1-options="XS|S|M|L|XL"
          data-item-custom1-value="M"
          data-item-image={node.frontmatter.image.childImageSharp.fixed.src}
          data-item-url={node.frontmatter.path}
          data-item-description={node.frontmatter.desc}
        >
          <img
            src={node.frontmatter.image.childImageSharp.fixed.src}
            alt="poop"
          />
          <p>€ {node.frontmatter.price}</p>
        </ShopItem>
      ))}
    </>
  );
};

export default ShopCard;
