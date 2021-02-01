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
          <h1>CLIQUE E LEIA AS RESPOSTAS</h1>
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
                  {index === 0 || index === 1 || index === 2 || index === 3 ? `🔥 Ler: Pergunta 1 é verdade ${questionAlternative[index]}` : `🔥 Ler: Pergunta ${index - 2} é verdade ${questionAlternative[index]}`}
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
