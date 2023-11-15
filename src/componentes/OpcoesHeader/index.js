import './estilo.css'

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

function OpcoesHeader () {
    return (
        <ul className='opcoes'>
          {/* aqui fazemos um for loop na lista acima */}
          { textoOpcoes.map( (texto) => (       
            <li className='opcao'><p>{texto}</p></li>
          ) ) }
        </ul>
    )
}

export default OpcoesHeader