import { colors,spacings } from '@monorepo/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  justify-content: center;
  gap: ${spacings.layout.spacing2xs};
`;

export const Slot = styled.div`
  background: ${colors.neutral.colorWhite};
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  min-height: ${spacings.AdLink.Content.width};
  border-radius: ${spacings.padding.spacing3xs};
  padding: ${spacings.padding.spacingXs};
  box-sizing: border-box;
  img {
    max-width: ${spacings.CarInfo.Logo.width};
    max-height: ${spacings.CarInfo.Logo.height};
  }
`;
