import { border, colors, spacings } from '@monorepo/theme';
import { Box, Button, Flex, Icon, React, useEffect, useState } from '@monorepo/ui-components';

import { DISABLED_BUTTON, PRIMARY_BUTTON } from '../Actions/constants';
import { useWizard } from '../Wizard/components/WizardProvider/WizardProvider';
import { DownPaymentCard, InstallmentsDropdown } from './components';
import { defaultProps, MAX_CAR_PRICE, propTypes } from './constants';
import { StyledResultCard } from './style';
import { validate } from './utils';

const ResultCard = ({ modalController, formik }) => {
  const { data, loading, simulationData } = useWizard();
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const maximum = data.price || MAX_CAR_PRICE;
    const valid = validate(data, simulationData, maximum);
    setIsValid(valid);
  }, [data]);

  const buttonType = isValid ? PRIMARY_BUTTON : DISABLED_BUTTON;

  return (
    <StyledResultCard>
      <Box
        minHeight={100 / 3}
        width={1}
        sx={{
          borderRadius: border.radius.borderXl,
        }}
      >
        <DownPaymentCard formik={formik} modalController={modalController} />
        <InstallmentsDropdown formik={formik} />
        <Flex
          justifyContent="center"
          alignItems="center"
          px={spacings.padding.spacingSm}
          my={spacings.margin.spacingXs}
        >
          <Button size="medium" type={buttonType} loading={loading} onClick={formik.handleSubmit}>
            <Icon name="carro_frontal" stroke={colors.neutral.colorWhite} size="sm" />
            Escolher o carro
          </Button>
        </Flex>
      </Box>
    </StyledResultCard>
  );
};

ResultCard.propTypes = propTypes;
ResultCard.defaultProps = defaultProps;

export default ResultCard;
