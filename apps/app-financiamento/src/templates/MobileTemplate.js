import { colors } from '@monorepo/theme';
import { Flex, React } from '@monorepo/ui-components';

import { FlowHeader, Header } from '../components';
import { defaultProps, propTypes } from './constants';

const MobileTemplate = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      height="100vh"
      width={1}
      backgroundColor={colors.neutral.colorWhite}
    >
      <Header title="Simulação de financiamento" />
      <FlowHeader />
      {children}
    </Flex>
  );
};

MobileTemplate.propTypes = propTypes;
MobileTemplate.defaultProps = defaultProps;

export default MobileTemplate;
