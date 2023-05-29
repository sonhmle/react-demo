import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import Home from "./pages/Home";
import RenderProps from "./pages/RenderProps";
import Memoization from "./pages/Memoization";
import Loader from "./components/Loader";
import ReactContext from "./pages/ReactContext";

// const Home = lazy(() => import("./pages/Home"));
// const RenderProps = lazy(() => import("./pages/RenderProps"));
// const Memoization = lazy(() => import("./pages/Memoization"));
// const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/render-props" component={RenderProps} />
            <Route exact path="/memoization" component={Memoization} />
            <Route exact path="/react-context" component={ReactContext} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
