import React from 'react';

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

function PostTemplate(props) {

    function like() {
        if (heartlike === "heart-outline") {
            setHeartlike("heart")
        } else {
            setHeartlike("heart-outline")
        }

    }

    const [heartlike, setHeartlike] = React.useState("heart-outline")

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} /> {props.userNome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img onClick={() => {
                    if (heartlike === "heart-outline") {
                        setHeartlike("heart")
                    }
                }} src={props.postImg} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={like} name={heartlike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.likesImg} />
                    <div class="texto"> Curtido por <strong>{props.likePerfil}</strong> e <strong>outras {props.likesNumero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Posts() {
    return (
        listaPost.map(item =>
            <PostTemplate
                userImg={item.userImg}
                userNome={item.userNome}
                postImg={item.postImg}
                likesImg={item.likesImg}
                likePerfil={item.likePerfil}
                likesNumero={item.likesNumero} />
        )
    )
}