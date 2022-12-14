import { border, colors, fonts, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledPill = styled.div`
  background-color: ${({ active }) => (active ? colors.neutral.colorWhite : colors.transparent)};
  width: auto;
  height: ${spacings.layout.spacingXs};
  padding: ${spacings.padding.spacing4xs} ${spacings.padding.spacing2xs};
  margin: 0 ${spacings.padding.spacing4xs} 0 0;
  border-radius: calc(${border.radius.borderXl} * 8);
  font-size: ${fonts.sizes.font2xs};
  font-weight: ${fonts.weight.fontSemiBold};
  @media screen and (max-width: 350px) {
    font-size: ${fonts.sizes.font3xs};
    padding: calc(${spacings.padding.spacing2xs} / 4) ${spacings.padding.spacing2xs};
  }
`;

export default StyledPill;
