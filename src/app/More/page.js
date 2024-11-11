import Link from "next/link";
import '../globals.css'

export default function Portifolio() {

    return (
        <section>
            <section className='projetos'>
        <Link href={"https://contador-next-m.netlify.app/"}>CONTADOR |NEXT|//</Link>
        <Link href={"https://lista-de-tarefasssss.netlify.app/"}>//LISTA DE TAREFAS |HTML|</Link>
        </section>
            <header>
            <Link href={'/'}><button>Voltar</button></Link>
            <title>URL test</title>
            <h1>Hello, world!</h1>
            </header>
        </section>
    )
}