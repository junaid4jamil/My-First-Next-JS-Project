import React from 'react'
import NavBar from './components/nav-bar'

export function Home() {


  return (
    <>
      <NavBar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <h1 className="text-4xl"><b>This is Home Page</b></h1>
          <h1 className="text-9xl text-lime-600"><b>Hello World</b></h1>
          <h3 className="text-7xl text-cyan-500">Next JS</h3>
          <p className="text-4xl text-pink-900" >Created By : Muhammad Jameel Khan</p>

        </main>
      </div>
    </>
  )
}

export default Home