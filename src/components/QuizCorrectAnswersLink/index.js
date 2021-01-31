import React from 'react';
import Widget from '../Widget';
import Link from '../Link';
import db from '../../../db.json';

function QuizCorrectAnswersLink() {
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
          <h1>CONFERIR RESPOSTAS</h1>
        </Widget.Header>
        <Widget.Content>
          <ul>
            {db.correctAnswerLink.map((linkExterno) => (
              // const [siteName, linkNews] = linkExterno
              //   .replace(/\//g, '')
              //   .replace('https:', '')
              //   .replace('.vercel.app', '')
              //   .split('.');

              <li key={linkExterno}>
                <Widget.Topic
                  as={Link}
                  href={linkExterno}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`${linkExterno}`}
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
