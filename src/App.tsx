import { NavBar } from "./components/NavBar";
import { CardArea } from "./components/CardArea";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useQuery } from "react-query";

import { useQueryPlants } from "./components/useQuery/useQueryPlants";
import { useQuerySpace } from "./components/useQuery/useQuerySpace";
import { useQueryRecipe } from "./components/useQuery/useQueryRecipe";

import "./App.css";

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="app-container">
                <NavBar />
                <div className="home-page-container">
                  <div className="home-page-text">
                    <h1>Choose a page</h1>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/plants"
          caseSensitive={false}
          element={<PageContentPlants />}
        />
        <Route
          path="/space"
          caseSensitive={false}
          element={<PageContentSpace />}
        />
        <Route
          path="/recipe"
          caseSensitive={false}
          element={<PageContentRecipe />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const PageContentPlants = () => {
  const { data } = useQuery({
    queryKey: "plants",
    queryFn: useQueryPlants,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="app-container">
        <NavBar page={"plants"} />
        <CardArea data={data} page={"plants"} />
      </div>
    </>
  );
};

const PageContentSpace = () => {
  const { data } = useQuery({
    queryKey: "space",
    queryFn: useQuerySpace,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="app-container">
        <NavBar page={"space"} />
        <CardArea data={data} page={"space"} />
      </div>
    </>
  );
};

const PageContentRecipe = () => {
  const { data } = useQuery({
    queryKey: "recipe",
    queryFn: useQueryRecipe,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="app-container">
        <NavBar page={"recipe"} />
        <CardArea data={data} page={"recipe"} />
      </div>
    </>
  );
};
