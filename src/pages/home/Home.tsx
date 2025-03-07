import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="bg-[#5f57f5] flex justify-center h-90">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around">
                            <div className="flex justify-around gap-4 ">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center h-90 w-120">
                        <img
                            src="img/retro.png"
                            alt="Imagem Página Home"
                            className="w-5/5"
                        />
                    </div>
                </div>
            </div>

            {/* Personalizando a div que envolve a ListaPostagens */}
            <div className="flex justify-center w-full bg-[#d2d0f8] h-100">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1">
                        <ListaPostagens />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

