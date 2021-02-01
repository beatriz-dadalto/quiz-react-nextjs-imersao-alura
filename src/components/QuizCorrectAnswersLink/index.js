import React from 'react';

import Widget from '../Widget';
import Link from '../Link';
import db from '../../../db.json';

function QuizCorrectAnswersLink() {
  const questionAlternative = ['A', 'B', 'C', 'D', 'A', 'B', 'A', 'C', 'A', 'E'];

  return (
    <>
      <Widget
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      >
        <Widget.Header>
          <h1>DESCUBRA A RESPOSTA</h1>
        </Widget.Header>
        <Widget.Content>
          <ul>
            {db.correctAnswerLink.map((linkExterno, index) => (
              <li key={linkExterno}>
                <Widget.Topic
                  as={Link}
                  href={linkExterno}
                  target="_blank"
                  rel="noreferrer"
                >
                  {index === 0 || index === 1 || index === 2 || index === 3 ? `Leia: Pergunta 1 = ${questionAlternative[index]}` : `Leia: Pergunta ${index - 2} = ${questionAlternative[index]}`}
                </Widget.Topic>
              </li>
            ))}
          </ul>
        </Widget.Content>
      </Widget>
    </>
  );
}

export default QuizCorrectAnswersLink;
