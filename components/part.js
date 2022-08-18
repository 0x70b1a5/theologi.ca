import theo from '../styles/theo.module.css'

export default function Part({ title, questions }) {
  return (
    <section>
      <h1>{title}</h1>
      <div className={theo.questionList}>
        {questions.map(question => <Question
          id={question.id} 
          title={question.title} 
          articles={question.articles}  />
          )}
      </div>
        
    </section>
  )
}