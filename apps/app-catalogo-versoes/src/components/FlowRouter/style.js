import { border, colors, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - ${spacings.layout.spacing3xl});
  width: ${utils.width.full};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: ${spacings.Wizard.scrollbar};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.brandcolor.primaryMedium};
    border-radius: ${border.radius.border2xl};
  }
`;
