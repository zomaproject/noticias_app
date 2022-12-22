import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticias from './Noticias'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function ListadoNoticias() {

  const { noticias, totalNoticias, handleChangePagina, page } = useNoticias()
  const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <div>
      <Typography
        textAlign='center'
        marginY={5}
        variant='h3'
        component='h2'
      >
        Últimas Noticias
      </Typography>
      <Grid
        container
        spacing={2}
      >
        {noticias.map(noticia => (
          <Noticias
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </Grid>
      <Stack spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{
          marginY: 5
        }}
      >
        <Pagination
          page={page}
          onChange={handleChangePagina}
          count={totalPaginas} variant="outlined" color="primary" />

      </Stack>
    </div>
  )
}
