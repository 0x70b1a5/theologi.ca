import theo from '../styles/theo.module.css'
import Article from './article'

export default function Question({ id, title, articles }) {
  return (
    <div className={theo.question}>
      {articles.map(article => <Article 
        id={article.id} 
        text={article.text} 
        answer={article.answer} />
      )}
    </div>

  )
}