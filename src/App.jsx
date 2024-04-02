import Layout from "./components/Layout";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <Layout>
        <Home introduction={"1999 UEFA Champions League Winners"} />
      </Layout>
    </div>
  );
}

export default App;
