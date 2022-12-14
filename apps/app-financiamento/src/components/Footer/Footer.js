import { colors, spacings } from '@monorepo/theme';
import { Flex, LegalTerms, Link, React } from '@monorepo/ui-components';

import { Actions, Divider } from '../../components';
import { defaultProps, propTypes } from './constants';

const Footer = ({ terms, next, back, details, hideActions, onNext, onBack, formik }) => {
  const { text, href } = terms;
  return (
    <Flex flexDirection="column" mt={!details && 'auto'} pt={spacings.padding.spacingXs}>
      {!!text && (
        <LegalTerms textAlign="justify">
          {text}{' '}
          <Link href={href} color={colors.brandcolor.primaryMedium}>
            Termos de uso e Políticas de privacidade.
          </Link>
        </LegalTerms>
      )}
      {!hideActions && (
        <>
          <Divider />
          <Actions onNext={onNext} next={next} back={back} onBack={onBack} formik={formik} />
        </>
      )}
    </Flex>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
