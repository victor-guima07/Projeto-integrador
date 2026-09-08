import { useState } from 'react'
import Home from './pages/home'
import Garagem from './pages/garagem'

function App() {

    const [pagina, setPagina] = useState('home')

    return (
        <div className="app">

            <header>

                <div className="logoArea">

                    <div>
                        <div className="logo">
                            AUTO <span>VAULT</span>
                        </div>

                        <div className="subLogo">
                            SUA COLEÇÃO DE AUTOMÓVEIS
                        </div>
                    </div>
                </div>

                <nav>

                    <button
                        className={pagina === 'garagem' ? 'ativo' : ''}
                        onClick={() => setPagina('garagem')}
                    >
                        GARAGEM
                    </button>

                    <button
                        className={pagina === 'home' ? 'ativo' : ''}
                        onClick={() => setPagina('home')}
                    >
                        ADICIONAR
                    </button>

                </nav>

            </header>

            <main>

                {pagina === 'home' && <Home />}

                {pagina === 'garagem' && (
                    <Garagem
                        adicionarCarro={() => setPagina('home')}
                    />
                )}

            </main>

            <footer>

                <div className="footerLogo">
                    AUTO <span>VAULT</span>
                </div>

            </footer>

        </div>
    )
}

export default App