import { colors } from '@monorepo/theme';
import { Icon, Label, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import { Container } from './style';

const Info = ({ text }) => {
  return (
    <Container>
      <Icon name="atencao" size="xl" stroke={colors.brandcolor.primaryMedium} />
      <Label>{text}</Label>
    </Container>
  );
};

Info.defaultProps = defaultProps;
Info.propTypes = propTypes;

export default Info;
