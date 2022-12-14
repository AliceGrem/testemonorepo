import { border, fonts,spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  padding: ${spacings.padding.spacingXs} ${spacings.padding.spacingSm};
  border-radius: ${border.radius.borderXl};
  max-width: ${spacings.Textarea.width};
  width: ${utils.width.full};
  line-height: ${spacings.lineHeight.lineMd};
  font-family: ${fonts.family.fontSans};
  resize: none;
  border: none;
  box-sizing: border-box;
  :focus {
    outline: 0;
  }
`;

export const BoxLegal = styled.div`
  max-width: ${spacings.Textarea.width};
  margin-top: ${spacings.margin.spacing4xs};
  text-align: end;
`;
