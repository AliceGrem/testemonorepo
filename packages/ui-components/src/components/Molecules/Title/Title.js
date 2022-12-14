import React from 'react';

import { Legend, Subtitle } from '~Atoms';

import { defaultProps, propTypes } from './constants';

const Title = ({ colorTitle, textTitle, colorSubTitle, textSubTitle, ...props }) => (
  <>
    <Subtitle color={colorTitle} {...props}>
      {textTitle}
    </Subtitle>
    {textSubTitle && (
      <Legend color={colorSubTitle} {...props}>
        {textSubTitle}
      </Legend>
    )}
  </>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
