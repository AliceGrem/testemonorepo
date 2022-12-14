import styled from 'styled-components';

const StyledLink = styled.a`
  cursor: pointer;
  &:link {
    text-decoration: none;
    color: ${({ color }) => color};
  }

  &:hover {
    color: ${({ colorHover, color }) => colorHover || color};
  }

  &:visited {
    text-decoration: none;
    color: ${({ colorVisited, color }) => colorVisited || color};
  }
`;

export default StyledLink;
