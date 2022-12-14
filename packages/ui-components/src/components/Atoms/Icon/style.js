import { colors } from '@monorepo/theme';
import styled from 'styled-components';

const setStroke = (stroke, isDisabled) => {
  if (isDisabled) return colors.Icon.disabled;
  return stroke;
};

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ fill }) => fill};
    stroke: ${({ stroke, isDisabled }) => setStroke(stroke, isDisabled)};
    stroke-width: ${({ strokeWidth }) => strokeWidth};
    &:hover {
      stroke: ${({ hoverColor }) => hoverColor};
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: ${({ spin, speed }) => spin && `spin ${speed}s linear infinite`};
`;
