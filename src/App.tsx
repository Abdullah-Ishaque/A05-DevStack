import { Suspense, useState } from "react";
import CardDiv from "./components/cardbox/CardDiv"
import Hero from "./components/Hero"
import Nav from "./components/Nav"



const technologyFetch = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      return data;
}


function App() {
    const [technologyPromise] = useState(() => technologyFetch()) 

  return (
    <>
    <div className=" bg-white w-full min-h-screen p-3 ">
      <Nav/>
      <Hero/>
      <Suspense fallback={<div>Loading...........</div>}>
      <CardDiv technologyPromise={technologyPromise}/>
      </Suspense>
      </div>
    </>
  )
}

export default App
