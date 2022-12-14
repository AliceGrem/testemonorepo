import { colors, fonts } from '@monorepo/theme';
import styled from 'styled-components';

const StyledLegend = styled.div`
  color: ${({ color }) => color || colors.Legend.default};
  font-weight: ${fonts.weight.fontSemiBold};
  line-height: ${fonts.sizes.fontSm};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${fonts.sizes.font2xs};
  font-family: ${fonts.family.fontSans};
`;

export default StyledLegend;
