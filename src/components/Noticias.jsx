import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typographty from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
export default function Noticias({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia
  return (

    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage &&
          <CardMedia
            component='img'
            alt={`${title}}`}
            image={`${urlToImage}`}
            height = {'250'}
          />
        }
        <CardContent>
          <Typographty variant='body1' color='error'>
            {source.name}
          </Typographty>

          <Typographty variant='h5' component='div'>
            {title}
          </Typographty>

          <Typographty variant='body2'>
            {description}
          </Typographty>
          <CardActions>
            <Link
              href={url}
              target ='_blank'
              variant='button'
              width= {'100%'} 
              textAlign = 'center'
              sx = {{
                textDecoration: 'none'
              }}
            >
            Leer Noticia
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  )
}
