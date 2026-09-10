import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technology from "./components/Technology/Technology"
import type { TechnologyType } from "./type/type"

function App() {

  const technologyFetch = async (): Promise<TechnologyType[]> => {
    const res = await fetch("../public/data.json");
    const data = res.json();
    return data;
  }

  const technologyPromise = technologyFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<p>Loading....</p>}>
        <Technology technologyPromise={technologyPromise}/>
      </Suspense>
    </>
  )
}

export default App
