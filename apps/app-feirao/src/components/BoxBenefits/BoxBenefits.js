import { React, useState, Badge, Flex } from '@monorepo/ui-components';
import {
  box,
  preTitle,
  mainTitle,
  item,
  itemTitle,
  itemDescription,
  bullet,
  itemsContainer,
  itemActive,
} from './BoxBenefits.module.scss';

const IDS = {
  highlight: 'highlight',
  protection: 'protection',
  leads: 'leads',
  calls: 'calls',
};

const BoxBenefits = () => {
  const [activeItem, setActiveItem] = useState();

  const isActive = item => item === activeItem;
  const getColor = id => (isActive(id) ? '#90ccff' : '#fff');

  return (
    <div className={box}>
      <Flex flexDirection="column">
        <div className={preTitle}>Benefícios do</div>
        <div className={mainTitle}>Feirão iCarros</div>
      </Flex>
      <div className={itemsContainer}>
        <Flex flexWrap="wrap" justifyContent="center" sx={{ gap: '55px' }}>
          <div
            className={`${item} ${isActive(IDS.highlight) && itemActive}`}
            onMouseEnter={() => setActiveItem(IDS.highlight)}
            onMouseLeave={() => setActiveItem()}
          >
            <div className={`${bullet} ${isActive(IDS.highlight) && itemActive}`}>
              <Badge
                name="estrela"
                size="sm"
                fillIcon
                colorIcon={getColor(IDS.highlight)}
                colorBorder={getColor(IDS.highlight)}
              />
            </div>
            <div className={itemTitle}>Destaque premium</div>
            <div className={itemDescription}>
              Preparado para destacar as suas ofertas e sair à frente da concorrência?
            </div>
          </div>
          <div
            className={`${item} ${isActive(IDS.protection) && itemActive}`}
            onMouseEnter={() => setActiveItem(IDS.protection)}
            onMouseLeave={() => setActiveItem()}
          >
            <div className={`${bullet} ${isActive(IDS.protection) && itemActive}`}>
              <Badge
                name="cadeado2"
                size="sm"
                fillIcon
                colorIcon={getColor(IDS.protection)}
                colorBorder={getColor(IDS.protection)}
              />
            </div>
            <div className={itemTitle}>Proteção de Marca</div>
            <div className={itemDescription}>
              Seus anúncios seguros e acelerando as chances de venda
            </div>
          </div>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" sx={{ gap: '55px' }}>
          <div
            className={`${item} ${isActive(IDS.leads) && itemActive}`}
            onMouseEnter={() => setActiveItem(IDS.leads)}
            onMouseLeave={() => setActiveItem()}
          >
            <div className={`${bullet} ${isActive(IDS.leads) && itemActive}`}>
              <Badge
                name="boneco"
                size="sm"
                colorIcon={getColor(IDS.leads)}
                fillIcon
                colorBorder={getColor(IDS.leads)}
              />
            </div>
            <div className={itemTitle}>Qualificador de Leads</div>
            <div className={itemDescription}>
              Conheça o perfil do seu cliente e fique pronto para fazer bons negócios
            </div>
          </div>
          <div
            className={`${item} ${isActive(IDS.calls) && itemActive}`}
            onMouseEnter={() => setActiveItem(IDS.calls)}
            onMouseLeave={() => setActiveItem()}
          >
            <div className={`${bullet} ${isActive(IDS.calls) && itemActive}`}>
              <Badge
                name="chamada"
                size="sm"
                fillIcon
                colorIcon={getColor(IDS.calls)}
                colorBorder={getColor(IDS.calls)}
              />
            </div>
            <div className={itemTitle}>Qualificador de Chamadas</div>
            <div className={itemDescription}>
              Tenha em mãos a pré-análise de crédito do seu cliente. Simples, fácil e rápido ;)
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default BoxBenefits;
