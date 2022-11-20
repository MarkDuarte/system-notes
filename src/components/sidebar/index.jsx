import { PencilLine } from 'phosphor-react'
import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <img 
          src="https://avatars.githubusercontent.com/u/51549798?v=4" 
          className={styles.avatar} 
        />

        <strong>Marcos Duarte</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />

          Editar o seu perfil
        </a>
      </footer>
    </aside>
  )
}