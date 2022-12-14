import { React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import { Bar, Container, Info, Progress } from './style';

const HeaderProgress = ({ children, progress }) => {
  return (
    <Container>
      <Bar>
        <Progress progress={progress} />
      </Bar>
      <Info>{children}</Info>
    </Container>
  );
};

HeaderProgress.propTypes = propTypes;
HeaderProgress.defaultProps = defaultProps;

export default HeaderProgress;
