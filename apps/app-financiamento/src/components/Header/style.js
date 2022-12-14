import { colors, fonts, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${colors.brandcolor.primaryMedium};
  width: ${utils.width.full};
  height: ${spacings.layout.spacingXl};
  font-size: ${fonts.sizes.fontSm};

  @media screen and (max-width: 367px) {
    font-size: ${fonts.sizes.font2xs};
  }

  @media screen and (min-width: 368px) and (max-width: 430px) {
    font-size: ${fonts.sizes.fontXs};
  }
`;

export default StyledHeader;
