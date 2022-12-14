import { Box, React} from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

import { FormModal,Title  } from '../../components';
import { LIST_PLAN, TITLE,  TYPE_PLAN } from './const';
import {
  columnDescription,
  columnTitle,
  fullWidthImage,
  tableBox,
  wrapperSection
} from './Price.module.scss';


const Price = () => {
  const breakpoints = useBreakpoint();

  const imageMobile = (
    <StaticImage
      src="../../images/celular.png"
      quality={100}
      formats={['auto', 'webp', 'avif']}
      alt="Notebook"
      placeholder="blurred"
    />
  )

  const imageDesktop = (
    <StaticImage
      className={fullWidthImage}
      src="../../images/lp.gif"
      quality={100}
      formats={['auto', 'webp', 'avif']}
      alt="Notebook"
      placeholder="blurred"
    />
  )

  return (
    <Box id="plansSection">
      <Title >{TITLE}</Title>
      <Box className={wrapperSection} justifyContent="space-between" py={30}>
      {breakpoints.sm === false && imageDesktop }
        <Box className={tableBox}>
          <table >
            <thead className={columnTitle}>
              <tr>
                {TYPE_PLAN.map((type, i) => (
                  <>
                    <td key={i}>
                      {type.type}
                    </td>
                  </>
                ))}
              </tr>
            </thead>
            <tbody className={columnDescription}>
                {LIST_PLAN.map((plan, i) => (
                  <tr key={i}>
                    <td>
                      {plan.type}
                    </td>
                    <td>
                      {plan.combo1}
                    </td>
                    <td>
                      {plan.combo2}
                    </td>
                    <td>
                      {plan.combo3}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {breakpoints.sm ? imageMobile :
            <FormModal/>
          }
        </Box>

      </Box>
    </Box>

  )
};
export default Price;
