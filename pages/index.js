import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import ShareSocialMedia from '../src/components/ShareSocialMedia';

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
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>👽 QUAL NOTÍCIA É VERDADEIRA?</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Teste os seus conhecimentos gerais!</p>
              <form
                onSubmit={(infosDoEvento) => {
                  infosDoEvento.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  required
                />
                <Button type="submit" disabled={name.length === 0} name={name}>
                  {`Bora Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
            <ShareSocialMedia />
          </Widget>
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
              <h1>🎮 JOGAR MAIS</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Jogue outros Quizes legais dos meus colegas,
                desenvolvidos durante a #imersaoAlura!
              </p>
              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}__${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Footer
            as={motion.footer}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/biacoelho" />
      </QuizBackground>
    </>
  );
}
