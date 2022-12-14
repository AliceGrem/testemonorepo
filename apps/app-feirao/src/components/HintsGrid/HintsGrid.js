import { React, useState, Flex, Icon, Link } from '@monorepo/ui-components';
import { Paginator } from '..';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {
  content,
  title,
  grid,
  card,
  selected,
  cardTitle,
  cardDescription,
} from './HintsGrid.module.scss';

const HintLink = ({ href }) => (
  <Link color="#F65E0A" download href={href}>
    <Flex mt={10} alignItems="center" sx={{ gap: '4px', fontWeight: 600, fontSize: '12.8px' }}>
      <span>Baixar dica</span>
      <Icon stroke="#F65E0A" name="seta_dir" size="sm" />
    </Flex>
  </Link>
);

const HintsGrid = () => {
  const [index, setIndex] = useState(1);
  const breakpoints = useBreakpoint();
  return (
    <Flex p={3}>
      <div className={content}>
        <Flex
          flexDirection="column"
          sx={{ gap: '45px', placeContent: 'center' }}
          mb={34}
          maxWidth={490}
        >
          <div className={title}>
            Dicas
            <span> para você alavancar as suas vendas</span>
          </div>
          {!breakpoints.md && (
            <Flex width={1}>
              <Paginator onChange={e => setIndex(e)} />
            </Flex>
          )}
        </Flex>
        <div className={grid}>
          <Flex justifyContent="center" sx={{ gap: '45px' }}>
            <div className={`${card} ${index === 1 && selected}`}>
              <div className={cardTitle}>Aproveite o seu kit digital</div>
              <div className={cardDescription}>
                Preparamos peças personalizadas para você divulgar nas redes sociais da sua revenda
              </div>
              <HintLink href="/dicas_feirao_icarros.png" />
            </div>
            <div className={`${card} ${index === 2 && selected}`}>
              <div className={cardTitle}>Mais visibilidade para o seu estoque</div>
              <div className={cardDescription}>
                Ative os seus Destaques Premium no Portal Revenda e potencialize as suas vendas
              </div>
              <HintLink href="/visibilidade_feirao_icarros.png" />
            </div>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="center" sx={{ gap: '45px' }}>
            <div className={`${card} ${index === 3 && selected}`}>
              <div className={cardTitle}>Personalize as suas publicações</div>
              <div className={cardDescription}>
                Liberamos algumas figurinhas para você usar nas redes
              </div>
              <HintLink href="/participacao_feirao_icarros.png" />
            </div>
            <div className={`${card} ${index === 4 && selected}`}>
              <div className={cardTitle}>Lembre-se de manter o estoque atualizado</div>
              <div className={cardDescription}>
                Atualizar os veículos disponíveis e as informações
              </div>
              <HintLink href="/estoque_feirao_icarros.png" />
            </div>
          </Flex>
          {breakpoints.md && (
            <Flex width={1} mt={36} justifyContent="center">
              <Paginator onChange={e => setIndex(e)} />
            </Flex>
          )}
        </div>
      </div>
    </Flex>
  );
};

export default HintsGrid;
