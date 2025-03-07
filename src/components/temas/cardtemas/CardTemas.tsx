import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';

interface CardTemasProps {
    tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300 ease-in-out">
            
            {/* Cabeçalho do Tema */}
            <div className="bg-gradient-to-r from-[#5f57f5] to-[#e2288e] p-4 flex items-center gap-4">
                <h3 className="text-white text-lg font-semibold uppercase">
                    {tema.descricao}
                </h3>
            </div>

            {/* Descrição do Tema */}
            <div className="px-6 py-4 bg-[#f3f4f6] flex flex-col gap-4">
                <p className="text-gray-700">{tema.descricao}</p>
            </div>

            {/* Botões de Editar e Deletar */}
            <div className="flex gap-2 p-4">
                {/* Botão Editar */}
                <Link
                    to={`/editartema/${tema.id}`}
                    className="flex items-center justify-center w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#e2288e] to-[#e2288e] hover:from-[#e2288e] hover:to-[#faaf0e] transition duration-200 ease-in-out"
                >
                    <button className="font-semibold">Editar</button>
                </Link>

                {/* Botão Deletar */}
                <Link
                    to={`/deletartema/${tema.id}`}
                    className="flex items-center justify-center w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#4217a6] to-[#4217a6] hover:from-[#5f57f5] hover:to-[#4217a6] transition duration-200 ease-in-out"
                >
                    <button className="font-semibold">Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardTemas;
