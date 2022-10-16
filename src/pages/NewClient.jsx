import { useNavigate } from 'react-router-dom'


export const NewClient = () => {

    const navigate = useNavigate();

  return (
    <>
        <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
        <p className="mt-3">Llena todos los campos para registrar un nuevo cliente:</p>
        
        <div className="flex justify-end">
            <button
                  className="bg-blue-800 text-white px-3 py-1 font-bold uppercase mb-5"
                  onClick={() => navigate('/')}
            >
                Volver
            </button>
          </div>
          
          <div className='bg-white shadow rounded-md md:w3/4 mx-auto px-5 py-10'>
              <p>Formulario</p>
          </div>
    </>
  )
}


