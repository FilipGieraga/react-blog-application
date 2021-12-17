import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import CreateNew from "./pages/CreateNew";
import Features from "./pages/Features";
import BlogPost from "./pages/BlogPost";
import AllPosts from "./pages/AllPosts";
import NoPageFound from "./pages/NoPageFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/create-new" exact>
          <CreateNew />
        </Route>
        <Route path="/features" exact>
          <Features />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/blogpost/:handle">
          {/* :handle can be anything we want,like blogpost/dasfsd */}
          <BlogPost />
        </Route>
        <Route path="/all-posts">
          <AllPosts />
        </Route>
        <Route path="*">
          <NoPageFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
