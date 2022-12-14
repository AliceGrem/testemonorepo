import { handleChangeInput } from '@monorepo/utils';
import React, { useEffect,useState } from 'react';

import { Flex,LegalTerms } from '~Atoms';

import { defaultProps,propTypes } from './constants';
import { BoxLegal,StyledTextarea } from './style';
import { getCharsLeftText, getPlaceholderText } from './utils';

const Textarea = ({ maxChar, numRows, name, isDisabled, size, ...props }) => {
  const [value, setValue] = useState('');
  const [charsLeft, setCharsLeft] = useState(maxChar);

  const onChange = (valueOfTextarea, name) => {
    setValue(valueOfTextarea);
    props.onChange(valueOfTextarea, name);
  };

  useEffect(() => setCharsLeft(value ? maxChar - value.length : maxChar), [value]);

  return (
    <Flex flexDirection="column">
      <StyledTextarea
        {...props}
        onChange={(e) => handleChangeInput(e, onChange)}
        value={value}
        name={name}
        rows={numRows}
        maxLength={maxChar}
        placeholder={getPlaceholderText(maxChar)}
        disabled={isDisabled}
        size={size}
      />
      <BoxLegal>
        <LegalTerms>{getCharsLeftText(charsLeft)}</LegalTerms>
      </BoxLegal>
    </Flex>
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
