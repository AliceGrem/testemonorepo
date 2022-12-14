import { colors, fonts, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

const StyledSymbol = styled.div`
  color: ${colors.neutral.colorMedium};
  margin: 0 ${spacings.margin.spacingXs} 0 0;

  font-size: ${fonts.sizes.fontMd};
  font-weight: ${fonts.weight.fontSemiBold};
`;

const StyledMoneyInput = styled.div`
  margin-top: ${spacings.margin.spacingXs};
  input {
    border: 0;
    background-color: ${colors.transparent};
    font-size: ${fonts.sizes.fontMd};
    width: ${utils.width.full};

    &:focus {
      outline: none;
    }
  }
`;

export { StyledMoneyInput,StyledSymbol };
