import { colors } from '@monorepo/theme';
import { handleChangeInput } from '@monorepo/utils';
import React, {useState} from 'react';

import { Legend } from '~Atoms';

import { defaultProps,propTypes } from './constants';
import { Header, StyledInput,Wrapper } from './style';

const LicensePlate = ({
  textCountry,
  name,
  isLicencePlate,
  isError,
  ...props
}) => {

  const [value, setValue] = useState('');

  const onChange = (valueOfInput) => {
    setValue(valueOfInput);
  };

  return (
    <Wrapper isError={isError}>
      <Header isError={isError}>
        <Legend text={textCountry} color={colors.neutral.colorWhite} />
      </Header>
      <StyledInput 
        {...props}
        onChange={(onChange)}
        name={name} 
        isLicencePlate={true}
        maxLength={7} 
        minLength={7} 
        isError={isError}
      />
    </Wrapper>
  );
};

LicensePlate.propTypes = propTypes;
LicensePlate.defaultProps = defaultProps;

export default LicensePlate;
