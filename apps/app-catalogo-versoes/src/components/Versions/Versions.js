import { colors, fonts } from '@monorepo/theme';
import {
  Button,
  Checkbox,
  Icon,
  Input,
  PropTypes,
  React,
  Subtitle,
  Text,
  TextField,
} from '@monorepo/ui-components';
import { handleInputChange } from '@monorepo/utils';

import { StyledComponents } from '../style';
import { SUBTITLE, TEXT_BUTTON, VERSIONS_CHECKBOX, VERSIONS_INPUT } from './constants';

const Versions = ({ state }) => {

  const defaultInput = (VERSIONS_INPUT, state) => {
    return VERSIONS_INPUT?.map(({ name, key }) => {
      return <TextField
        key={name}
        textLabel={name}
        size="small"
        renderInput={() => (
          <Input
            key={key}
            name={name}
            size="small"
            customChange={handleInputChange()}
            onChange={() => { state[key] }}
            value={state[key] ?? ''}
          />
        )}
      />
    })
  }

  const defaultCheckbox = (VERSIONS_CHECKBOX, state) => {
    return VERSIONS_CHECKBOX?.map(({ name, key }) => {
      return <Checkbox
        type="checkbox"
        key={key}
        text={name}
        name={name}
        checked={state[key]}
      />
    })
  }

  return (
    <StyledComponents>
      <Subtitle color={colors.neutral.colorDark} textAlign={fonts.align.left}> {SUBTITLE} </Subtitle>
      {defaultInput(VERSIONS_INPUT, state)}
      {defaultCheckbox(VERSIONS_CHECKBOX, state)}
      <Button type="secondary" size="small">
        <Icon name="download" size="sm" stroke={colors.Icon.primaryMedium} />
        <Text>{TEXT_BUTTON}</Text>
      </Button>
    </StyledComponents>
  )
}

Versions.propTypes = {
  state: PropTypes.any,
}

export default Versions;
