import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from '../avatar'
import { Comment } from '../comments'

import styles from './post.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Post muito bacana hein!?']);
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  
  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function handleNewCommentValid() {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutOneDelete = comments.filter(comment => {
      return commentToDelete !== comment
    })
    setComments(commentsWithoutOneDelete)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraphy') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea
          required
          onChange={handleNewCommentChange}
          value={newCommentText} 
          name="comment"
          placeholder="Deixe o seu comentário"
          onInvalid={handleNewCommentValid}
        />

        <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
              />
            )
        })}
      </div>
    </article>
  )
}