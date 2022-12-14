import { colors, fonts, spacings, utils } from '@monorepo/theme';
import { Box, Flex, Label, React, Toast } from '@monorepo/ui-components';
import { R } from '@monorepo/utils';

import { useWizard } from '../components/Wizard/components/WizardProvider/WizardProvider';
import { defaultProps, propTypes } from './constants';
import { PageContainer, StyledTitle } from './style';

const PageTemplate = ({ children, title, subtitle }) => {
  const { showMessage, setShowMessage, message } = useWizard();
  const shouldShowMessage = showMessage && !R.isEmpty(message);

  return (
    <Box height={utils.height.full} width={utils.width.full} p={`0 ${spacings.padding.spacingLg}`}>
      <PageContainer>
        {shouldShowMessage && (
          <Toast onClose={() => setShowMessage(false)}>
            <Label color={colors.neutral.colorWhite} textAlign="justify">
              {message}
            </Label>
          </Toast>
        )}
        <StyledTitle textTitle={title} textSubtitle={subtitle} textAlign={fonts.align.left} />
        <Flex
          flexDirection="column"
          height={utils.height.full}
          sx={{ gap: spacings.layout.spacingSm }}
          mt={spacings.margin.spacingLg}
        >
          {children}
        </Flex>
      </PageContainer>
    </Box>
  );
};

PageTemplate.propTypes = propTypes;
PageTemplate.defaultProps = defaultProps;

export default PageTemplate;
