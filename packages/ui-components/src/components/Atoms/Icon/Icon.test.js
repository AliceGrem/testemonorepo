import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';

import Icon from './Icon';

afterEach(cleanup);

test('Should create Icon', async () => {
  const name = 'ajuda_lg';
  await waitFor(() => render(<Icon title={name} name={name} />));
});
