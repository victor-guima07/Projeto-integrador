import styles from './style.module.css'
import carroIcone from '../../assets/carro-sedan-na-frente.png'
import lixeiraIcone from '../../assets/lata-de-lixo.png'

function CarCard({ carro, excluirCarro }) {

    return (

        <div className={styles.card}>

            <button
                className={styles.menu}
                onClick={() => excluirCarro(carro.id)}
            >
                <img
                    src={lixeiraIcone}
                    alt="Ícone de lixeira"
                    className={styles.iconelixeira}
                />
            </button>

            <div className={styles.imagemCarro}>

                <div className={styles.circuloCarro}>

                    <img
                        src={carroIcone}
                        alt="Ícone de automóvel"
                        className={styles.iconeCarro}
                    />

                </div>

            </div>

            <h2 className={styles.titulo}>
                {carro.modelo}
            </h2>

            <p className={styles.informacao}>
                <strong>Ano:</strong> {carro.ano}
            </p>

            <p className={styles.informacao}>
                <strong>Categoria:</strong> {carro.categoria}
            </p>

            <p className={styles.informacao}>
                <strong>Marca:</strong> {carro.marca}
            </p>

            <p className={styles.informacao}>
                <strong>Cor:</strong> {carro.cor}
            </p>

        </div>
    )
}

export default CarCard