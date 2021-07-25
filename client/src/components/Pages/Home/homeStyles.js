import styled from 'styled-components';

export const HeroStyles = styled.div`
  .row {
    margin: 20px 0;
  }
  .col-2 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }
`;

export const GalleryContainer = styled.div`
  margin: 100px 0;
  height: 100vh;

  h1 {
    margin: 50px 20px;
    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px 300px;
    grid-gap: 10px;
    grid-auto-flow: dense;
  }

  .gallery-item {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .gallery-item .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .gallery-item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  .gallery-item:hover .image img {
    transform: scale(1.5);
  }

  .gallery-item .text {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 25px;
    pointer-events: none;
    z-index: 4;
    transition: 0.3s ease-in-out;
    -webkit-backdrop-filter: blur(5px) saturate(1.8);
    backdrop-filter: blur(5px) saturate(1.8);
  }

  .gallery-item:hover .text {
    opacity: 1;
    animation: move-down 0.3s linear;
    padding: 0.5rem;
    width: 100%;
  }

  .w-1 {
    grid-column: span 1;
  }
  .w-2 {
    grid-column: span 2;
  }
  .w-3 {
    grid-column: span 3;
  }
  .w-4 {
    grid-column: span 4;
  }
  .w-5 {
    grid-column: span 5;
  }
  .w-6 {
    grid-column: span 6;
  }

  .h-1 {
    grid-row: span 1;
  }
  .h-2 {
    grid-row: span 2;
  }
  .h-3 {
    grid-row: span 3;
  }
  .h-4 {
    grid-row: span 4;
  }
  .h-5 {
    grid-row: span 5;
  }
  .h-6 {
    grid-row: span 6;
  }

  @media screen and (max-width: 600px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
    .w-1,
    .w-2,
    .w-3,
    .w-4,
    .w-5,
    .w-6 {
      grid-column: span 1;
    }
  }

  @keyframes move-down {
    0% {
      top: 10%;
    }
    50% {
      top: 35%;
    }
    100% {
      top: 50%;
    }
  }
`;
export const FeaturedProductsContainer = styled.div`
  h1 {
    margin: 50px 20px;
    text-align: center;
  }
`;
export const LatestProductsContainer = styled.div`
  h1 {
    margin: 50px 20px;
    text-align: center;
  }
`;
export const OfferContainer = styled.div`
  background: #000;
  color: #fff;
  margin-top: 30px;
  padding: 30px 0;

  .offer-img {
    transition: transform 0.5s ease-in-out;
  }

  .offer-img:hover {
    transform: translateY(-5px);
  }

  a {
    display: block;
    margin-top: 20px;
  }

  small {
    padding: 10px;
    font-size: 15px;
    color: #555;
  }
`;

export const PartnersContainer = styled.div`
  .partners {
    margin: 100px auto;
    h1 {
      margin: 50px 20px;
      text-align: center;
    }
    img {
      cursor: pointer;
      width: 100%;
      filter: grayscale(100%);
    }
    img:hover {
      filter: grayscale(0);
    }
  }
`;
