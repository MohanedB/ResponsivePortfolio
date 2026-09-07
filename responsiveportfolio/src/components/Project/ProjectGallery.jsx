import React, { useId, useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import { FiMaximize2, FiPlay, FiX } from 'react-icons/fi';

const labels = {
  en: { enlarge: 'Enlarge image', close: 'Close image', play: 'Play video', unavailable: 'Image unavailable', videoUnavailable: 'Video unavailable', unsupported: 'Your browser cannot play this video.', credit: 'Credit' },
  fr: { enlarge: 'Agrandir l’image', close: 'Fermer l’image', play: 'Lire la vidéo', unavailable: 'Image indisponible', videoUnavailable: 'Vidéo indisponible', unsupported: 'Votre navigateur ne peut pas lire cette vidéo.', credit: 'Crédit' },
};
const localize = (value, language) => typeof value === 'string' ? value : value?.[language] || value?.en || '';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  min-width: 0;
  @media (max-width: 700px) { grid-template-columns: minmax(0, 1fr); }
`;
const Figure = styled.figure`
  margin: 0;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(133, 76, 230, 0.3);
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
`;
const Frame = styled.div`
  aspect-ratio: 16 / 9;
  position: relative;
  display: grid;
  place-items: center;
  background: #101018;
  min-width: 0;
  overflow: hidden;
  img, video, iframe { width: 100%; height: 100%; display: block; object-fit: contain; border: 0; }
`;
const MediaButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: linear-gradient(135deg, #221b32, #38304b);
  color: #fff;
  cursor: pointer;
  &:focus-visible { outline: 3px solid #d5baff; outline-offset: -4px; }
  &:hover > span { background: #6c37be; }
`;
const EnlargeLabel = styled.span`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 11px;
  border-radius: 8px;
  background: rgba(20, 16, 30, 0.9);
  font-size: 12px;
`;
const PlayLabel = styled.span`
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  max-width: calc(100% - 32px);
  padding: 14px 20px;
  border: 1px solid #b295df;
  border-radius: 999px;
  background: rgba(35, 24, 53, 0.94);
  font-size: 15px;
  font-weight: 600;
`;
const Caption = styled.figcaption`
  padding: 16px 18px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.65;
  overflow-wrap: anywhere;
  p { margin: 0; }
  small { display: block; margin-top: 7px; }
  a { color: #d8c2ff; text-underline-offset: 3px; }
`;
const Fallback = styled.div`
  padding: 28px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  line-height: 1.6;
  overflow-wrap: anywhere;
`;
const Overlay = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 3000;
`;
const Panel = styled.div`
  width: min(1120px, 100%);
  min-width: 0;
  max-height: calc(100vh - 32px);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  border: 1px solid rgba(133, 76, 230, 0.5);
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  outline: none;
`;
const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  h2 { margin: 0; font-size: 17px; line-height: 1.4; overflow-wrap: anywhere; }
`;
const CloseButton = styled.button`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid #80659f;
  border-radius: 50%;
  color: inherit;
  background: ${({ theme }) => theme.bg};
  cursor: pointer;
  &:hover { background: #51317e; }
  &:focus-visible { outline: 3px solid #d5baff; outline-offset: 3px; }
`;
const FullImage = styled.img`
  display: block;
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  background: #101018;
`;

function MediaCaption({ item, language, text }) {
  const caption = localize(item.caption, language);
  if (!caption && !item.credit) return null;
  return <Caption>
    {caption && <p>{caption}</p>}
    {item.credit && <small>{text.credit}: {item.credit.url
      ? <a href={item.credit.url} target="_blank" rel="noopener noreferrer">{item.credit.label}</a>
      : item.credit.label}</small>}
  </Caption>;
}

function GalleryItem({ item, language, text, onEnlarge }) {
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const alt = localize(item.alt, language);
  return <Figure>
    <Frame>
      {item.kind === 'image' && (failed
        ? <Fallback role="status">{text.unavailable}: {alt}</Fallback>
        : <MediaButton type="button" aria-label={`${text.enlarge}: ${alt}`} onClick={() => onEnlarge(item)}>
          <img src={item.src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
          <EnlargeLabel aria-hidden="true"><FiMaximize2 /> {text.enlarge}</EnlargeLabel>
        </MediaButton>)}
      {item.kind === 'video' && (failed
        ? <Fallback role="status">{text.videoUnavailable}: {alt}</Fallback>
        : <video src={item.src} poster={item.poster} controls preload="none" playsInline aria-label={alt} onError={() => setFailed(true)}>{text.unsupported}</video>)}
      {item.kind === 'embed' && (playing
        ? <iframe src={item.src} title={alt} allow="fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        : <MediaButton type="button" aria-label={`${text.play}: ${alt}`} onClick={() => setPlaying(true)}>
          {item.poster && !failed && <img src={item.poster} alt="" loading="lazy" onError={() => setFailed(true)} />}
          <PlayLabel><FiPlay aria-hidden="true" /> {text.play}</PlayLabel>
        </MediaButton>)}
    </Frame>
    <MediaCaption item={item} language={language} text={text} />
  </Figure>;
}

export default function ProjectGallery({ items = [], language = 'en' }) {
  const locale = language.startsWith('fr') ? 'fr' : 'en';
  const text = labels[locale];
  const [selected, setSelected] = useState(null);
  const [enlargedFailed, setEnlargedFailed] = useState(false);
  const titleId = useId();
  const media = items.filter(item => item.src && ['image', 'video', 'embed'].includes(item.kind));
  if (!media.length) return null;
  const close = () => setSelected(null);
  return <>
    <Grid>
      {media.map((item, index) => <GalleryItem key={`${item.kind}-${item.src}-${index}`} item={item} language={locale} text={text} onEnlarge={next => { setEnlargedFailed(false); setSelected(next); }} />)}
    </Grid>
    <Overlay open={Boolean(selected)} onClose={close}>
      <Panel role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
        {selected && <>
          <DialogHeader>
            <h2 id={titleId}>{localize(selected.alt, locale)}</h2>
            <CloseButton type="button" aria-label={text.close} onClick={close}><FiX size={22} /></CloseButton>
          </DialogHeader>
          <figure style={{ margin: 0 }}>
            {enlargedFailed
              ? <Fallback role="status">{text.unavailable}: {localize(selected.alt, locale)}</Fallback>
              : <FullImage src={selected.src} alt={localize(selected.alt, locale)} onError={() => setEnlargedFailed(true)} />}
            <MediaCaption item={selected} language={locale} text={text} />
          </figure>
        </>}
      </Panel>
    </Overlay>
  </>;
}
