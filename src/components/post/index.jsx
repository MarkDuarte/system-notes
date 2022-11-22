import styles from './post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/markduarte.png" />
          <div className={styles.authorInfo}>
            <strong>Marcos Duarte</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="21 de Novembro de 2022" dateTime="2022-11-21 20:13:54">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}