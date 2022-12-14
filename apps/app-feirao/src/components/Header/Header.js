import { Flex, Icon, Logo, React, useState } from '@monorepo/ui-components';
import { Link } from 'gatsby';

import { LINKS } from '../constants';
import { LINK_FEIRAO } from './constants';
import {
  buttonGoToSite,
  buttonToggle,
  header,
  list,
  nav,
  navLink,
  openList,
} from './Header.module.scss';

const Header = () => {
  const [isOpen, setOpen] = useState();

  return (
    <header className={`${header} ${isOpen && openList}`}>
      <nav className={`${nav} ${isOpen && openList}`}>
        <Flex justifyContent="space-between" mb={[3, 3, 3, 0]} alignItems="center" width="100%">
          <Link to="/">
            <Logo width="127px" name="feirao" title="Feirão iCarros" />
          </Link>
          <Link
            to="/"
            className={`${buttonToggle} ${isOpen ? '' : openList}`}
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size="xs" stroke="#ffffff" title="Abrir menu" />
          </Link>
          <Link
            to="/"
            className={`${buttonToggle} ${isOpen && openList}`}
            onClick={() => setOpen()}
          >
            <Icon name="fechar" size="xs" stroke="#ffffff" title="Fechar menu" />
          </Link>
        </Flex>
        <ul className={`${list} ${isOpen && openList}`}>
          {LINKS.map(link => (
            <li key={link.name}>
              <Link className={navLink} to={link.to} onClick={() => setOpen()}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link className={navLink} target="_blank" to={LINK_FEIRAO}>
          <button className={`${buttonGoToSite} ${isOpen && openList}`}>ir para o site</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
