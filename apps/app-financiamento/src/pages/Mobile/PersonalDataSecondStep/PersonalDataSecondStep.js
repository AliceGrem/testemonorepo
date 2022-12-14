import {
  Input,
  React,
  TextField,
  useApi,
  useEffect,
  useFormik,
  useNavigate,
  useSearchParams,
} from '@monorepo/ui-components';
import {
  configFormikInput,
  defineErrors,
  handleInputChange,
  isDataValid,
  isValidName,
  MASKS,
} from '@monorepo/utils';

import { Footer } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import PageTemplate from '../../../templates/PageTemplate';
import { ROOT_PAGE } from '../../constants';
import {
  BACK_DESK,
  BACK_MOBILE,
  FIELD_SIZE,
  HELPER_TEXT_SIZE,
  NEXT,
  propTypes,
  SUBTITLE,
  TERMS,
  TITLE,
  WELCOME_SUBTITLE,
} from './constants';
import { form, saveStepData, saveStepDataApi, welcomeTitle } from './utils';

const PersonalDataSecondStep = ({ initialValues }) => {
  const [searchParams] = useSearchParams();
  const { api } = useApi();
  const { setStepData, setStepError, data, setLoading, isDesk, setTemplateTitle } = useWizard();
  const navigate = useNavigate();

  const formik = useFormik({
    ...form({ ...initialValues, ...data }),
    onSubmit: async values => {
      setLoading(true);
      try {
        await saveStepDataApi(values, api, setStepData);
        navigate(NEXT);
      } catch (error) {
        console.error('error', error);
      } finally {
        setLoading(false);
      }
    },
    validateOnMount: true,
  });

  const BACK = isDesk ? BACK_DESK : BACK_MOBILE;

  useEffect(() => {
    const WELCOME_TITLE = welcomeTitle(data.fullName);
    setTemplateTitle(
      <>
        {WELCOME_TITLE} {WELCOME_SUBTITLE}
      </>
    );
  }, [data]);

  useEffect(() => {
    const [fullName, cpf] = [searchParams.get('name'), searchParams.get('cpf')];

    if (!isDataValid([fullName, cpf])) return;

    setStepData({ fullName, cpf });
  }, []);

  useEffect(() => {
    if (!isDesk && !isValidName(data.fullName)) {
      navigate(ROOT_PAGE);
    }
  }, []);

  useEffect(() => {
    setStepError(formik.errors);
  }, [formik.errors]);

  const defaultInput = key => (
    <Input
      data-cy={key}
      size={FIELD_SIZE}
      {...configFormikInput(key, formik, { customChange: handleInputChange(formik) })}
    />
  );

  const maskedInput = (key, mask, placeholder = '') => (
    <Input
      data-cy={key}
      size={FIELD_SIZE}
      {...configFormikInput(key, formik, {
        customChange: handleInputChange(formik),
      })}
      mask={MASKS[mask]}
      placeholder={placeholder}
    />
  );

  const emailInput = () => defaultInput('email');
  const birthDateInput = () => maskedInput('birthDate', 'date');
  const phoneInput = () => maskedInput('phone', 'cellphone');

  const TEMPLATE_TITLE = isDesk ? SUBTITLE : TITLE;
  const TEMPLATE_SUBTITLE = !isDesk && SUBTITLE;

  return (
    <PageTemplate title={TEMPLATE_TITLE} subtitle={TEMPLATE_SUBTITLE}>
      <>
        <TextField
          textLabel="Qual seu e-mail?"
          renderInput={emailInput}
          {...defineErrors('email', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          textLabel="Qual sua data de nascimento?"
          renderInput={birthDateInput}
          {...defineErrors('birthDate', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          textLabel="Qual seu telefone principal?"
          renderInput={phoneInput}
          {...defineErrors('phone', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />

        <Footer
          onNext={formik.handleSubmit}
          terms={TERMS}
          next={NEXT}
          back={BACK}
          onBack={() => saveStepData(formik, setStepData)}
        />
      </>
    </PageTemplate>
  );
};

PersonalDataSecondStep.propTypes = propTypes;

export default PersonalDataSecondStep;
