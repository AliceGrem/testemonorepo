import { border, colors, spacings } from '@monorepo/theme';
import { Flex } from '@monorepo/ui-components';
import styled from 'styled-components';

import { DESKTOP_BADGE_HEIGHT, DESKTOP_BADGE_WIDTH } from './constants';

export const Container = styled(Flex)`
  height: ${DESKTOP_BADGE_HEIGHT};
  width: ${DESKTOP_BADGE_WIDTH};
  background-color: ${colors.brandcolor.secondaryMedium};
  padding: ${spacings.padding.spacingXs};
  align-items: center;
  justify-content: center;
  gap: ${spacings.layout.spacing3xs};
  border-radius: ${border.radius.borderMd};
`;
