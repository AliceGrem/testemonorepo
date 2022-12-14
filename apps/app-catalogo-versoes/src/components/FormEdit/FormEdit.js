import {
  Flex, React, useApi, useEffect, useState
} from '@monorepo/ui-components';

import { Dimensions, Divider, Mechanics, MotorPerformance, Versions } from '../index';
import { StyledFormEdit } from './style';
import { getListVehicles } from './utils';
const FormEdit = () => {
  const { token } = useApi();
  const [vehicleModel, setVehicleModel] = useState({});

  useEffect(() => {
    getListVehicles(63458319960101, token).then(({ data }) => {
      setVehicleModel(data);
    }).catch((e) => {
      console.error(e);
    });
  }, []);

  return (
    <StyledFormEdit>
      <Flex>
        <Versions state={vehicleModel} />
        <MotorPerformance state={vehicleModel} />
      </Flex>
      <Divider />
      <Flex>
        <Dimensions state={vehicleModel} />
        <Mechanics state={vehicleModel} />
      </Flex>
    </StyledFormEdit>
  )
}
export default FormEdit;
