import '../../App.css'
import '../Modal-Dados/modal-dados.css'
import './Dados-Infos.css'
import ModalDados from '../Modal-Dados/modal-dados'
import React, { useState, useEffect } from 'react'
import ModalAtividades from '../Modal-Atividades/modal-atividades'
import HorariosInfos from '../Horarios/Horarios-Infos'
import NotasInfos from '../Notas/Notas'
import MaterialInfos from '../Material-Infos/Material'

import Livro from "../../icons/livro.svg"
import Lapis from "../../icons/lapis.svg"
import Relogio from "../../icons/relogio.svg"
import Licao from "../../icons/licao.svg"
import Usuario from "../../icons/usu.svg"
import consumoApi from "../consumoApi/consumoApi";
import {Nome, Senha} from '../login/login';

const DadosInfos = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAtividades, setShowAtividades] = useState(false);
    const [showHorarios, setShowHorarios] = useState(false);
    const [showTeste, setShowTeste] = useState(false);
    const [showNotas, setShowNotas] = useState(false);
    const [showMaterial, setShowMaterial] = useState(false);
    var [dadosApi, setnome] = useState();
    let dadoT = dadosApi || '';

    let u = Nome();
    let p = Senha();

    let rota = `/${u}/${p}`; // `/${Nome()}/${Senha()}`

    var handleLogin = async () => {
        console.log(rota);
        consumoApi
          .get(rota)
          .then((response) => {
            setnome(response.data);
            //console.log(response.data);
            console.log(response.data[0].nome);
            console.log(response.data)
            // navigate('/Inicial');
          // response.data === "usuário não encontrado!" ? console.log("") : navigate('/Inicial'); 
           //return response.data
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      };

    const handleModalClick = () => {
        setShowModal(!showModal);
        handleLogin();
        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleAtividadesClick = () => {
        setShowAtividades(!showAtividades);

        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleHorariosClick = () => {
        setShowHorarios(!showHorarios);

        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleNotasClick = () => {
        setShowNotas(!showNotas);

        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleMaterialClick = () => {
        setShowMaterial(!showMaterial);

        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
    };    

    return (

        <div className='navbar-alinhamento'>

            <nav clasname="navbar-main">

                <div className='background-app'>
                    <button className='dados-button button-nav' onClick={handleModalClick}>
                        <img src={Usuario} /> Meus Dados
                    </button>

                    <button className='atividades-button button-nav' onClick={handleAtividadesClick}>
                        <img src={Licao} /> Atividade
                    </button>

                    <button className='horarios-button button-nav' onClick={handleHorariosClick}>
                        <img src={Relogio} /> Horários
                    </button>

                    <button className='notas-button button-nav' onClick={handleNotasClick}>
                        <img src={Lapis} /> Notas
                    </button>

                    <button className='apoio-button button-nav' onClick={handleMaterialClick}>
                        <img src={Livro} /> Material de Apoio
                    </button>

                </div>

            </nav>

            {showModal && (

                <div className='infos'>
                    <ModalDados 
                        pNome={dadoT[0]?.nome}
                        pNumero={dadoT[0]?.numero}
                        pNascimento={dadoT[0]?.nascimento}
                        pBairro={dadoT[0]?.bairro}
                        pTurma={dadoT[0]?.turma}
                        pCpf={dadoT[0]?.cpf}
                        pTel={dadoT[0]?.telCel}
                        pEmail={dadoT[0]?.emailpessoal}
                        pEndereco={dadoT[0]?.endereco}
                        pCidade={dadoT[0]?.cidade}
                        pEstado={dadoT[0]?.estado}
                        pCep={dadoT[0]?.cep}
                        pResp={dadoT[0]?.responsavel}
                        />
                </div>
            )}

            {showAtividades && (

                <div className='infos'>
                    <ModalAtividades />
                </div>
            )}

            {showHorarios && (

                <div className='infos'>
                    <HorariosInfos />
                </div>
            )}

            {showNotas && (

                <div className='infos'>
                    <NotasInfos />
                </div>
            )}

            {showMaterial && (

                <div className='infos'>
                    <MaterialInfos />
                </div>
            )}


        </div>
    )

}

export default DadosInfos;