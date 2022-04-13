import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
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
          </ul>
        </nav>
        <Switch>
          {
            routes.map( ({to,path,Component}) => (
                <Route 
                  key={path} 
                  path={ to }>
                  <Component />
                </Route>
            ))
          }
          <Redirect to={routes[0].path}/>
        </Switch>
      </div>
    </Router>
    </Suspense>
  );
}