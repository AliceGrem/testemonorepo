import { border, colors, effects, fonts, spacings, utils } from '@monorepo/theme';
import { Flex, Title } from '@monorepo/ui-components';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  height: ${utils.height.full};
  width: ${utils.width.full};
  font-size: ${fonts.sizes.fontXl};
  font-weight: ${fonts.weight.fontSemiBold};
  color: ${colors.neutral.colorDark};

  .highlight {
    color: ${colors.brandcolor.secondaryMedium};
  }
`;

export const FlowContainer = styled.div`
  background-color: ${colors.neutral.colorWhite};
  width: ${utils.width.half};
  max-width: ${spacings.Wizard.maxWidth};
  margin: 0 auto;
  border-radius: ${border.radius.borderXl};
  box-shadow: ${effects.boxShadow.dropShadowMd};
  padding: ${spacings.padding.spacingMd} ${spacings.padding.spacingXs};
`;

export const DeskBody = styled.div`
  width: ${utils.width.full};
  height: calc(100vh - ${spacings.layout.spacingXl});
  background: ${({ background }) => background};
  background-size: cover;
`;

export const StyledTitle = styled(Title)`
  .highlight {
    color: ${colors.brandcolor.secondaryMedium};
  }
`;

export const PageContainer = styled(Flex)`
  flex-direction: column;
  height: ${utils.height.full};
  width: ${utils.width.full};
`;
