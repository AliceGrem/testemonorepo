import { StaticImage } from 'gatsby-plugin-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { React, Flex } from '@monorepo/ui-components';
import ExportButton from '../ExportButton/ExportButton';
import { downloadImage } from '../../utils';
import { title } from './FacebookCover.module.scss';

const FacebookCover = () => {
  const breakpoints = useBreakpoint();
  return (
    <Flex width="95%" flexWrap="wrap" p={3} sx={{ gap: '42px', position: 'absolute' }}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        width={1}
        sx={{ gap: '42px' }}
      >
        <Flex className={title} flexWrap="wrap" justifyContent={['center', 'flex-end']}>
          <div>Capa exclusiva </div>
          <span>para o seu</span>
          <span>Facebook</span>
        </Flex>
        <ExportButton
          isMobile={breakpoints.md}
          onClick={() => downloadImage('/capa_para_facebook.png', 'capa_para_facebook')}
        />
      </Flex>
      <Flex justifyContent="center" width={1} sx={{ zIndex: 3 }}>
        <StaticImage
          src="../../images/capa_facebook_feirao.png"
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Capa facebook feirão"
        />
      </Flex>
    </Flex>
  );
};

export default FacebookCover;
