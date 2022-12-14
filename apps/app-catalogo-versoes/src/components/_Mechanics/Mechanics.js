import { colors, fonts } from '@monorepo/theme';
import {
  Input,
  PropTypes,
  React,
  Subtitle,
  TextField
} from '@monorepo/ui-components';
import { handleInputChange } from '@monorepo/utils';

import { StyledComponents } from '../style';
import { MECHANICS_INPUT, SUBTITLE } from './constants';

function Mechanics({ state }) {

  const defaultInput = (MECHANICS_INPUT, state) => {
    return MECHANICS_INPUT?.map(({ name, key }) => {
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

  return (
    <StyledComponents>
      <Subtitle color={colors.neutral.colorDark} textAlign={fonts.align.left}> {SUBTITLE} </Subtitle>
      {defaultInput(MECHANICS_INPUT, state)}
    </StyledComponents>
  );
}

Mechanics.propTypes = {
  state: PropTypes.any,
}

export default Mechanics;
