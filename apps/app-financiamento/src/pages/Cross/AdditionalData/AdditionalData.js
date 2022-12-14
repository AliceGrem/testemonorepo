import {
  React,
  TextField,
  useEffect,
  useFormik,
  useNavigate,
  useState,
} from '@monorepo/ui-components';
import { defineErrors, MASKS } from '@monorepo/utils';

import { Address, Footer, Info } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import PageTemplate from '../../../templates/PageTemplate';
import { FIELD_SIZE, HELPER_TEXT_SIZE } from '../../Desktop/PersonalData/constants';
import { FINANCING_BADGE_TEXT } from '../Result/constants';
import { FormikInput, Title } from './components';
import { BACK, defaultProps, INFO_TEXT, NEXT, propTypes, SUBTITLE, TERMS } from './constants';
import { form, getChosenCar } from './utils';

const AdditionalData = ({ initialValues }) => {
  const { data, setStepError, isDesk, setTemplateTitle, setTemplateBadge } = useWizard();
  const [pageTitle, setPageTitle] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    ...form({ ...initialValues, ...data }),
    onSubmit: () => {},
    validateOnMount: true,
  });

  useEffect(() => {
    setStepError(formik.errors);
  }, [formik.errors]);

  useEffect(() => {
    const chosenCar = getChosenCar(data);
    const title = Title({ chosenCar });
    setPageTitle(title);

    if (isDesk) {
      setTemplateBadge(FINANCING_BADGE_TEXT);
      setTemplateTitle(title);
    }
  }, []);

  const TITLE = isDesk ? SUBTITLE : pageTitle;
  return (
    <PageTemplate title={TITLE}>
      <>
        <TextField
          textLabel="Nome completo"
          renderInput={() => FormikInput({ name: 'fullName', formik })}
          {...defineErrors('fullName', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          textLabel="Data de nascimento"
          renderInput={() =>
            FormikInput({ name: 'birthDate', mask: MASKS['date'], dataCy: 'birth-date', formik })
          }
          {...defineErrors('birthDate', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          textLabel="Nome completo da mãe"
          renderInput={() =>
            FormikInput({ name: 'mothersFullName', dataCy: 'mothers-full-name', formik })
          }
          {...defineErrors('mothersFullName', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          textLabel="E-mail"
          renderInput={() => FormikInput({ name: 'email', formik })}
          {...defineErrors('email', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <Address label="Endereço residencial" cepLabel="CEP" formik={formik} />
        <Info text={INFO_TEXT} />
        <Footer
          back={BACK}
          next={NEXT}
          onNext={formik.handleSubmit}
          onBack={() => navigate('/escolha-o-carro')}
          terms={TERMS}
        />
      </>
    </PageTemplate>
  );
};

AdditionalData.defaultProps = defaultProps;
AdditionalData.propTypes = propTypes;

export default AdditionalData;
