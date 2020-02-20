import React, { Component } from 'react';

const Cabecera = (() => {
    return (
        <header className="cabecera">
            <p>Cabecera</p>
        </header>
    )
})
const Cuerpo = (() => {
    return (
        <div className="cuerpo">
            <div className="cuerpo_top"><p>Contenido complementario top</p></div>
            <aside className="cuerpo_aside1"><p>Columna izquierda</p></aside>
            <main className="cuerpo_main">
                <div className="cuerpo_main_columnacentral"><p>Columna central</p></div>
                <div className="cuerpo_main_intro"><p>Intro</p></div>
                <div className="cuerpo_main_main"><p>Main</p></div>
                <div className="cuerpo_main_outro"><p>Outro</p></div>
            </main>
            <aside className="cuerpo_aside2"><p>Columna derecha</p></aside>
            <div className="cuerpo_bot"><p>Contenido complementario bot</p></div>
        </div>
    )
})
const Pie = (() => {
    return (
        <footer className="pie">
            <p>Pie</p>
        </footer>
    )
})
class Pagina extends Component {
    render() {
        return (
            <div>
                <Cabecera />
                <Cuerpo />
                <Pie />
            </div>
        )
    }
}
export default Pagina