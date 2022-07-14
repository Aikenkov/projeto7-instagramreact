import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"
import Footer from "./Footer"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Footer />
        </div>
    )
}