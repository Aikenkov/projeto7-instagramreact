

const listaPost = [
    {
        userImg: 'assets/img/meowed.svg',
        userNome: 'meowed',
        postImg: 'assets/img/gato-telefone.svg',
        likesImg: 'assets/img/respondeai.svg',
        likePerfil: 'respondeai',
        likeOutros: '101.523'
    },
    {
        userImg: 'assets/img/barked.svg',
        userNome: 'barked',
        postImg: 'assets/img/dog.svg',
        likesImg: 'assets/img/adorable_animals.svg',
        likePerfil: 'adorable_animals',
        likesNumero: '99.159'
    }
]



function AcoesTemplate() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}
function TopoTemplate(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.userImg} /> {props.userNome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function ConteudoTemplate(props) {
    return (
        <div class="conteudo">
            <img src={props.postImg} />
        </div>
    )
}

function FundoTemplate(props) {
    return (
        <div class="fundo">
            <AcoesTemplate />
            <div class="curtidas">
                <img src={props.likesImg} />
                <div class="texto"> Curtido por <strong>{props.likePerfil}</strong> e <strong>outras {props.likesNumero} pessoas</strong>
                </div>
            </div>
        </div>
    )
}

function PostTemplate(props) {
    return (
        <div class="post">
            <TopoTemplate
                userImg={props.userImg}
                userNome={props.userNome} />

            <ConteudoTemplate
                postImg={props.postImg} />
            <FundoTemplate
                likesImg={props.likesImg}
                likePerfil={props.likePerfil}
                likesNumero={props.likesNumero} />
        </div>
    )
}



export default function Posts() {
    return (
        listaPost.map(item => {
            return (
                <PostTemplate
                    userImg={item.userImg}
                    userNome={item.userNome}
                    postImg={item.postImg}
                    likesImg={item.likesImg}
                    likePerfil={item.likePerfil}
                    likesNumero={item.likesNumero} />
            )
        })
    )
}