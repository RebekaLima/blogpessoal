import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
        navigate('/');
    }

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <div className="w-full flex justify-center py-4 bg-[#e2288e] text-[#ffffff] font-bold"> {/* Usando a cor roxa para o fundo */}
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold text-[#ffffff] hover:text-[#faaf0e]"> {/* Cor do texto branca e hover em amarelo */}
                        Blog Pessoal
                    </Link>

                    <div className="flex gap-4">
                        <Link to='/postagens' className="hover:underline text-[#ffffff] hover:text-[#faaf0e]"> {/* Cor do texto branca e hover em amarelo */}
                            Postagens
                        </Link>
                        <Link to='/temas' className="hover:underline text-[#ffffff] hover:text-[#faaf0e]">
                            Temas
                        </Link>
                        <Link to='/cadastrartema' className="hover:underline text-[#ffffff] hover:text-[#faaf0e]">
                            Cadastrar tema
                        </Link>
                        <Link to='/perfil' className="hover:underline text-[#ffffff] hover:text-[#faaf0e]">
                            Perfil
                        </Link>
                        <Link to='' onClick={logout} className="hover:underline text-[#ffffff] hover:text-[#faaf0e]">
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {component}
        </>
    );
}

export default Navbar;
