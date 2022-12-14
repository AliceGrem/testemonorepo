import { Flex, Icon, React, useState } from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

import { exportAsZipFromFile } from '../../utils';
import ExportButton from '../ExportButton/ExportButton';
import { container, description, title } from './DigitalKit.module.scss';

const KIT_ITEMS = [
  '/CAPA-FACEBOOK.png',
  '/CAPA-YOUTUBE.png',
  '/estamos-no-feirao.png',
  '/ofertas-feirao.png',
  '/personalizavel-chama-na-dm.png',
  '/personalizavel-chama-na-dm-story.png',
  '/personalizavel-marca.png',
  '/personalizavel-marca-story.png',
  '/personalizavel-modelo.png',
  '/personalizavel-modelo-story.png',
  '/personalizavel-primeiro-lugar.png',
  '/personalizavel-primeiro-lugar-story.png',
  '/whats-falta-pouco.png',
  '/whats-falta-pouco-stories.png',
  '/whats-falta-pouco-2.png',
  '/whats-falta-pouco-2-stories.png',
];

const DigitalKit = () => {
  const breakpoints = useBreakpoint();
  const [loading, setLoading] = useState();

  const exportButton = (
    <ExportButton
      title="Clique para baixar"
      isMobile={breakpoints && breakpoints.md}
      prependIcon={<Icon name="download" size="sm" stroke="#fff" />}
      onClick={() => {
        setLoading(true);
        exportAsZipFromFile(KIT_ITEMS, 'kit_digital', () => setLoading());
      }}
    />
  );
  return (
    <Flex
      id="kit-digital"
      className={container}
      alignItems="center"
      justifyContent="center"
      width={1}
      sx={{ cursor: loading && 'progress' }}
    >
      <Flex width={1} flexWrap="wrap" justifyContent="center" sx={{ gap: '32px' }}>
        <Flex maxWidth={496} height="min-content" flexWrap="wrap" sx={{ gap: '24px' }}>
          <div className={title}>Kit Digital</div>
          <div className={description}>
            Preparamos um super Kit Digital para você marcar presença no Feirão iCarros e aumentar a
            visibilidade da sua revenda. Mostre as ofertas do seu estoque, quais são seus benefícios
            e faça parte dessa onda azul 👊
          </div>
          {!breakpoints.md && exportButton}
        </Flex>
        <Flex justifyContent="center">
          {!breakpoints.md && (
            <StaticImage
              src="../../images/kit_digital.png"
              quality={95}
              formats={['auto', 'webp', 'avif']}
              alt="Kit Digital"
            />
          )}
          {breakpoints.md && (
            <StaticImage
              objectFit="scale-down"
              src="../../images/kit_digital_mobile.png"
              quality={95}
              formats={['auto', 'webp', 'avif']}
              alt="Kit Digital"
            />
          )}
        </Flex>
        {breakpoints.md && <Flex width={1}>{exportButton}</Flex>}
      </Flex>
    </Flex>
  );
};

export default DigitalKit;
