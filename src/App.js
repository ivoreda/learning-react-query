import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { SuperHeroesPage } from "./components/SuperHeroesPage";
import { RQSuperHeroPage } from "./components/RQSuperHeroPage";
import { ParallelQueriesPage } from "./components/ParallelQueriesPage";
import { DynamicParallelPage } from "./components/DynamicParallelPage";
import { DependentQueriesPage } from "./components/DependentQueriesPage";
import { PaginatedQueriesPage } from "./components/PaginatedQueriesPage";
import { InfiniteQueriesPage } from "./components/InfiniteQueriesPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              exact
              path="/rq-infinite"
              element={<InfiniteQueriesPage />}
            />
            <Route
              exact
              path="/rq-paginated"
              element={<PaginatedQueriesPage />}
            />
            <Route
              exact
              path="/rq-dependent"
              element={<DependentQueriesPage email="ivoredafe@example.com" />}
            />
            <Route
              exact
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            <Route
              exact
              path="/rq-parallel"
              element={<ParallelQueriesPage />}
            />
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
            <Route exact path="/super-heroes" element={<SuperHeroesPage />} />
            <Route
              exact
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}

export default App;
