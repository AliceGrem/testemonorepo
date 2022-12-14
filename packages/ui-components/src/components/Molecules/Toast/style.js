import { border, spacings } from '@monorepo/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: ${border.radius.borderSm};
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  gap: ${spacings.layout.spacingXs};
  padding: ${spacings.padding.spacingXs} ${spacings.padding.spacingSm};
  margin-bottom: ${spacings.margin.spacingSm};
`;
