import { Box, Flex, Link, React, Text } from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { FOOTER_LINKS  } from './const';
import {
  listStyle
} from './Links.module.scss';

const Links = () => {
  const breakpoints = useBreakpoint();

  return (
    <Box>
      {FOOTER_LINKS.map((link, i )=> (
        <>
        {breakpoints.sm === false &&
          <Flex alignItems="center" paddingBottom={35}>
            <Text color="#FFF" marginRight={10} fontWeight={600} fontSize={16}>{link.title}:</Text>
            <ul key={i} className={listStyle}>
              {link.links.map((subLink ) => (
                <Link color="#FFF" key={subLink.name} href={subLink.url}>{subLink.name} </Link>
              ))}
            </ul>
          </Flex>
        }
        </>
      ))}
    </Box>
  )
};
export default Links;
