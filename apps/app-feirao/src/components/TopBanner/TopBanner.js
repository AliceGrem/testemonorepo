import { Flex,React } from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

const TopBanner = () => {
  const breakpoints = useBreakpoint();
  const topBanner = (
    <StaticImage
      src="../../images/top_banner.png"
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="Banner feirão"
      placeholder="blurred"
      height={780}

    />
  );
  const topBannerMobile = (
    <StaticImage
      src="../../images/top_banner_mobile.png"
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="Banner feirão"
      placeholder="blurred"
      width={420}
    />
  );
  return (
    <Flex width={1} justifyContent="center">
      {breakpoints.sm ? topBannerMobile : topBanner}
    </Flex>
  );
};

export default TopBanner;
