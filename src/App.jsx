import { Container, Typography } from '@mui/material'
import LinkTree from './components/LinkTree'

function App() {
  

  return (
    <Container maxWidth='sm' sx={{ textAlign: 'center', mt: 8}}>
      <Typography variant='h4' gutterBottom>
        Árvore de Links
      </Typography>

      <LinkTree />
    </Container>
  )
}

export default App
