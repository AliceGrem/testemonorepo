import { border, colors, fonts, spacings } from '@monorepo/theme';
import { Button } from '@monorepo/ui-components';
import styled from 'styled-components';

export const NavItem = styled.span`
  font-size: ${fonts.sizes.font2xs};
  font-weight: ${fonts.weight.fontSemiBold};
  color: ${colors.neutral.colorWhite};
  cursor: pointer;
  border-right: ${({ divider }) =>
    divider && `${border.width.borderXs} ${border.style.solid} ${colors.neutral.colorWhite};`};
  padding-right: ${({ divider }) => divider && `${spacings.padding.spacing2xs};`};
`;

export const Addon = styled.div`
  font-size: ${fonts.sizes.font2xs};
  font-weight: ${fonts.weight.fontLight};
  color: ${colors.neutral.colorLight};
`;

export const StyledButton = styled(Button)`
  width: auto;
  background-color: ${colors.brandcolor.primaryDark};

  &:hover {
    background-color: ${colors.brandcolor.primaryDarker};
  }
`;
