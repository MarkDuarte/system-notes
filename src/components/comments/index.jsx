import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comments.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/markduarte.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Duarte</strong>
              <time title='11 de Novembro às 8:30h' dateTime='2022-11-11 08:30:15'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentario'>
              <Trash size={20} />
            </button>
          </header>
            <p>Muito bom Devon, Parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}