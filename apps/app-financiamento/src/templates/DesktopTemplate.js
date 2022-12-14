import { colors, spacings, utils } from '@monorepo/theme';
import { Flex, React, useState } from '@monorepo/ui-components';
import * as R from 'ramda';

import { Badge, FlowHeader, NavBar } from '../components';
import { getBackgroundURI } from '../components/ResultCard/utils';
import { useWizard } from '../components/Wizard/components/WizardProvider/WizardProvider';
import { DeskBackground } from './components';
import { defaultProps, propTypes } from './constants';
import { DeskBody, FlowContainer, TitleContainer } from './style';

const DesktopTemplate = ({ children }) => {
  const { templateTitle, templateBadge } = useWizard();
  const [background] = useState(getBackgroundURI(DeskBackground()));

  const hasBadge = !(R.isEmpty(templateBadge) || R.isNil(templateBadge));
  return (
    <Flex
      height={utils.height.full}
      width={utils.width.full}
      flexDirection="column"
      backgroundColor={colors.neutral.colorLightest}
    >
      <NavBar />
      <DeskBody background={background}>
        <Flex
          p={spacings.padding.spacing4xl}
          height={utils.height.full}
          sx={{ gap: spacings.layout.spacingXs }}
        >
          <Flex
            flexDirection="column"
            mr={spacings.margin.spacingMd}
            sx={{ gap: spacings.layout.spacingSm }}
            width={utils.width.half}
          >
            {hasBadge && <Badge logo="itau" text={templateBadge} />}
            <TitleContainer>{templateTitle}</TitleContainer>
          </Flex>
          <FlowContainer>
            <FlowHeader />
            {children}
          </FlowContainer>
        </Flex>
      </DeskBody>
    </Flex>
  );
};
DesktopTemplate.propTypes = propTypes;
DesktopTemplate.defaultProps = defaultProps;

export default DesktopTemplate;
