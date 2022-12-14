import { Flex, React, useEffect, useRef, useState } from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

import { ExportButton } from '../../components';
import { exportAsImage, exportAsZip } from '../../utils';
import {
  background,
  content,
  description,
  instructions,
  subtitle,
  title,
} from './CustomBanner.module.scss';

const hoverStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
};

const textStyles = {
  color: '#f4f4f4',
  fontSize: 30,
  textAlign: 'center',
  position: 'absolute',
  overflow: 'hidden',
  zIndex: 7,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  maxHeight: 65,
  lineHeight: 1,
  width: '85%',
  wordBreak: 'word-break',
  fontWeight: 700,
};

const nameStyles = {
  top: 55,
  ...textStyles,
};
const smallNameStyles = {
  ...textStyles,
  top: 20,
  fontSize: 20,
};

const phoneStyles = {
  ...textStyles,
  bottom: 102,
  width: 273,
  height: 63,
  fontSize: 24,
};

const smallPhoneStyles = {
  ...textStyles,
  bottom: 48,
  width: 190,
  height: 48,
  lineHeight: 48,
  fontSize: 18,
};

const PHONE = 'Telefone';
const NAME = 'Nome da revenda';

const CustomBanner = () => {
  const exportRef = useRef();
  const exportSmallRef = useRef();
  const breakpoints = useBreakpoint();
  const [isNameHover, setNameHover] = useState();
  const [isSmallNameHover, setSmallNameHover] = useState();
  const [isPhoneHover, setPhoneHover] = useState();
  const [isSmallPhoneHover, setSmallPhoneHover] = useState();
  const [phone, setPhone] = useState(PHONE);
  const [name, setName] = useState(NAME);
  const [smallPhone, setSmallPhone] = useState(PHONE);
  const [smallName, setSmallName] = useState(NAME);
  const textareaName = useRef();
  const textareaPhone = useRef();
  const textareaSmallName = useRef();
  const textareaSmallPhone = useRef();

  useEffect(() => {
    if (textareaName.current) textareaName.current.textContent = name;
    if (textareaPhone.current) textareaPhone.current.textContent = phone;
    setSmallName(name);
    setSmallPhone(phone);
  }, [name, phone]);

  useEffect(() => {
    if (textareaSmallName.current) textareaSmallName.current.textContent = smallName;
    if (textareaSmallPhone.current) textareaSmallPhone.current.textContent = smallPhone;
  }, [smallName, smallPhone]);

  return (
    <Flex justifyContent="center" width={1} maxWidth={1235}>
      <div className={background}></div>
      <div className={content}>
        <Flex className={instructions} flexDirection="column">
          <Flex className={title} flexDirection="column">
            <span>Banner</span>
            <span>personalizado</span>
          </Flex>
          <div className={subtitle}>
            Garanta um banner com informações exclusivas para a sua revenda. Depois, é só
            compartilhar com os clientes e alavancar as vendas.
          </div>
          <div className={description}>
            A seguir, preencha os campos “Nome da revenda” e “Telefone” e faça o download do banner
            personalizado com os dados da revenda. E aí, preparado para divulgar para todos os
            clientes? ;)
          </div>
          {!breakpoints.l && (
            <ExportButton
              onClick={() =>
                exportSmallRef && exportSmallRef.current
                  ? exportAsZip(
                    [
                      exportRef.current,
                      ...(exportSmallRef && exportSmallRef.current
                        ? [exportSmallRef.current]
                        : []),
                    ],
                    'banner_feirao_icarros'
                  )
                  : exportAsImage(exportRef.current, 'banner_feirao_icarros')
              }
            />
          )}
        </Flex>

        <Flex
          justifyContent="center"
          mx="auto"
          my={34}
          ref={exportRef}
          height={743}
          width={[340, 418]}
          sx={{
            top: !breakpoints.md && -35,
            position: 'relative',
          }}
        >
          <div
            ref={textareaName}
            collaps="true"
            contentEditable
            suppressContentEditableWarning
            onMouseEnter={() => setNameHover(true)}
            onMouseLeave={() => setNameHover()}
            style={isNameHover ? { ...nameStyles, ...hoverStyles } : nameStyles}
            onInput={e => setName(e.currentTarget.textContent)}
            onFocus={() => name === NAME && setName('')}
          />

          <div
            ref={textareaPhone}
            contentEditable
            suppressContentEditableWarning
            onMouseEnter={() => setPhoneHover(true)}
            onMouseLeave={() => setPhoneHover()}
            style={isPhoneHover ? { ...phoneStyles, ...hoverStyles } : phoneStyles}
            onInput={e => setPhone(e.currentTarget.textContent)}
            onFocus={() => phone === PHONE && setPhone('')}
          />

          <StaticImage
            src="../../images/custom_banner.png"
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt="Banner feirão"
          />
        </Flex>

        {!breakpoints.l && (
          <>
            <Flex
              ref={exportSmallRef}
              justifyContent="center"
              height={420}
              width={410}
              sx={{
                position: 'relative',
              }}
            >
              <div
                ref={textareaSmallName}
                contentEditable
                suppressContentEditableWarning
                onMouseEnter={() => setSmallNameHover(true)}
                onMouseLeave={() => setSmallNameHover()}
                style={isSmallNameHover ? { ...smallNameStyles, ...hoverStyles } : smallNameStyles}
                onInput={e => setSmallName(e.currentTarget.textContent)}
                onFocus={() => smallName === NAME && setSmallName('')}
              />

              <div
                ref={textareaSmallPhone}
                contentEditable
                suppressContentEditableWarning
                onMouseEnter={() => setSmallPhoneHover(true)}
                onMouseLeave={() => setSmallPhoneHover()}
                style={
                  isSmallPhoneHover ? { ...smallPhoneStyles, ...hoverStyles } : smallPhoneStyles
                }
                onInput={e => setSmallPhone(e.currentTarget.textContent)}
                onFocus={() => smallPhone === PHONE && setSmallPhone('')}
              />

              <StaticImage
                src="../../images/custom_banner_small.png"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                alt="Banner feirão"
              />
            </Flex>
          </>
        )}
        {breakpoints.l && (
          <Flex justifyContent="center" width={1}>
            <ExportButton
              isMobile
              onClick={() => exportAsImage(exportRef.current, 'banner_feirao_icarros')}
            />
          </Flex>
        )}
      </div>
    </Flex>
  );
};

export default CustomBanner;
