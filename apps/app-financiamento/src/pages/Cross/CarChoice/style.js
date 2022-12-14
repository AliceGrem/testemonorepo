import { spacings } from '@monorepo/theme';
import { Flex } from '@monorepo/ui-components';
import styled from 'styled-components';

export const ImageLabel = styled(Flex)`
  padding-left: ${spacings.padding.spacingXs};
  gap: ${spacings.layout.spacingXs};
  align-items: center;
  justify-content: space-between;
  img {
    width: 15%;
  }
`;
