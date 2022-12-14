import { border, colors, fonts, spacings, utils } from '@monorepo/theme';
import { Flex } from '@monorepo/ui-components';
import styled from 'styled-components';

const Bar = styled(Flex)`
  background-color: ${colors.neutral.colorLight};
  border-radius: ${border.radius.borderMd};
  height: ${spacings.layout.spacing3xs};
  width: ${utils.width.full};
`;

const Container = styled(Flex)`
  align-items: center;
  gap: ${spacings.margin.spacingXs};
  width: ${utils.width.full};
`;

const Info = styled(Flex)`
  @media screen and (max-width: 425px) {
    font-size: ${fonts.sizes.font2xs};
  }
  font-size: ${fonts.sizes.fontXs};
  min-width: ${spacings.layout.spacingMd};
`;

const Progress = styled(Flex)`
  background-color: ${colors.brandcolor.primaryMedium};
  border-radius: ${border.radius.borderMd};
  height: ${utils.height.full};
  width: ${({ progress }) => progress};
`;

export { Bar, Container, Info, Progress };
