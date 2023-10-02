import React, {useEffect} from "react";
import HeaderAluno from "../Header-Alunos/Header";
import DadosInfos from '../Dados-Infos/Dados-Infos';
import "./pagina.css"
import '../../App.css';
import {Nome, Senha} from '../login/login'

function Inicial() {
    var nome = Nome();
    var senha = Senha();

    return (
        <div >
            
            <nav className='nav-aluno'> <HeaderAluno />  </nav>

            <div className="App">
                <DadosInfos nomeUser={Nome()} senhaUser={Senha()}/>
            </div>
        </div>
    )
}

export default Inicial;