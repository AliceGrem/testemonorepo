import { colors, fonts, spacings, utils } from '@monorepo/theme';
import {
  Box,
  Flex,
  Icon,
  Label,
  React,
  TextField,
  useEffect,
  useState,
} from '@monorepo/ui-components';
import {
  api,
  defineErrors,
  dropdownDefaultValue,
  isValidZipcode as isValidZipcodeFunction,
  MASKS,
  removeMaskZipcode,
} from '@monorepo/utils';
import * as R from 'ramda';

import FormikInput from '../../pages/Cross/AdditionalData/components/FormikInput/FormikInput';
import { isFieldDisabled } from '../../pages/Cross/CarChoice/utils';
import { FIELD_SIZE, HELPER_TEXT_SIZE } from '../../pages/Desktop/PersonalData/constants';
import { DropdownWrapper } from '../index';
import { defaultPropTypes, propTypes } from './constants';
import {
  formatCityOptions,
  formatStateOptions,
  getAddressByZipcode,
  setAddressFieldsValues,
} from './utils';

const Address = ({ label, cepLabel, formik }) => {
  const [addressData, setAddressData] = useState({});
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const { data } = await api.getStates();
      const formattedData = formatStateOptions(data);
      setStates(formattedData);
    };

    getStates().catch(({ message }) => console.error(message));
  }, []);

  useEffect(() => {
    if (states.length <= 0) return;
    setAddressFieldsValues(addressData, states, formik);
  }, [addressData]);

  useEffect(() => {
    const zipcode = formik.values?.zipcode;
    const isValidZipcode = isValidZipcodeFunction(zipcode);

    if (!isValidZipcode) return;
    const formattedZipcode = removeMaskZipcode(zipcode);

    const getAddress = async () => {
      const addressData = await getAddressByZipcode(formattedZipcode, api);
      if (R.isEmpty(addressData) || R.isNil(addressData)) throw new Error();

      setAddressData(addressData);
    };

    getAddress()
      .catch(({ message }) => console.error(message))
      .finally(() => setLoading(false));
  }, [formik.values.zipcode]);

  useEffect(() => {
    const { value: stateUf } = formik.values.state;

    if (!stateUf) return;

    if (addressData?.uf !== stateUf) {
      formik.setFieldValue('city', dropdownDefaultValue);
    }

    const getCities = async stateUf => {
      const { data } = await api.getCitiesByState(stateUf);
      const formattedData = formatCityOptions(data);
      setCities(formattedData);
    };

    getCities(stateUf).catch(({ message }) => console.error(message));
  }, [formik.values.state?.value]);

  return (
    <Flex
      width={utils.width.full}
      flexDirection="column"
      sx={{
        gap: spacings.layout.spacingSm,
      }}
    >
      <Label size={fonts.sizes.fontSm} color={colors.Subtitle.default}>
        {label}
      </Label>
      <Flex alignItems="flex-end">
        <TextField
          textLabel={cepLabel}
          renderInput={() => FormikInput({ name: 'zipcode', mask: MASKS['zipcode'], formik })}
          {...defineErrors('zipcode', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        {loading && (
          <Box ml={spacings.margin.spacingSm}>
            <Icon name="loading" size="sm" spin speed={1.3} />
          </Box>
        )}
      </Flex>
      <TextField
        textLabel="Rua/Avenida/Travessia"
        renderInput={() => FormikInput({ name: 'street', formik })}
        {...defineErrors('street', formik)}
        size={FIELD_SIZE}
        helperTextSize={HELPER_TEXT_SIZE}
      />
      <Flex>
        <TextField
          textLabel="Número"
          renderInput={() => FormikInput({ name: 'number', formik })}
          {...defineErrors('number', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
      </Flex>
      <TextField
        textLabel="Complemento (opcional)"
        renderInput={() => FormikInput({ name: 'complement', formik })}
        {...defineErrors('complement', formik)}
        size={FIELD_SIZE}
        helperTextSize={HELPER_TEXT_SIZE}
      />
      <TextField
        textLabel="Bairro"
        renderInput={() => FormikInput({ name: 'district', formik })}
        {...defineErrors('district', formik)}
        size={FIELD_SIZE}
        helperTextSize={HELPER_TEXT_SIZE}
      />
      <DropdownWrapper
        name="state"
        label="Estado"
        dataCy="state"
        options={states}
        formik={formik}
        searchable
      />
      <DropdownWrapper
        name="city"
        label="Cidade"
        dataCy="city"
        options={cities}
        formik={formik}
        searchable
        disabled={isFieldDisabled(formik, 'state')}
      />
    </Flex>
  );
};

Address.defaultPropTypes = defaultPropTypes;
Address.propTypes = propTypes;

export default Address;
