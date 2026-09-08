import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './style.module.css'
import CarCard from '../../componentes/CarCard'

function Garagem({ adicionarCarro }) {

    const [carros, setCarros] = useState([])

    function listarCarros() {

        axios.get('http://localhost:8080/automoveis')
            .then((resposta) => {
                console.log(resposta.data)
                setCarros(resposta.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    function excluirCarro(id) {

        axios.delete(`http://localhost:8080/automoveis/${id}`)
            .then(() => {
                listarCarros()
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(() => {
        listarCarros()
    }, [])

    return (

        <div className={styles.container}>

            <div className={styles.topo}>

                <div>

                    <h1 className={styles.titulo}>
                        MINHA <span>GARAGEM</span>
                    </h1>

                    <p>
                        Confira todos os automóveis da sua coleção.
                    </p>

                </div>

            

            </div>

            <button
                className={styles.botaoAdicionar}
                onClick={adicionarCarro}
            >
                + ADICIONAR NOVO AUTOMÓVEL
            </button>

            <div className={styles.listaCarros}>

                {carros.length === 0 ? (

                    <p className={styles.vazio}>
                        Nenhum automóvel cadastrado.
                    </p>

                ) : (

                    carros.map((carro) => (

                        <CarCard
                            key={carro.id}
                            carro={carro}
                            excluirCarro={excluirCarro}
                        />

                    ))

                )}

            </div>

        </div>
    )
}

export default Garagem