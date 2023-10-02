import React ,{useEffect} from 'react'
import './modal-dados.css'

const ModalDados = ({
        pNome, 
        pEmail, 
        pCpf,
        pEndereco, 
        pTel, 
        pTurma, 
        pNumero, 
        pNascimento,
        pBairro,
        pCidade,
        pEstado,
        pCep,
        pResp
    }) => {

    const nomeUsuario = pNome
    const cpfUsuario = pCpf
    const telefoneUsuario = pTel
    const turma = pTurma
    const numero = pNumero
    const nascimento = pNascimento
    return (

        <div>
            <div className='dados-form'>


                <div className='parte-alta'>

                    <label>Nome:</label>
                    <textarea rows="2" cols="100" value={nomeUsuario} className='txt-area-dados' readOnly />

                    <label>Nascimento:</label>
                    <textarea value={nascimento} className='txt-area-dados' readOnly />

                    <label>Turma:</label>
                    <textarea value={turma} className='txt-area-dados' readOnly />

                    <label>CPF:</label>
                    <textarea value={cpfUsuario} className='txt-area-dados' readOnly />

                    <label>Telefone:</label>
                    <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />
             
                    <label>Email:</label>
                    <textarea value={pEmail} className='txt-area-dados' readOnly />
                    
                    <label>Endereço:</label>
                    <textarea value={pEndereco} className='txt-area-dados' readOnly />

                </div>

                <div className='parte-baixa'>

                    <label>Numero:</label>
                    <textarea rows="2" cols="100" value={numero} className='txt-area-dados' readOnly />

                    <label>Bairro:</label>
                    <textarea value={pBairro} className='txt-area-dados' readOnly />

                    <label>Cidade:</label>
                    <textarea value={pCidade} className='txt-area-dados' readOnly />

                    <label>Estado:</label>
                    <textarea value={pEstado} className='txt-area-dados' readOnly />

                    <label>Cep:</label>
                    <textarea value={pCep} className='txt-area-dados' readOnly />
                   
                    <label>Responsavel:</label>
                    <textarea value={pResp} className='txt-area-dados' readOnly />
                    
                </div>

            </div>


        </div>

    )

}
export default ModalDados;