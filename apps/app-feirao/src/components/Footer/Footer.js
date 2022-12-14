import { Link } from 'gatsby';
import { React, Flex, Text, Logo } from '@monorepo/ui-components';
import {
  footer,
  container,
  separator,
  anchor,
  text,
  linksContainer,
  link,
} from './Footer.module.scss';
import { LINKS } from '../constants';

const Separator = () => <div className={separator}></div>;

const Footer = () => {
  return (
    <footer className={footer} id="footer">
      <Flex width="90%" px={3} flexDirection="column" className={container}>
        <Flex py={4} justifyContent="space-around" alignItems="center">
          <Logo alignSelf="center" width="120px" name="feirao" title="Feirão iCarros" />
          <div className={linksContainer}>
            {LINKS.map(link => (
              <Link key={link.name} to={link.to} className={anchor}>
                {link.name}
              </Link>
            ))}
          </div>
        </Flex>
        <Separator />
        <Text pt={4} className={text}>
          *A contratação do financiamento está sujeita a análise e aprovação de crédito do Banco
          Itaucard S/A. O custo efetivo total, as taxas de juros e os demais encargos variam de
          acordo com ano do veículo, marca, valores, prazos e demais condições negociadas.
          Informe-se sobre o CET antes de contratar o seu financiamento. Ofertas válidas até
          31/10/2022 apenas nas revendas participantes do Feirão iCarros Itaú. O Itaú e o iCarros
          não se responsabilizam por quaisquer defeitos, vícios ou problemas existentes nos veículos
          ou decorrentes dos negócios realizados no feirão, os quais são de exclusiva
          responsabilidade das revendas participantes. Imagens meramente ilustrativas.
        </Text>
        <Text pt={4} className={text}>
          A iCarros Ltda. e o presente site não atuam como intermediadores na negociação entre os
          usuários, seja com relação à compra, troca ou qualquer outro tipo de operação. O usuário
          reconhece como sendo de sua exclusiva responsabilidade os riscos assumidos nas negociações
          que vier a efetuar com outros usuários do site. A responsabilidade pela
          veracidade/autenticidade das informações veiculadas nos anúncios deste site, bem como
          pelas vendas e/ou entregas de produtos, é exclusiva do anunciante, não podendo o usuário
          responsabilizar o site ou a iCarros Ltda. por danos diretos ou indiretos causados a si ou
          a terceiros.{' '}
          <strong>
            Estoque e preços estão sujeitos a conferência e confirmação pelo anunciante.
          </strong>
        </Text>
        <Text py={4} className={text}>
          Ficou com alguma dúvida? Acesse as nossas{' '}
          <a className={link} target="_blank" href="https://icarros.zendesk.com/hc/pt-br">
            Perguntas Frequentes
          </a>
          .
          <br />
          Para entrar em contato com o nosso atendimento:{' '}
          <a className={link} href="mailto:faleconosco@icarros.com.br">
            faleconosco@icarros.com.br
          </a>
          <br />
          Atendimento de segunda a sexta feira, das 09h às 18h.
        </Text>
        <Separator />
        <Flex py={[4, 3]} alignItems="center" alignSelf={['center', 'end']}>
          <Text mr={2} className={text}>
            uma empresa do
          </Text>
          <Flex alignItems="center" justifyContent="center">
            <Logo name="itau" title="Logo Itaú" />
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
