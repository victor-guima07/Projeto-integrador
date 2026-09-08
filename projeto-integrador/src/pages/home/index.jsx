import { useState } from 'react'
import axios from 'axios'
import styles from './style.module.css'
import Formulario from '../../componentes/Formulario'

function Home() {

  const [ano, setAno] = useState('')
  const [modelo, setModelo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [marca, setMarca] = useState('')
  const [cor, setCor] = useState('')

  const [mensagem, setMensagem] = useState('')

  function cadastrar() {

    if (
      ano === '' ||
      modelo === '' ||
      categoria === '' ||
      marca === '' ||
      cor === ''
    ) {
      setMensagem('Preencha todos os dados do automóvel.')
      return
    }

    const anoNumerico = Number(ano)
    const anoAtual = new Date().getFullYear()

    if (anoNumerico < 1886 || anoNumerico > anoAtual) {
      setMensagem('Digite um ano válido para o automóvel.')
      return
    }

    const automovel = {
      ano: anoNumerico,
      modelo: modelo,
      categoria: categoria,
      marca: marca,
      cor: cor
    }

    axios.post('http://localhost:8080/automoveis', automovel)
      .then((resposta) => {

        console.log(resposta.data)

        setMensagem('Automóvel cadastrado com sucesso!')

        setAno('')
        setModelo('')
        setCategoria('')
        setMarca('')
        setCor('')
      })
      .catch((erro) => {

        console.log(erro)

        setMensagem('Erro ao cadastrar automóvel.')
      })
  }

  return (
    <div className={styles.container}>

      <Formulario
      ano={ano}
      setAno={setAno}
      modelo={modelo}
      setModelo={setModelo}
      categoria={categoria}
      setCategoria={setCategoria}
      marca={marca}
      setMarca={setMarca}
      cor={cor}
      setCor={setCor}
      cadastrar={cadastrar}
      mensagem={mensagem}
    />
    </div>
  )
}

export default Home