import React from 'react';

import { Box,Flex } from '~Atoms';
import { Checkbox, FormControl } from '~Molecules';

import { defaultProps, propTypes } from './constants';

const CheckboxList = ({ options, ...props }) => {
  const checkboxes = options.map(({ value }) => <Checkbox name={value} text={value} {...props} />);

  return (
    <Flex flexWrap="wrap" p={3}>
      {checkboxes.map((checkbox, index) => (
        <Box width={1 / 2} my={2} key={index}>
          <FormControl render={() => checkbox} />
        </Box>
      ))}
    </Flex>
  );
};

CheckboxList.propTypes = propTypes;
CheckboxList.defaultProps = defaultProps;

export default CheckboxList;
