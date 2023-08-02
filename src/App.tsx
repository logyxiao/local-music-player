import { Suspense, useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "@/layouts";
import Loading from "@/components/Loading";
import Index from "@/pages/index";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Suspense fallback="loading...">
      <Helmet>
        <Helmet></Helmet>
      </Helmet>
      <Layout>{loading === false ? <Index /> : <Loading />}</Layout>
    </Suspense>
  );
}

export default App;
