import { colors, fonts, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledSubtitle = styled.div`
  color: ${({ color }) => color || colors.Subtitle.default};
  font-weight: ${fonts.weight.fontNormal};
  line-height: ${fonts.sizes.fontLg};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${fonts.sizes.fontSm};
  font-family: ${fonts.family.fontSans};
  margin-bottom: ${({ textSubTitle }) => textSubTitle && spacings.margin.spacing3xs};
`;

export default StyledSubtitle;
