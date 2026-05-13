import { Switch, Route, Router as WouterRouter } from "wouter";
import Layout from "./components/Layout";
import NutritionGuide from "./pages/NutritionGuide";
import ArticlePage from "./pages/ArticlePage";
import AdditionalResources from "./pages/AdditionalResources";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={NutritionGuide} />
        <Route path="/nutrition-guide/:slug" component={ArticlePage} />
        <Route path="/additional-resources" component={AdditionalResources} />
        <Route path="/recipes" component={Recipes} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
