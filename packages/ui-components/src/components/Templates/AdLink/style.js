import { border, colors, fonts, spacings } from '@monorepo/theme';
import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${spacings.AdLink.Content.width};
  height: ${spacings.AdLink.Content.height};
  border: ${border.width.borderSm} ${border.style.solid} ${colors.neutral.colorLight};
  padding: 20px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border-color: ${colors.brandcolor.primaryMedium};

    & > div > svg {
      stroke: ${colors.brandcolor.primaryMedium};
    }

    & > span {
      color: ${colors.neutral.colorDark};
    }
  }
`;

export const StyledTextDivider = styled.div`
  margin-right: ${spacings.margin.spacingXs};
  margin-left: ${spacings.margin.spacingXs};
  font-family: ${fonts.family.fontSans};
  font-size: ${fonts.sizes.fontXs};
`;
