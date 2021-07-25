import React from 'react';
import {
  Column5,
  ContainerSmall,
  Image,
  RowNormal,
} from '../../../../utilityStyles';
import { PartnersContainer } from '../homeStyles';

const Partners = ({ partnersList }) => {
  return (
    <>
      {partnersList && (
        <PartnersContainer>
          <div className='partners'>
            <h1>Our Partners</h1>
            <ContainerSmall>
              <RowNormal>
                {partnersList.partners.map((partner) => (
                  <Column5 className='partners' key={partner._id}>
                    <a href={partner.url}>
                      <Image xlarge src={partner.image} />
                    </a>
                  </Column5>
                ))}
              </RowNormal>
            </ContainerSmall>
          </div>
        </PartnersContainer>
      )}
    </>
  );
};

export default Partners;
