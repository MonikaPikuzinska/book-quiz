// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectAllQuestion, fetchNewQuestion } from '../actions/questionActions';
// import { API } from './API';


// const QuestionExcerpt = ({ question }) => {
//   return (
//     <article className="post-excerpt">
//       <h3>{question}</h3>
//     </article>
//   )
// }

// export const QuestionList = () => {

//   const dispatch = useDispatch()
//   const question = useSelector(selectAllQuestion)
//   const book = useSelector(state => state.book);
//   const lang = useSelector(state => state.lang);
  
//   const currentQuestion = useSelector(state => state.currentQuestion);
//   const APILink = `${API}/${book}/${currentQuestion}`;
//   const questionStatus = useSelector((state) => state)
//   const error = useSelector((state) => state.question.error)

//   useEffect(() => {
//     dispatch(fetchNewQuestion(APILink))
//   },[]);

//   // if (questionStatus === 'loading') {
//   //   content = <div className="loader">Loading...</div>
//   // } else if (questionStatus === 'succeeded') {
//   //     content = <QuestionExcerpt question={question} />
//   // } else if (questionStatus === 'error') {
//   //   content = <div>{error}</div>
//   // }
//   console.log(questionStatus);
//   return (
//     <section className="posts-list">

//       {questionStatus.question.length>0?questionStatus.question[0].question[lang]:'aaa'}
//     </section>
//   )
// }
