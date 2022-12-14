import { Flex, React } from '@monorepo/ui-components';
import { Client as Styletron } from "styletron-engine-atomic";
import { DebugEngine, Provider as StyletronProvider } from "styletron-react";

import { propTypes } from './constants';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

const DesktopTemplate = ({ children }) => {
  return (
    <Flex>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        {children}
      </StyletronProvider>
    </Flex>
  );
}

DesktopTemplate.propTypes = propTypes;

export default DesktopTemplate;
