import {
  Label,
  React,
  useApi,
  useEffect,
  useFormik,
  useNavigate,
  useState,
} from '@monorepo/ui-components';
import { isValidName } from '@monorepo/utils';

import { DropdownWrapper, Footer } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import PageTemplate from '../../../templates/PageTemplate';
import { ROOT_PAGE } from '../../constants';
import { saveStepData } from '../../Mobile/PersonalDataSecondStep/utils';
import {
  BACK,
  defaultProps,
  HELPER_TEXT,
  NEXT,
  NO_VERSION_OPTIONS_MESSAGE,
  propTypes,
  SUBTITLE,
  TERMS,
  TITLE,
  YEAR_OPTIONS,
} from './constants';
import { ImageLabel } from './style';
import {
  form,
  handleMakeChange,
  handleModelChange,
  handleModelYearChange,
  handleStateChange,
  initializePage,
  isFieldDisabled,
  populateDataLayer,
} from './utils';

const CarChoice = ({ initialValues }) => {
  const { data, isDesk, setStepData, setStepError, setTemplateTitle, setTemplateBadge } =
    useWizard();
  const { api } = useApi();
  const navigate = useNavigate();

  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const [version, setVersion] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const redirect = () => {
    const version = formik.values.version?.value;
    const city = formik.values.city?.value;
    if (!version || !city) return;

    const redirectUrl = `${process.env.REACT_APP_ICARROS_SEARCH}-ver_${version}.1-cid_${city}.1`;
    window.open(redirectUrl, '_blank');
  };

  const formik = useFormik({
    ...form({ ...initialValues, ...data }),
    onSubmit: values => {
      try {
        setStepData({ ...values });
        populateDataLayer(values);
        redirect();
      } catch (error) {
        console.error('error', error);
      }
    },
    validateOnMount: true,
  });

  useEffect(() => {
    setStepError(formik.errors);
  }, [formik.errors]);

  useEffect(() => {
    if (!isValidName(data.fullName)) {
      navigate(ROOT_PAGE);
    }
    initializePage(api, { setMake, setState, setTemplateTitle, setTemplateBadge });
  }, []);

  useEffect(() => {
    handleModelYearChange({ formik, setModel });
  }, [formik.values.modelYear.value]);

  useEffect(() => {
    handleMakeChange({ formik, api, setModel, data });
  }, [formik.values.make.value]);

  useEffect(() => {
    handleModelChange({ formik, api, setVersion, data });
  }, [formik.values.model.value]);

  useEffect(() => {
    handleStateChange({ formik, api, setCity, data });
  }, [formik.values.state?.value]);

  const PAGE_TITLE = isDesk ? SUBTITLE : TITLE;

  return (
    <PageTemplate title={PAGE_TITLE}>
      <>
        <DropdownWrapper
          name="modelYear"
          label="Ano do modelo"
          dataCy="model-year"
          options={YEAR_OPTIONS}
          helper={HELPER_TEXT}
          formik={formik}
        />
        <DropdownWrapper
          name="make"
          label="Marca"
          dataCy="make"
          options={make}
          formik={formik}
          searchable
          disabled={isFieldDisabled(formik, 'modelYear')}
          formatLabels={({ image, label }) => (
            <ImageLabel>
              {label}
              <img
                src={image}
                alt={label}
                onError={event => {
                  event.target.style.display = 'none';
                }}
              />
            </ImageLabel>
          )}
        />
        <DropdownWrapper
          name="model"
          label="Modelo"
          dataCy="model"
          options={model}
          formik={formik}
          searchable
          disabled={isFieldDisabled(formik, 'make')}
        />
        <DropdownWrapper
          name="version"
          label="Versão"
          dataCy="version"
          options={version}
          formik={formik}
          searchable
          disabled={isFieldDisabled(formik, 'model')}
          noOptionsMessage={() => NO_VERSION_OPTIONS_MESSAGE}
        />
        <Label>Procurar em</Label>
        <DropdownWrapper
          name="state"
          label="Estado"
          dataCy="state"
          options={state}
          formik={formik}
          searchable
        />
        <DropdownWrapper
          name="city"
          label="Cidade"
          dataCy="city"
          options={city}
          formik={formik}
          searchable
          disabled={isFieldDisabled(formik, 'state')}
        />
        <Footer
          terms={TERMS}
          back={BACK}
          onBack={() => saveStepData(formik, setStepData)}
          next={NEXT}
          onNext={formik.handleSubmit}
        />
      </>
    </PageTemplate>
  );
};

CarChoice.propTypes = propTypes;
CarChoice.defaultProps = defaultProps;

export default CarChoice;
