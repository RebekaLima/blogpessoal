import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-pink-600 text-white font-bold'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-8'>
                        <span className='hover:text-yellow-400 cursor-pointer'>Postagens</span>
                        <span className='hover:text-yellow-400 cursor-pointer'>Temas</span>
                        <span className='hover:text-yellow-400 cursor-pointer'>Cadastrar Tema</span>
                        <span className='hover:text-yellow-400 cursor-pointer'>Perfil</span>
                        <span className='hover:text-yellow-400 cursor-pointer'>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar