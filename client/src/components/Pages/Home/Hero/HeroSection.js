import React from 'react';
import {
  RowNormal,
  Column2,
  Image,
  Button,
  ImageContainer,
  ContainerNormal,
} from '../../../../utilityStyles';
import { HeroStyles } from '../homeStyles';
const HeroSection = ({ products }) => {
  return (
    <ContainerNormal>
      {products && (
        <HeroStyles>
          {products.map(
            (product) =>
              product.isHero === true && (
                <RowNormal key={product._id} className='row'>
                  <Column2 className='col-2'>
                    <h1 className='hero-heading'>
                      Give Your Workout <br /> A New Style!
                    </h1>
                    <p>
                      Succcess isint always about greatness.Its about
                      consistency. Consistant <br />
                      effort gains success .Greatness will come
                    </p>
                    <Button dark='dark' to='/products'>
                      Explore
                    </Button>
                  </Column2>
                  <Column2>
                    <ImageContainer>
                      <Image withBg large src={product.image} />
                    </ImageContainer>
                  </Column2>
                </RowNormal>
              )
          )}
        </HeroStyles>
      )}
    </ContainerNormal>
  );
};

export default HeroSection;
