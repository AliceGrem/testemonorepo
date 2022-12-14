import { Box, React,  Text } from '@monorepo/ui-components';

import { Title } from '../../components';
import { DEPOIMENTOS, TITLE } from './const';

const Comments = () => {

  return (
    <Box backgroundColor="#FAF7F5" py={50} sx={{ margin: "100px auto"}} >
      <Title>{TITLE}</Title>
      {DEPOIMENTOS.map(depoimento => (
        <Box key={depoimento.subtitulo} textAlign="center"  maxWidth={900} sx={{ margin: "0 auto"}}>
          <Text fontSize={14} color="#231D19">{depoimento.message}</Text>
          <Text fontSize={16} mt={15} fontWeight={800} color="#106EB0">{depoimento.author}</Text>
          <Text fontSize={16}>{depoimento.subtitle}</Text>
        </Box>
      ))}

    </Box>
  )
};
export default Comments;
