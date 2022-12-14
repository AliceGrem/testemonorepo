import { Box,  React, Text } from '@monorepo/ui-components';

import { COPY_TEXT, TERMS_TEXT  } from './const';
import {
  smallText,
} from './Terms.module.scss';


const Copy = () => {

  return (
    <>
      <Box>
        {TERMS_TEXT.map((text, i) => (
          <Text className={smallText} key={i}>{text.paragraph}</Text>
        ))}
      </Box>

      <Box>
        <Text className={smallText}>
          {COPY_TEXT}
        </Text>
      </Box>
    </>
  )
};
export default Copy;
