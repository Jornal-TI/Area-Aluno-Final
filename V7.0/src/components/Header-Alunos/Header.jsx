import Logo from '../../icons/logo.png'
import { AiOutlineHome } from 'react-icons/ai';

export default function HeaderAluno() {

    const handleHome = () => {
        window.open('/#', '_blank')
    };


    return (
        <div className="containerHeader">

            <div className='bk-turma-nome'>
                <h1 className='turma-nome'> TÉCNICO DE INFORMATICA </h1>
            </div>

            <div className="data-aluno">
                <img id='logo' src={Logo}></img>
                <h1 className='titulo-aluno'> Área do aluno </h1>

                <button className='home-aluno' type='submit' onClick={handleHome}><AiOutlineHome /> </button>
            </div>


        </div>
    )
}