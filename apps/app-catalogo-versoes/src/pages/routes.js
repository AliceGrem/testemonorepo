import { React } from '@monorepo/ui-components';

import { FormEdit, TableModels } from '../components';

const DESK_ROUTES = [
  {
    label: 'Versões Jato',
    path: '/catalogo/versaoform',
    children: [
      {
        path: '/catalogo/versaoform',
        element: <TableModels />,
      },
    ],
  },
  {
    label: '',
    path: '/catalogo/versaoform/edit',
    children: [
      {
        path: '/catalogo/versaoform/edit',
        element: <FormEdit />,
      },
    ],
  },
];

export default DESK_ROUTES;


