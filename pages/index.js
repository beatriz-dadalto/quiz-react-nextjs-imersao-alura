import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head>
        <title>Quiz | Notícia Verdadeira</title>
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1611421964872-fb20b3f66991?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=665&q=80"
        />
        <meta
          property="og:title"
          content="Quiz | Notícia Verdadeira"
          key="title"
        />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Qual notícia é verdadeira?</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Teste os seus conhecimentos gerais!</p>
              <form
                onSubmit={(infosDoEvento) => {
                  infosDoEvento.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <input
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  type="text"
                  placeholder="Digite seu nome"
                  required
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {` ${name}`}
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quizes da galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
                React da Alura fez:
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/biacoelho" />
      </QuizBackground>
    </>
  );
}
