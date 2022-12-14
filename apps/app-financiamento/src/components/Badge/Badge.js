import { colors } from '@monorepo/theme';
import { Label, Logo, React } from '@monorepo/ui-components';

import { defaultProps, DESKTOP_BADGE_HEIGHT, propTypes } from './constants';
import { Container } from './style';

const Badge = ({ logo, text }) => {
  return (
    <Container>
      <Logo name={logo} height={DESKTOP_BADGE_HEIGHT} />
      <Label color={colors.neutral.colorWhite} size="font2sm">
        {text}
      </Label>
    </Container>
  );
};

Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;

export default Badge;
