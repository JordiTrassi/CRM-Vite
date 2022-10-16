import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom'
import { Formulario } from '../components'
import { getOneClient, editClient } from '../data/clients'
import { Error } from '../components'


export async function loader({ params }) {
    const cliente = await getOneClient(params.clientId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El Cliente no fue encontrado'
        })
    }
    return cliente
}

export async function action({request, params}) {

    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')

    // Validation
    const errors = []
    if (Object.values(datos).includes('')) {
        errors.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
        errors.push('El Email no es válido')
    }

    // Return datos if there are errors
    if (Object.keys(errors).length) {
        return errors
    }
    
    await editClient(params.clientId, datos)
    return redirect('/')
}

export const EditClient = () => {

    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errors = useActionData();


  return (
    <>
        <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
        <p className="mt-3">A continucaión podrá modificar los datos del cliente:</p>
        
        <div className="flex justify-end">
            <button
                  className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                  onClick={() => navigate('/')}
            >
                Volver
            </button>
          </div>
          
          <div className='bg-white shadow rounded-md md:w3/4 mx-auto px-5 py-10 mt-20'>
              
              {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error> )}

              <Form
                  method='post'
                  noValidate
              >  
                <Formulario
                    cliente={cliente}
                />
                <input
                    type="submit"
                    className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
                    value="Guardar Cambios"
                    />
                </Form>
          </div>
    </>
  )
}

