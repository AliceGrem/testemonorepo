import {
  Box,
  Button,
  Flex,
  Input,
  React,
  TableBuilder,
  TableBuilderColumn,
  TextField,
  useApi,
  useEffect,
  useState,
} from '@monorepo/ui-components';

import {  COLUMNS, FIELD_SIZE } from './constants';
import { getListModels, textFilterGeneric } from './utils';

const TableModels = () => {
  const { token } = useApi();
  const [models, setModels] = useState([]);
  const [filterModel, setFilterModel] = useState([]);
  const [filterYear, setFilterYear] = useState ([]);

  useEffect(() => {
    getListModels(filterModel, filterYear, token).then(setModelsListValue => {
      setModels(setModelsListValue.data);
    });
  }, [filterModel, filterYear]);

  function setFilterType(functionFilter, event) {
    textFilterGeneric(() => functionFilter(event?.target?.value))
  }

  return (
    <Box width={1}>
      <Flex sx={{gap: '20px'}}  marginBottom={20}>
        <TextField textLabel="Modelo do Carro" renderInput={() => (
           <Input size={FIELD_SIZE} onChange={ () => setFilterType(setFilterModel, event )}  />
          )}
        />
        <TextField textLabel="Ano do Carro" renderInput={() => (
          <Input size={FIELD_SIZE} onChange={ () => setFilterType(setFilterYear, event )} />
        )}
       />
      </Flex>
      <TableBuilder data={models} emptyMessage={() => <p>Nenhum filtro encontrado</p>}>
        {COLUMNS.map(({ name, property }) => (
          <TableBuilderColumn header={name} key={name}>
            {row => row[property]}
          </TableBuilderColumn>
        ))}
        <TableBuilderColumn header="Ação">
          {row => <Button labels={row}>Editar</Button>}
        </TableBuilderColumn>
      </TableBuilder>
    </Box>
  );
};
export default TableModels;
