import Landing from './pages/Landing'
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 2rem;
`

const App = () => {

  return (
    <>
      <Button>Click Me</Button>
      <Landing />
    </>
  )
}

export default App
