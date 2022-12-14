import { Box, React, useEffect, useFormik, useNavigate, useState } from '@monorepo/ui-components';
import { GTM, isValidName } from '@monorepo/utils';

import { Details, Footer, Modal, ResultCard } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import PageTemplate from '../../../templates/PageTemplate';
import { ROOT_PAGE } from '../../constants';
import { saveStepData } from '../../Mobile/PersonalDataSecondStep/utils';
import {
  BACK,
  DETAILS,
  FINANCING_BADGE_TEXT,
  NEXT,
  propTypes,
  SUBTITLE,
  TERMS,
  TITLE,
} from './constants';
import { form, populateDataLayerEvents } from './utils';

const Result = () => {
  const navigate = useNavigate();
  const { data, setStepData, setStepError, setTemplateTitle, setTemplateBadge, isDesk } =
    useWizard();
  const [modalControl, controller] = useState({
    show: false,
    type: 'warning',
    body: <></>,
    footerProps: {},
    onClose: () => {},
  });

  const formik = useFormik({
    ...form({
      ...data,
    }),
    onSubmit: values => {
      try {
        setStepData({ ...values });
        populateDataLayerEvents(values, NEXT);
        navigate(NEXT);
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
    setTemplateTitle(SUBTITLE);
    setTemplateBadge(FINANCING_BADGE_TEXT);
  }, []);

  useEffect(() => {
    if (!isValidName(data.fullName)) {
      navigate(ROOT_PAGE);
    }
  }, []);

  const TEMPLATE_SUBTITLE = !isDesk && SUBTITLE;

  return (
    <>
      <Modal
        modalType={modalControl.type}
        show={modalControl.show}
        controller={controller}
        footerProps={modalControl.footerProps}
        onClose={modalControl.onClose}
      >
        {modalControl.body}
      </Modal>
      <PageTemplate title={TITLE} subtitle={TEMPLATE_SUBTITLE}>
        <>
          <ResultCard modalController={controller} formik={formik} />
          <Box mt="auto">
            {DETAILS.map(({ title, icon }, index) => {
              return (
                <Details
                  title={title}
                  icon={icon}
                  last={index === DETAILS.length - 1}
                  key={`footer-details-${index}`}
                  onClick={() =>
                    GTM.addEvent({
                      action: `clique:abrir`,
                      category: `icarros:simulacao-financiamento`,
                      label: `abrir:[[${title}]]`,
                      value: `${title}`,
                    })
                  }
                />
              );
            })}
          </Box>
          <Footer
            terms={TERMS}
            back={BACK}
            details
            onBack={() => {
              saveStepData(formik, setStepData);
              setTemplateBadge('');
            }}
          />
        </>
      </PageTemplate>
    </>
  );
};

Result.propTypes = propTypes;

export default Result;
