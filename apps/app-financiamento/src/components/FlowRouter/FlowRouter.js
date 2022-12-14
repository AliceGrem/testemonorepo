import { Navigate, React, Route, Routes, useLocation } from '@monorepo/ui-components';
import { R } from '@monorepo/utils';

import { DESK_ROUTES, MOBILE_ROUTES } from '../../pages/routes';
import { useWizard } from '../Wizard/components/WizardProvider/WizardProvider';
import { Container } from './style';

const FlowRouter = () => {
  const { pathname } = useLocation();
  const { isDesk } = useWizard();
  const ROUTES = isDesk ? DESK_ROUTES : MOBILE_ROUTES;
  const { path } = R.pipe(R.head, R.propOr([], 'children'), R.propOr({}, 0))(ROUTES);
  const getAllPaths = () => {
    const paths = [];
    ROUTES.forEach(({ children }) => {
      children.forEach(({ path }) => {
        paths.push(path);
      });
    });
    return paths;
  };

  if (!R.includes(pathname, getAllPaths())) return <Navigate to={path} />;
  return (
    <Container>
      <Routes>
        <Route element={<Navigate to={path}></Navigate>}></Route>
        {ROUTES.map((route, index) => {
          return (
            <Route key={`parent-route-${index}`} path={route.path}>
              {route.children &&
                route.children.map((childRoute, childIndex) => {
                  return (
                    <Route
                      path={childRoute.path}
                      element={childRoute.element}
                      key={`child-route${childIndex}`}
                    />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </Container>
  );
};

export default FlowRouter;
