import { spacings, utils } from '@monorepo/theme';
import { Flex } from '@monorepo/ui-components';
import styled from 'styled-components';

export const PageContainer = styled(Flex)`
  height: ${utils.height.full};
  width: ${utils.width.full};
`;

export const PageWrapper = styled.div`
  height: ${utils.height.full};
  width: ${utils.width.full};
  padding: ${spacings.padding.spacing4xl};
`;
