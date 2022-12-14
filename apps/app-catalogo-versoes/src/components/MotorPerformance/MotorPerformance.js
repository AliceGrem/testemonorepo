import { colors, fonts, spacings } from '@monorepo/theme';
import {
  Flex,
  Input,
  PropTypes,
  React,
  Subtitle,
  TextField
} from '@monorepo/ui-components';
import { handleInputChange } from '@monorepo/utils';

import { StyledComponents } from '../style';
import { MOTOR_PERFORMANCE_INPUTS, SUBTITLE } from './constants';

function MotorPerformance({ state }) {

  const defaultInput = (array, state) => {
    return array.map((element, index) => {
      return <Flex
        sx={{ gap: spacings.layout.spacingSm }}
        key={index}>
        {element.map(({ name, key }) => {
          return (
            <TextField
              key={key}
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
          )
        })}
      </Flex>
    })
  }

  return (
    <StyledComponents>
      <Subtitle color={colors.neutral.colorDark} textAlign={fonts.align.left}> {SUBTITLE} </Subtitle>
      {defaultInput(MOTOR_PERFORMANCE_INPUTS, state)}
    </StyledComponents>
  );
}

MotorPerformance.propTypes = {
  state: PropTypes.any,
}

export default MotorPerformance;
