import { fonts, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledLegalTerms = styled.span`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${fonts.sizes.font3xs};
  font-family: ${fonts.family.fontSans};
  line-height: ${spacings.lineHeight.lineMd};
`;

export default StyledLegalTerms;
