import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
   <div>
     <Header />

     <div className={styles.wrapper}>
      <Sidebar />
        <main>
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
      </main>
     </div>
   </div>
  )
}

export default App
