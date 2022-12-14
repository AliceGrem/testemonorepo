import { spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

export const StyledComponents = styled.div`
  display: flex;
  flex-direction: column;
  width: ${utils.width.full};
  max-width: 300px;
  padding: ${spacings.padding.spacingLg} ${spacings.padding.spacing4xl};
  gap: ${spacings.layout.spacingXs};
`;
