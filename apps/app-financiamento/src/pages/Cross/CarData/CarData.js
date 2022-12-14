import {
  MoneyInput,
  React,
  useApi,
  useEffect,
  useFormik,
  useNavigate,
} from '@monorepo/ui-components';
import { isValidName } from '@monorepo/utils';

import { DropdownWrapper, Footer } from '../../../components';
import { updateFieldValue } from '../../../components/ResultCard/utils.js';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider.js';
import PageTemplate from '../../../templates/PageTemplate.js';
import { ROOT_PAGE } from '../../constants.js';
import { saveStepData } from '../../Mobile/PersonalDataSecondStep/utils.js';
import { BACK_DESK, BACK_MOBILE, NEXT, OPTIONS, propTypes, SUBTITLE, TITLE } from './constants.js';
import { form, formatAndSetSimulationData, populateDataLayer, saveStepDataApi } from './utils';

const AboutCar = ({ initialValues }) => {
  const { api } = useApi();
  const navigate = useNavigate();
  const {
    data,
    setLoading,
    setSimulationData,
    setStepData,
    setStepError,
    isDesk,
    setTemplateTitle,
  } = useWizard();

  const formik = useFormik({
    ...form({ ...initialValues, ...data }),
    onSubmit: async values => {
      setLoading(true);
      try {
        const response = await saveStepDataApi(values, api, setStepData);
        formatAndSetSimulationData(response, setSimulationData);
        navigate(NEXT);
      } catch (error) {
        console.error('error', error);
      } finally {
        setLoading(false);
      }
    },
    validateOnMount: true,
  });

  useEffect(() => {
    setTemplateTitle(TITLE);
    setStepData({ ...formik.values });
  }, []);

  useEffect(() => {
    if (!isValidName(data.fullName)) {
      navigate(ROOT_PAGE);
    }
  }, []);

  useEffect(() => {
    setStepError(formik.errors);
  }, [formik.errors]);

  const PAGE_TITLE = isDesk ? SUBTITLE : TITLE;
  const PAGE_SUBTITLE = !isDesk && SUBTITLE;
  const BACK = isDesk ? BACK_DESK : BACK_MOBILE;

  return (
    <PageTemplate title={PAGE_TITLE} subtitle={PAGE_SUBTITLE}>
      <>
        <MoneyInput
          onChange={value => updateFieldValue(formik, 'price', value)}
          label="Qual o valor total?"
          name="price"
          formik={formik}
        />

        <DropdownWrapper
          name="year"
          label="Qual o ano do modelo?"
          dataCy="year"
          options={OPTIONS}
          formik={formik}
        />
        <Footer
          formik={formik}
          onNext={populateDataLayer}
          next={NEXT}
          back={BACK}
          onBack={() => saveStepData(formik, setStepData)}
        />
      </>
    </PageTemplate>
  );
};

AboutCar.propTypes = propTypes;

export default AboutCar;
