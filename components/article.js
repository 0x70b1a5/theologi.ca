import theo from '../styles/theo.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Article({ id, text, answer }) {
  answerClass = a => a == 'Yes.' ? 
    theo.yes : answer == 'No.' ?
      theo.no : theo.sorta
      
  return (
    <div className={theo.article}>
      <div className={theo.header}>
          <h2>
              <small className={`${utilStyles.lightText}`}>
                {id}
              </small>
              {text}
          </h2>
      </div>
      <div className={`${theo.answer} ${answerClass(answer)}`}>
        {answer}
      </div>
    </div> 
  )
}