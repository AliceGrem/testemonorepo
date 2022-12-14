import { colors } from '@monorepo/theme';
import { Box, Label, React } from '@monorepo/ui-components';

import { defaultProps, fontColor, fontSize , propTypes } from './constants';
import { StyledDropdown } from './style';

const DropdownWrapper = ({
  formik,
  name,
  label,
  dataCy,
  options,
  helper,
  searchable,
  disabled,
  formatLabels,
  noOptionsMessage,
}) => {
  return (
    <Box>
      <Label size={fontSize} color={fontColor}>
        {label}
      </Label>
      <StyledDropdown
        inputId={dataCy}
        value={formik.values[name]}
        options={options}
        size="medium"
        onChange={value => formik.setFieldValue(name, value)}
        helper={helper}
        isSearchable={searchable}
        isDisabled={disabled}
        iconName={searchable ? 'lupa' : ''}
        colorIcon={colors.brandcolor.primaryMedium}
        formatOptionLabel={formatLabels}
        noOptionsMessage={noOptionsMessage}
      ></StyledDropdown>
    </Box>
  );
};

DropdownWrapper.defaultProps = defaultProps;
DropdownWrapper.propTypes = propTypes;

export default DropdownWrapper;
