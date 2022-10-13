import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-800 px-5 py-10'>
              <h2 className='text-4xl font-black text-center text-white'>CRM Clientes</h2>
        </aside>
          
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </main>  
    </div>
  )
}



