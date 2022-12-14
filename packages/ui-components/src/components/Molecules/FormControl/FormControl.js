import React, { useEffect,useState } from 'react';

import { Box, Flex,Label } from '~Atoms';

import { HelperText } from './components';
import { LABEL_SIZES,propTypes } from './constants';
import { Content } from './style';
import { setLabelColor } from './utils';

const FormControl = ({
  textLabel,
  textError,
  startEnhancer,
  render,
  hasDivider,
  isDisabled,
  isLocked,
  size,
  formError,
  helperTextSize,
}) => {
  const [isError, setIsError] = useState(formError);
  const [isSuccess, setIsSuccess] = useState();

  useEffect(() => {
    setIsError(formError);
  }, [formError]);

  const hasLabel = textLabel && !isDisabled;

  return (
    <Flex flexDirection="column">
      <Content
        hasDivider={hasDivider}
        isError={isError}
        isSuccess={isSuccess}
        isDisabled={isDisabled}
        isLocked={isLocked}
      >
        {startEnhancer && startEnhancer()}
        <Flex flexDirection="column" width={1}>
          {hasLabel && (
            <Label color={setLabelColor(isError, isSuccess)} size={LABEL_SIZES[size]}>
              {textLabel}
            </Label>
          )}
          <Box>
            {render &&
              render({
                isError,
                setIsError,
                isSuccess,
                setIsSuccess,
                isDisabled,
                isLocked,
                size,
              })}
          </Box>
        </Flex>
      </Content>
      <Box>{isError && textError && <HelperText text={textError} size={helperTextSize} />}</Box>
    </Flex>
  );
};

FormControl.propTypes = propTypes;

export default FormControl;
