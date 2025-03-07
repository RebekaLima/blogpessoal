import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='rounded px-4 py-2 font-bold bg-gradient-to-r from-[#e2288e] to-[#bd0b95] 
                            hover:scale-105 transition-all duration-200 cursor-pointer'
                    >
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;
