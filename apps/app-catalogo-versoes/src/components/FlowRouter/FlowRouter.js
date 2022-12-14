import { Navigate, React, Route, Routes, useLocation } from '@monorepo/ui-components';
import { R } from '@monorepo/utils';

import DESK_ROUTES from '../../pages/routes';

const FlowRouter = () => {
  const { pathname } = useLocation();
  const ROUTES = DESK_ROUTES;
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
    <Routes>
      <Route element={<Navigate to={path}></Navigate>}></Route>
      {ROUTES.map((route, index) => {
        return (
          <Route key={`parent-route-${index}`} path={route.path}>
            {route.children && route.children.length &&
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
  );
};

export default FlowRouter;
