function UsuarioTemplate(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.nome}</strong> {props.user}
            </div>
        </div>
    )
}


export default function Usuario() {
    return (
        <UsuarioTemplate img='assets/img/catanacomics.svg' nome='catanacomics' user='Catana' />
    )
}