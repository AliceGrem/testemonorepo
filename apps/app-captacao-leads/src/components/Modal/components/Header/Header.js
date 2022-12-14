import { colors } from '@monorepo/theme';
import {
  Flex, Icon, React,
  Subtitle,
} from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';


export const Header = ({onClose}) => {


  return (
    <div>
      <Flex marginBottom={10} justifyContent="space-between">
        <Subtitle> Contato </Subtitle>
          <Icon onClick={onClose} name="fechar" size="sm" stroke={colors.Icon.primaryMedium} />
      </Flex>
      <Flex>
        <div> Preencha seus dados para entrarmos em contato. </div>
      </Flex>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
