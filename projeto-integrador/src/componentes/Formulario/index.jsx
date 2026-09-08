import styles from './style.module.css'

function Formulario({
    ano,
    setAno,
    modelo,
    setModelo,
    categoria,
    setCategoria,
    marca,
    setMarca,
    cor,
    setCor,
    cadastrar,
    mensagem
}) {

    return (

        <form className={styles.formulario}>

            <div className={styles.cabecalho}>

                <div className={styles.icone}>
                    📋
                </div>

                <h1>
                    DADOS DO AUTOMÓVEL
                </h1>

            </div>

            <div className={styles.linha}></div>

            <div className={styles.campo}>

                <label htmlFor="ano">
                    Ano
                </label>

                <div className={styles.inputArea}>

                    <div className={styles.iconeCampo}>
                        📅
                    </div>

                    <input
                        id="ano"
                        name="ano"
                        type="number"
                        min="1886"
                        max={new Date().getFullYear()}
                        placeholder="Ex: 2022"
                        value={ano}
                        onChange={(evento) => setAno(evento.target.value)}
                    />

                </div>

            </div>

            <div className={styles.campo}>

                <label htmlFor="modelo">
                    Modelo
                </label>

                <div className={styles.inputArea}>

                    <div className={styles.iconeCampo}>
                        🚗
                    </div>

                    <input
                        id="modelo"
                        name="modelo"
                        type="text"
                        placeholder="Ex: Civic"
                        value={modelo}
                        onChange={(evento) => setModelo(evento.target.value)}
                    />

                </div>

            </div>

            <div className={styles.campo}>

                <label htmlFor="categoria">
                    Categoria
                </label>

                <div className={styles.inputArea}>

                    <div className={styles.iconeCampo}>
                        🏷
                    </div>

                    <input
                        id="categoria"
                        name="categoria"
                        type="text"
                        placeholder="Ex: Sedan"
                        value={categoria}
                        onChange={(evento) => setCategoria(evento.target.value)}
                    />

                </div>

            </div>

            <div className={styles.campo}>

                <label htmlFor="marca">
                    Marca
                </label>

                <div className={styles.inputArea}>

                    <div className={styles.iconeCampo}>
                        🛡
                    </div>

                    <input
                        id="marca"
                        name="marca"
                        type="text"
                        placeholder="Ex: Honda"
                        value={marca}
                        onChange={(evento) => setMarca(evento.target.value)}
                    />

                </div>

            </div>

            <div className={styles.campo}>

                <label htmlFor="cor">
                    Cor
                </label>

                <div className={styles.inputArea}>

                    <div className={styles.iconeCampo}>
                        🎨
                    </div>

                    <input
                        id="cor"
                        name="cor"
                        type="text"
                        placeholder="Ex: Preto"
                        value={cor}
                        onChange={(evento) => setCor(evento.target.value)}
                    />

                </div>

            </div>

            <button
                className={styles.botaoCadastrar}
                type="button"
                onClick={cadastrar}
            >
            CADASTRAR AUTOMÓVEL
            </button>

            {mensagem && (
                <p className={styles.mensagem}>
                    {mensagem}
                </p>
            )}

        </form>
    )
}

export default Formulario