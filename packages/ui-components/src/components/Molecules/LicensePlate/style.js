import { border,colors, effects, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

import { Input } from '~Molecules';


const setColorDashes = (isError) => {
  if(isError) return colors.feedbackError.colorMedium;

  return colors.neutral.colorMedium;
}

const setColorLicencePlate = (isError) => {
  if(isError) return colors.feedbackError.colorMedium;
  
  return colors.brandcolor.primaryMedium;
  
}

export const Wrapper = styled.div`
  background: white;
  width: 264px;
  height: 108px;
  border-radius: ${border.radius.borderMd};
  border:  ${({ isError }) => setColorLicencePlate(isError)} ${border.width.borderSm} ${border.style.solid};
  box-shadow: ${effects.boxShadow.dropShadowLg};
`;

export const Header = styled.div`
  background: ${({ isError }) => setColorLicencePlate(isError)};
  position: relative;
  text-transform: uppercase;
  height: ${spacings.layout.spacingSm};
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    position: absolute;
    content: '';
    background: ${colors.neutral.colorWhite};
    height: 0.125rem;
    width: 0.75rem;
    left: 1.875rem;
    top: 0.5rem;
  }
  &:before {
    position: absolute;
    content: '';
    background: ${colors.neutral.colorWhite};
    height: 0.125rem;
    width: 0.75rem;
    right: 1.875rem;
    top: 0.5rem;
  }
`;

export const StyledInput = styled(Input)`
  width: 10.5ch;
  background: ${({isError}) => 
    `repeating-linear-gradient(
      90deg,
       ${setColorDashes(isError)} 0,
       ${setColorDashes(isError)} 1ch,
      transparent 0,
      transparent 1.5ch
    )
    0 ${utils.width.full}/${utils.width.full} 1px no-repeat;`}
  border: none;
  outline: none;
  padding: 0;
  margin-left: 0.375rem;
  font-size: 5ch;
  font-family: monospace;
  letter-spacing: 0.5ch;
  -moz-letter-spacing: 0.5ch;
  -ms-letter-spacing: 0.5ch;
  text-transform: uppercase;
  overflow: hidden;
`;
