import { colors, fonts, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledParagraph = styled.div`
  color: ${({ color }) => color || colors.Paragraph.default};
  font-weight: ${fonts.weight.fontNormal};
  line-height: ${fonts.sizes.fontMd};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${fonts.sizes.fontXs};
  font-family: ${fonts.family.fontSans};
  margin: ${spacings.margin.spacingXs} 0;
`;

export default StyledParagraph;
