import styled from 'styled-components';

const StyledCloseButtonContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .icon {
    cursor: pointer;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledCloseButtonContainer, StyledIcon };
