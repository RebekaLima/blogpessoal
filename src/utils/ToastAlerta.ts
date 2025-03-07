import { toast } from 'react-toastify';

// Paleta de cores personalizada
const cores = {
    sucesso: {
        background: '#5f57f5', // cor roxa
        color: '#ffffff', // cor do texto (branco)
    },
    erro: {
        background: '#e2288e', // cor rosa
        color: '#ffffff', // cor do texto (branco)
    },
    info: {
        background: '#19194f', // cor azul escuro
        color: '#c3e8f6', // cor do texto (azul claro)
    },
    warning: {
        background: '#faaf0e', // cor amarela
        color: '#19194f', // cor do texto (azul escuro)
    },
};

// Atualizando a função para garantir que o tipo esteja correto
export function ToastAlerta(mensagem: string, tipo: keyof typeof cores) {
    const estilo = cores[tipo] || cores.info; // Caso o tipo não seja válido, usa 'info' como padrão

    switch (tipo) {
        case 'sucesso':
            toast.success(mensagem, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
                style: {
                    background: estilo.background,
                    color: estilo.color,
                },
            });
            break;

        case 'erro':
            toast.error(mensagem, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
                style: {
                    background: estilo.background,
                    color: estilo.color,
                },
            });
            break;

        case 'info':
        default:
            toast.info(mensagem, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
                style: {
                    background: estilo.background,
                    color: estilo.color,
                },
            });
            break;
    }
}
