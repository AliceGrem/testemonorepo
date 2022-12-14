import { PropTypes, React, Text } from '@monorepo/ui-components';

import {
  globalTitle
} from './Title.module.scss';


const Title = ({children}) => {
  return (
    <Text className={globalTitle} my={25}>
      {children}
    </Text>
  )
};

Title.propTypes = {
  children: PropTypes.string,
};


export default Title;
