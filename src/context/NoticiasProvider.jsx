import { createContext, useEffect, useState } from "react"
import axios from 'axios'



const NoticiasContext = createContext()


const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])
  const [page, setPage] = useState(0)
  const [totalNoticias, setTotalNoticias] = useState(0)
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value)
  }
  const handleChangePagina = (e,valor) => {
    setPage(valor)
  }
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get(url)
      // .then(res => res.data)
      // .then(res => res.articles)
      // setNoticias(articulos)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
    }
    setPage(1)
    consultarApi()
  }, [categoria])

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get(url)
      // .then(res => res.data)
      // .then(res => res.articles)
      // setNoticias(articulos)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
    }
    consultarApi()
  }, [page])


  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        noticias,
        totalNoticias,
        page,
        handleChangeCategoria,
        handleChangePagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export {
  NoticiasProvider
}

export default NoticiasContext

