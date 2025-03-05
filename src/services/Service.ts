import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoalspring-29tb.onrender.com/'
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    try {
        const resposta = await api.post(url, dados);
        if (resposta.status === 201) {
            setDados(resposta.data); // Atualiza o estado apenas se a resposta for OK (201 - Created)
        } else {
            throw new Error("Erro inesperado ao cadastrar o usuário");
        }
    } catch (error: any) {
        // Verifica o tipo de erro e exibe uma mensagem amigável
        if (error.response) {
            console.error("Erro na resposta:", error.response.data);
            throw new Error(`Erro ao cadastrar o usuário: ${error.response.data.message || 'Erro desconhecido'}`);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
            throw new Error("Erro ao se conectar com o servidor");
        } else {
            console.error("Erro desconhecido:", error.message);
            throw new Error("Erro ao cadastrar o usuário");
        }
    }
};
