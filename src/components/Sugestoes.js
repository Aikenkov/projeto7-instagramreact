const listaSugestoes = [
    {
        img: 'assets/img/bad.vibes.memes.svg',
        nome: 'bad.vibes.memes',
        razao: 'Segue você',
        seguir: 'Seguir'
    },
    {
        img: 'assets/img/chibirdart.svg',
        nome: 'chibirdart',
        razao: 'Segue você',
        seguir: 'Seguir'
    },
    {
        img: 'assets/img/razoesparaacreditar.svg',
        nome: 'razoesparaacreditar',
        razao: 'Novo no Instagram',
        seguir: 'Seguir'
    },
    {
        img: 'assets/img/adorable_animals.svg',
        nome: 'adorable_animals',
        razao: 'Segue você',
        seguir: 'Seguir'
    },
    {
        img: 'assets/img/smallcutecats.svg',
        nome: 'smallcutecats',
        razao: 'Segue você',
        seguir: 'Seguir'
    }

];

function SugestoesTemplate(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">{props.seguir}</div>
        </div>
    )
}

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo"> Sugestões para você <div>Ver tudo</div></div>

            {listaSugestoes.map(item => {
                return (
                    <SugestoesTemplate
                        img={item.img}
                        nome={item.nome}
                        razao={item.razao}
                        seguir={item.seguir} />
                )
            })}
        </div>
    )
}