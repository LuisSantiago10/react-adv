import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

// import { LazyPage1,LazyPage2,LazyPage3  } from '../01-lazyload/pages'
import { routes } from './routes';
import { Suspense } from 'react';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span>}>
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {  
              routes.map( ({to,name}) => (
                <li key={ to }>
                  <NavLink to={ to } activeClassName="nav-active" exact>{ name }</NavLink>
                </li>
              )) 
            }
            {/* <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy3</NavLink>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {
          /*
          <Route path="/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
          <LazyPage2 />
          </Route>
          <Route path="/lazy3">
          <LazyPage3 />
          </Route>
          */
          }

          {
            routes.map( ({to,path,Component}) => (
                <Route 
                  key={path} 
                  path={ to }>
                  <Component />
                </Route>
            ))
          }
          {/* <Route path="/*" component={routes[0].to}>  </Route> */}
        </Switch>
      </div>
    </Router>
    </Suspense>
  );
}