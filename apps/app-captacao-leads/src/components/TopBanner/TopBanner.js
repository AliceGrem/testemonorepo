import { Box, Flex, Icon, React, Text, useEffect, useState } from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

import { FormModal } from '../../components';
import { CHAMADA, SUBTITULO } from './const';
import {
  button,
  fullWidthBox,
  iconStyle,
  subtitle,
  textTopBanner,
  title,
} from './TopBanner.module.scss';

const TopBanner = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [scroll]);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setScroll(false) : setScroll(true);
  };

  const breakpoints = useBreakpoint();
  const topBanner = (
    <StaticImage
      className={fullWidthBox}
      src="./../../images/topbanner.svg"
      quality={100}
      formats={['auto', 'webp', 'avif']}
      alt="Banner Aquisição"
      placeholder="blurred"
    />
  );
  const topBannerMobile = (
    <StaticImage
      src="../../images/bg-mobile.png"
      quality={100}
      formats={['auto', 'src > app >', 'avif']}
      alt="Banner Aquisição"
      placeholder="blurred"
      width={420}
    />
  );
  return (
    <>
      <Flex width={1} justifyContent="center">
        {breakpoints.sm ? topBannerMobile : topBanner}
      </Flex>
      <Box className={textTopBanner}>
        <Text className={title}>{SUBTITULO}</Text>
        <h1 className={subtitle}>{CHAMADA}</h1>
          {breakpoints.sm ? (
            <FormModal />
          ) : (
            <a href="#plansSection" size="medium" className={button}>
              <Icon className={iconStyle} name="editar" size="md" />
              veja os planos
            </a>
          )}
      </Box>
    </>
  );
};

export default TopBanner;
