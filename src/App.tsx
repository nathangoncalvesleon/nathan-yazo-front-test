import { useState } from 'react'
import Sidebar from './components/sidebar'
import HomePage from './pages/home'
function App() {

  return (
    <>
      <main className='flex flex-row min-w-screen max-h-[60vh]'>
        <aside className='min-h-[100px]'>
          <Sidebar />
        </aside>
        <HomePage />
      </main>
    </>
  )
}

export default App
