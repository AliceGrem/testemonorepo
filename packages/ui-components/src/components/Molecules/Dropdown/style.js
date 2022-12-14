import { border, colors, dropdown, effects, fonts, spacings } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import { default as Select } from 'react-select/async';
import styled from 'styled-components';

import { setPlaceholder } from './utils';

const getFontSize = fontSize => fonts.sizes[fontSize] || R.head(fonts.sizes);

const { active, enabled, disabled, error, locked, selected } = dropdown.states;

export const StyledDropdown = styled(Select)`
  .dropdown__control {
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;
    box-shadow: none;
    text-align: initial;
    border: none;
    border-radius: 0;
    border-bottom: ${border.width.borderXs} ${border.style.solid} ${colors.neutral.colorDark};
    color: ${colors.neutral.colorDark};
    font-family: ${fonts.family.fontSans};
    font-size: ${({ fontSize }) => getFontSize(fontSize)};
    ${({ isEnabled }) => isEnabled && enabled}
    ${({ isDisabled }) => isDisabled && disabled}
    ${({ isError }) => isError && error}
    ${({ isLocked }) => isLocked && locked}
    ${({ menuIsOpen }) => menuIsOpen && active}
    ${({ isSelected }) => isSelected && selected}
  }

  .dropdown__indicator-separator {
    display: none;
  }

  .dropdown__indicators {
    display: flex;
    align-items: center;
  }

  .dropdown__value-container {
    padding: 0;
  }

  .dropdown__menu {
    border-radius: 0;
    border: ${border.width.borderXs} ${border.style.solid} ${colors.brandcolor.primaryLightest};
    box-shadow: ${effects.boxShadow.dropShadowLg};
  }

  .dropdown__placeholder {
    color: ${({ isDisabled, isLocked, isError }) => setPlaceholder(isDisabled, isLocked, isError)};
  }

  .dropdown__menu-list {
    border-radius: 0;
    padding-bottom: 0;
    padding-top: 0;
    text-align: initial;
    font-family: ${fonts.family.fontSans};
    font-size: ${({ fontSize }) => getFontSize(fontSize)};
    color: ${colors.neutral.colorDark};
  }

  .dropdown__single-value {
    color: ${({ isDisabled, isLocked, isError }) => setPlaceholder(isDisabled, isLocked, isError)};
  }

  .dropdown__option {
    border: none;
    padding: ${spacings.padding.spacingXs} ${spacings.padding.spacing2xs};
    border-bottom: ${border.width.borderXs} ${border.style.solid} ${colors.neutral.colorLight};
  }

  .dropdown__option:last-child {
    border: none;
  }

  .dropdown__option--is-focused {
    background: ${colors.brandcolor.primaryLightest};
  }

  .dropdown__input-container {
    padding: 0;
    margin-left: 0;
  }
`;
