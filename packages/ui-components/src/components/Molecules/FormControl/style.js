import { border, colors, formControl,spacings } from '@monorepo/theme';
import styled from 'styled-components';

const { error, success, locked, disabled } = formControl.states;

export const Content = styled.div`
  display: flex;
  align-items: end;
  text-align: initial;
  gap: ${spacings.margin.spacing2xs};
  border-bottom: ${({ hasDivider }) =>
    hasDivider && `${border.width.borderXs} ${border.style.solid}`};
  border-color: ${colors.FormControl.text.enabled};
  ${({ isLocked, hasDivider }) => isLocked && hasDivider && locked};
  ${({ isDisabled, hasDivider }) => isDisabled && hasDivider && disabled};

  &:focus-within {
    border-color: ${colors.primaryLight};
    color: ${colors.primaryMedium};
    ${({ isError, hasDivider }) => isError && hasDivider && error};
    ${({ isSuccess, hasDivider }) => isSuccess && hasDivider && success};
  }
`;
