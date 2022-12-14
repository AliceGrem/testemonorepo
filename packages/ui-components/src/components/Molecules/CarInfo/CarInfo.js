import React from 'react';

import { Flex,Label, Logo, Subtitle } from '~Atoms';

import { CAR_INFO_LABEL,propTypes } from './constants';
import { Container, Slot } from './style';

const CarInfo = ({ logo, licencePlate, description }) => (
  <Container>
    <Slot>
      <Logo name={logo} title={logo} />
    </Slot>
    {licencePlate && (
      <Slot>
        <Flex width={1} justifyContent="center">
          <Label size="font3xs" active>
            {CAR_INFO_LABEL}
          </Label>
        </Flex>
        <Subtitle>{licencePlate}</Subtitle>
      </Slot>
    )}
    <Slot>
      <Subtitle>{description}</Subtitle>
    </Slot>
  </Container>
);

CarInfo.propTypes = propTypes;

export default CarInfo;
