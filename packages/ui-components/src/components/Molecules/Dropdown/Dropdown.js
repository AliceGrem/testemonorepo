import { colors, fonts, spacings } from '@monorepo/theme';
import { debounce, handleChangeDropdown } from '@monorepo/utils';
import * as R from 'ramda';
import React, { useState } from 'react';
import { components } from 'react-select';

import { Flex, Icon, Label } from '~Atoms';

import {
  CHEVRON_DOWN,
  CHEVRON_UP,
  CLASS_NAME_PREFIX,
  defaultProps,
  ICON_SIZES,
  propTypes,
  TEXT_SIZES,
} from './constants';
import { StyledDropdown } from './style';
import { formmattedText, setStrokeIcon } from './utils';

const Dropdown = ({
  iconName,
  name,
  colorIcon,
  placeholder,
  isMultiple,
  isDisabled,
  isLocked,
  isError,
  loading,
  options,
  size,
  isEnabled,
  isSearchable,
  value,
  filter,
  loadingMessage,
  noOptionsMessage,
  helper,
  helperIcon,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const getChevronIconName = menuIsOpen => (menuIsOpen && !isLocked ? CHEVRON_UP : CHEVRON_DOWN);

  const onChange = (valueOfDropdown, name) => {
    props.onChange(valueOfDropdown, name);
    if (valueOfDropdown) setIsSelected(true);
  };

  const Control = ({ children, ...props }) => (
    <components.Control {...props}>
      {iconName && (
        <Icon
          name={iconName}
          size={ICON_SIZES[size]}
          stroke={setStrokeIcon(colorIcon, isLocked, isDisabled, isError)}
        />
      )}
      {children}
    </components.Control>
  );

  const DropdownIndicator = props => {
    const {
      selectProps: { menuIsOpen },
    } = props;
    return (
      <components.DropdownIndicator {...props}>
        {(!loading && (
          <Icon
            name={getChevronIconName(menuIsOpen)}
            size={ICON_SIZES[size]}
            stroke={setStrokeIcon(colorIcon, isLocked, isDisabled, isError)}
          />
        )) || <Icon name="loading" spin size="sm" />}
      </components.DropdownIndicator>
    );
  };

  const LoadingIndicator = () => {
    return <Icon name="loading" spin size="md" />;
  };

  const Menu = props => {
    if (isLocked) return null;
    return <components.Menu {...props} />;
  };

  const defaultFilter = (input, callback) => {
    if (R.isEmpty(input) || R.isNil(input)) return callback(null, { options: [] });
    const filteredOptions = options
      .map(option => {
        const { label } = option;
        const formattedInput = formmattedText(input);
        const formattedLabel = formmattedText(label);
        if (formattedLabel.includes(formattedInput)) return option;
      })
      .filter(elem => elem);
    callback(filteredOptions);
  };

  const debouncedFilter = debounce(filter ?? function () {}, 2500);
  const loadOptions = (input, callback) =>
    filter ? debouncedFilter(input, callback) : defaultFilter(input, callback);

  return (
    <Flex flexDirection="column">
      <StyledDropdown
        {...props}
        cacheOptions
        defaultOptions={options}
        loadOptions={loadOptions}
        isLoading={loading}
        loadingMessage={loadingMessage}
        name={name}
        value={value}
        isMulti={isMultiple}
        placeholder={placeholder}
        classNamePrefix={CLASS_NAME_PREFIX}
        isEnabled={isEnabled}
        isDisabled={isDisabled}
        isLocked={isLocked}
        isSelected={isSelected}
        isError={isError}
        components={{ LoadingIndicator, DropdownIndicator, Control, Menu }}
        onChange={(value, { name }) => handleChangeDropdown(value, name, onChange)}
        size={size}
        isSearchable={filter || isSearchable}
        fontSize={TEXT_SIZES[size]}
        noOptionsMessage={noOptionsMessage}
      />
      {helper && (
        <Flex
          alignItems="center"
          sx={{ gap: spacings.layout.spacing2xs }}
          mt={spacings.margin.spacing2xs}
        >
          <Icon name={helperIcon} size="md" />
          <Label fontSize={fonts.sizes.fontSm} color={colors.neutral.colorDark}>
            {helper}
          </Label>
        </Flex>
      )}
    </Flex>
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
