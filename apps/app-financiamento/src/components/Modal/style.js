import { border, colors, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledModal = styled.div`
  border-radius: ${border.radius.borderMd};
  padding: ${spacings.padding.spacingLg};
  background-color: ${colors.neutral.colorWhite};
  width: ${({ width }) => width};
  min-width: 30%;
  max-width: 70%;
  gap: ${spacings.layout.spacingXs};
  display: flex;
  flex-direction: column;
`;

const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(60, 60, 60, 0.75);
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;

export { StyledModal, StyledModalContainer };
