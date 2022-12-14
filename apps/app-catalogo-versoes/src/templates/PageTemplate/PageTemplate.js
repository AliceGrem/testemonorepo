import { spacings, utils } from '@monorepo/theme';
import { Box, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import { PageContainer, PageWrapper } from './style';

const PageTemplate = ({ children }) => {

  return (
    <Box height={utils.height.full} width={utils.width.full} p={`0 ${spacings.padding.spacingLg}`}>
      <PageContainer>
        <PageWrapper>
          {children}
        </PageWrapper>
      </PageContainer>
    </Box>
  );
};

PageTemplate.propTypes = propTypes;
PageTemplate.defaultProps = defaultProps;

export default PageTemplate;
