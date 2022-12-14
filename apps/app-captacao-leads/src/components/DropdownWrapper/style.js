import { border, colors, spacings } from '@monorepo/theme';
import { Dropdown } from '@monorepo/ui-components';
import styled from 'styled-components';

export const StyledDropdown = styled(Dropdown)`
  .dropdown__menu-list {
    ::-webkit-scrollbar {
      width: ${spacings.Dropdown.scrollbar.width};
      background: ${colors.transparent};
    }

    ::-webkit-scrollbar-thumb {
      height: ${spacings.Dropdown.scrollbar.height};
      background: ${colors.brandcolor.primaryMedium};
      border-radius: ${border.radius.border2xl};
    }
  }
`;
