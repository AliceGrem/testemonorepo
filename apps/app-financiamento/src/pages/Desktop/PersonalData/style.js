import { colors } from '@monorepo/theme';
import { Label } from '@monorepo/ui-components';
import styled from 'styled-components';

export const StyledLabel = styled(Label)`
  span {
    color: ${colors.brandcolor.primaryMedium};
  }
`;
