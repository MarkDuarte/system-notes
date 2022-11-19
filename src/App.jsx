import { Header } from './components/header'
import { Post } from './Posts'

import './global.css'

function App() {

  return (
   <div>
     <Header />

     <Post 
      author="Marcos Duarte"
      content="Bla Bla Bla Bla ajaskhsjkhsjkashjkashasjkhskjhsjkshashjkashsjkashsakjashjkashjkshjkshjks"
     />
      <Post 
      author="Maria Julia"
      content="Bla Bla Bla Bla ajaskhsjkhsjkashjkashasjkhskjhsjkshashjkashsjkashsakjashjkashjkshjkshjks"
     />
      <Post 
      author="Antonio Duarte"
      content="Bla Bla Bla Bla ajaskhsjkhsjkashjkashasjkhskjhsjkshashjkashsjkashsakjashjkashjkshjkshjks"
     />
   </div>
  )
}

export default App
