import { border, checkbox, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const getCheckSize = size => checkbox.sizes[size];
const { enabled, checked, error, partial, disabled, checkedDisabled, partialDisabled } =
  checkbox.states;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;

export const StyledCheckbox = styled.div`
  ${({ size }) => getCheckSize(size)};
  ${({ isEnabled }) => isEnabled && enabled};
  ${({ isChecked }) => isChecked && checked};
  ${({ isError }) => isError && error};
  ${({ isPartial }) => isPartial && partial};
  ${({ isDisabled }) => isDisabled && disabled};
  ${({ isCheckedDisabled }) => isCheckedDisabled && checkedDisabled};
  ${({ isPartialDisabled }) => isPartialDisabled && partialDisabled};

  border-width: ${border.width.borderSm};
  border-radius: ${border.radius.borderMd};
  border-color: ${({ color }) => color};
  border-style: ${border.style.solid};
  margin-right: ${spacings.margin.spacing3xs};
  position: relative;
`;
