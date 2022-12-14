import { colors, spacings, utils } from '@monorepo/theme';
import {
  Box,
  Button,
  Flex,
  Icon,
  ICON_SIZES,
  Label,
  Logo,
  React,
  useEffect,
  useLocation,
  useNavigate,
  useState,
} from '@monorepo/ui-components';
import { GTM } from '@monorepo/utils';

import { MOBILE_ROUTES, SECTIONS } from '../../pages/routes';
import { defaultProps, propTypes } from './constants';
import StyledHeader from './style';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [showLogo, setShowLogo] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setShowLogo(false);
    const currentRoute = MOBILE_ROUTES.find(route => pathname.includes(route.path));
    if (!currentRoute) return;

    const currentChildRoute = currentRoute.children.find(route => pathname === route.path);
    if (currentChildRoute && currentChildRoute.logo) {
      setShowLogo(true);
    }

    try {
      const { title } = SECTIONS[currentRoute.section];
      setTitle(title);
    } catch (error) {
      console.error(error);
    }
  }, [pathname]);

  const backPage = () => {
    GTM.addEvent({
      action: 'clique:voltar',
      category: 'icarros:simulacao-financiamento',
      label: `voltar:[[${pathname}]]`,
      value: `${pathname}`,
    });
    navigate('/');
  };

  const exit = () =>
    GTM.addEvent({
      action: 'clique:sair',
      category: 'icarros:simulacao-financiamento',
      label: `sair:[[${pathname}]]`,
      value: `${pathname}`,
    });

  return (
    <StyledHeader>
      <Flex
        alignItems="center"
        height={utils.height.full}
        width={utils.width.full}
        justifyContent="space-between"
        px={spacings.padding.spacingXs}
      >
        <Flex alignItems="center" sx={{ gap: spacings.margin.spacingXs }}>
          <Box style={{ cursor: 'pointer' }}>
            <Icon
              name="chevron_esq"
              stroke={colors.neutral.colorWhite}
              title="Voltar"
              onClick={() => backPage()}
            />
          </Box>
          <Label enabled color={colors.neutral.colorWhite}>
            {title}
          </Label>
        </Flex>
        <Flex alignItems="center" sx={{ gap: spacings.margin.spacingXs }}>
          {showLogo && (
            <Logo
              name="itau-branco"
              height={spacings.layout.spacingSm}
              width={spacings.layout.spacingSm}
            />
          )}
          <Button type="default" onClick={() => exit()}>
            <Icon name="sair" size={ICON_SIZES.sm} stroke={colors.neutral.colorWhite} />
          </Button>
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
