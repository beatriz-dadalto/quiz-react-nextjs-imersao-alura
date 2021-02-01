import React from 'react';
import styled from 'styled-components';

import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

const LayoutCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function ShareSocialMedia() {
  return (
    <>
      <p style={{ textAlign: 'center' }}>Compartilhe, Parça!</p>
      <LayoutCenter>
        <WhatsappShareButton
          url="https://quiz-noticia-verdadeira.biacoelho.vercel.app"
          title="Quiz | Notícia Verdadeira. Quantas notícias você consegue acertar?"
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <FacebookShareButton
          url="https://quiz-noticia-verdadeira.biacoelho.vercel.app"
          quote="Quiz | Notícia Verdadeira. Quantas notícias você consegue acertar?"
          hashtag="#quizNoticiaVerdadeira"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton
          url="https://quiz-noticia-verdadeira.biacoelho.vercel.app"
          title="Quiz | Notícia Verdadeira. Quantas notícias você consegue acertar?"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton
          url="https://quiz-noticia-verdadeira.biacoelho.vercel.app"
          title="Quiz | Notícia Verdadeira. Quantas notícias você consegue acertar?"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </LayoutCenter>
    </>
  );
}

export default ShareSocialMedia;
