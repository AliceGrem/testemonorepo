import { border, colors, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  height: 8px;
  width: ${utils.width.full};
  background-color: ${colors.neutral.colorWhite};
  margin-bottom: ${spacings.margin.spacing2xs};
  border-radius: ${border.radius.borderXl};
  background-color: ${colors.neutral.colorWhite};
  box-shadow: -1px 3px 12px ${colors.neutral.colorLight}, 2px 3px 12px ${colors.neutral.colorLight};
`;

export const StyledProgressIndicator = styled.div`
  height: ${utils.height.full};
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ error }) =>
    error ? colors.feedbackError.colorMedium : colors.feedbackSuccess.colorLight};
  border-top-left-radius: ${border.radius.borderXl};
  border-bottom-left-radius: ${border.radius.borderXl};
  border-top-right-radius: ${({ progress }) => progress >= 99 && border.radius.borderXl};
  border-bottom-right-radius: ${({ progress }) => progress >= 99 && border.radius.borderXl};
`;
