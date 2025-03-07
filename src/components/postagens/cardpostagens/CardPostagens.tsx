import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';

interface CardPostagensProps {
    postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="bg-gradient-to-r from-[#5f57f5] to-[#e2288e] p-4 flex items-center gap-4">
                <img
                    src={postagem.usuario?.foto}
                    className="h-14 w-14 rounded-full object-cover"
                    alt={postagem.usuario?.nome}
                />
                <h3 className="text-white text-lg font-semibold">{postagem.usuario?.nome}</h3>
            </div>

            <div className="px-6 py-4 bg-[#f3f4f6] flex flex-col gap-4">
                <h4 className="text-xl font-semibold text-[#19194f]">{postagem.titulo}</h4>
                <p className="text-gray-700">{postagem.texto}</p>
                <div className="flex justify-between text-sm text-gray-600">
                    <p><strong>Tema:</strong> {postagem.tema?.descricao}</p>
                    <p><strong>Data:</strong> {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>

            <div className="flex gap-2 p-4">
                <Link
                    to={`/editarpostagem/${postagem.id}`}
                    className="flex items-center justify-center w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#e2288e] to-[#e2288e] hover:from-[#e2288e] hover:to-[#faaf0e] transition duration-200 ease-in-out"
                >
                    <button className="font-semibold">Editar</button>
                </Link>

                <Link
                    to={`/deletarpostagem/${postagem.id}`}
                    className="flex items-center justify-center w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#4217a6] to-[#4217a6] hover:from-[#5f57f5] hover:to-[#4217a6] transition duration-200 ease-in-out"
                >
                    <button className="font-semibold">Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardPostagem;
