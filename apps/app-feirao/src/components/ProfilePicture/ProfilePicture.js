import { Flex, React, useEffect, useRef, useState } from '@monorepo/ui-components';
import { R } from '@monorepo/utils';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { exportAsImage } from '../../utils';
import { ExportButton, Paginator } from '..';
import {
  box,
  btnImageUpload,
  control,
  description,
  instructions,
  preview,
  subtitle,
  title,
  userImage,
  userImageFrame,
} from './ProfilePicture.module.scss';

const ProfilePicture = () => {
  const [profile, setProfile] = useState(1);
  const [picture, setPicture] = useState();
  const [url, setUrl] = useState();
  const breakpoints = useBreakpoint();
  const exportRef = useRef();

  useEffect(() => {
    if (!picture) return;
    const picUrl = URL.createObjectURL(picture);
    setUrl(picUrl);
  }, [picture]);

  const onPictureChange = e => {
    const file = R.path(['target', 'files'], e);
    setPicture(R.head(file));
  };

  const exportButton = (
    <ExportButton
      isMobile={breakpoints.md}
      onClick={() => {
        const element = exportRef.current;
        const imgs = Array.from(element.getElementsByTagName('img'));
        imgs.map(e => {
          e.style.borderRadius = 0;
          e.style.height = 'auto';
        });
        exportAsImage(element, 'perfil_feirao', { windowWidth: '1600px', windowHeight: '1600px' });
        imgs.map(e => {
          e.style.borderRadius = '50%';
          e.style.height = '100%';
        });
      }}
    ></ExportButton>
  );

  return (
    <div className={box}>
      <Flex className={instructions}>
        <Flex className={title} flexDirection="column">
          <span>Foto para perfil</span>
          <span>nas redes sociais</span>
        </Flex>
        <div className={subtitle}>Mostre para seus clientes que sua loja tá no Feirão iCarros</div>
        <div className={description}>
          Selecione uma foto na sua galeria e faça o download da sua versão preferida.
        </div>
        <label className={btnImageUpload} htmlFor="inputUpload">
          Selecionar arquivo
        </label>
        <input id="inputUpload" hidden type="file" accept="image/*" onChange={onPictureChange} />
      </Flex>
      <div className={preview}>
        <Flex
          justifyContent="center"
          alignItems="center"
          ref={exportRef}
          sx={{
            height: '360px',
            width: '360px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {url && <img className={userImage} src={url} alt="baixar-foto-de-perfil" />}
          {
            <>
              {profile === 1 &&
                (picture ? (
                  <img className={userImageFrame} src={`/custom_profile_1.png`} alt="foto-perfil-feirao" />
                ) : (
                  <img src={`/profile_1.png`} alt="foto-perfil-feirao" />
                ))}
              {profile === 2 &&
                (picture ? (
                  <img className={userImageFrame} src={`/custom_profile_2.png`} alt="foto-perfil-feirao" />
                ) : (
                  <img src={`/profile_2.png`} alt="foto-perfil-feirao" />
                ))}
              {profile === 3 &&
                (picture ? (
                  <img className={userImageFrame} src={`/custom_profile_3.png`} alt="foto-perfil-feirao" />
                ) : (
                  <img src={`/profile_3.png`} alt="foto-perfil-feirao" />
                ))}
              {profile === 4 &&
                (picture ? (
                  <img className={userImageFrame} src={`/custom_profile_4.png`} alt="foto-perfil-feirao" />
                ) : (
                  <img src={`/profile_4.png`} alt="foto-perfil-feirao" />
                ))}
            </>
          }
        </Flex>
        {!breakpoints.md && exportButton}
        <div className={control}>
          <Paginator onChange={e => setProfile(e)} />
        </div>
        {breakpoints.md && <Flex justifyContent="center">{exportButton}</Flex>}
      </div>
    </div>
  );
};

export default ProfilePicture;
