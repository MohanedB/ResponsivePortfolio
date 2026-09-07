import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/const';
import { caseStudies } from '../../data/caseStudies';
import ProjectGallery from './ProjectGallery';
import CodeHighlights from './CodeHighlights';

const Page = styled.article`
  max-width: 1160px;
  margin: 0 auto;
  padding: 36px 24px 80px;
  color: ${({ theme }) => theme.text_primary};
  h1, h2, h3 { line-height: 1.25; }
  p { line-height: 1.8; }
  @media (max-width: 600px) { padding: 24px 18px 56px; }
`;
const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: #d7c5f4;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;
const Hero = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(240px, 1fr);
  gap: 40px;
  padding: 40px 0;
  h1 { font-size: clamp(34px, 5vw, 58px); margin: 14px 0 24px; overflow-wrap: anywhere; }
  @media (max-width: 800px) { grid-template-columns: minmax(0, 1fr); gap: 24px; padding: 28px 0; }
`;
const Eyebrow = styled.p`
  color: #c5acf0;
  font-size: 13px;
  letter-spacing: 0.04em;
`;
const Intro = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
`;
const Facts = styled.aside`
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #443651;
  background: ${({ theme }) => theme.card};
  align-self: start;
  dt { font-size: 12px; color: #c5acf0; margin-bottom: 8px; }
  dd { font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
  dd:last-child { margin-bottom: 0; }
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  span { background: #854ce622; color: #dcccf5; padding: 5px 10px; font-size: 12px; border-radius: 8px; }
`;
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 10px 16px;
    border-radius: 10px;
    color: #efe6ff;
    border: 1px solid #9a6ade;
    text-decoration: none;
  }
  a:hover { background: #854ce633; }
`;
const Contents = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  padding: 16px 0;
  border-top: 1px solid #443651;
  border-bottom: 1px solid #443651;
  a { color: #d7c5f4; text-decoration: none; min-height: 36px; display: inline-flex; align-items: center; }
  a:hover { text-decoration: underline; }
`;
const Section = styled.section`
  padding: 42px 0 8px;
  h2 { font-size: clamp(26px, 3vw, 32px); margin-bottom: 20px; }
  > p { color: ${({ theme }) => theme.text_secondary}; max-width: 900px; white-space: pre-line; }
`;
const Systems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  @media (max-width: 700px) { grid-template-columns: minmax(0, 1fr); }
`;
const System = styled.div`
  padding: 24px;
  border: 1px solid #393443;
  border-radius: 14px;
  background: ${({ theme }) => theme.card};
  h3 { font-size: 20px; margin-bottom: 14px; }
  p { color: ${({ theme }) => theme.text_secondary}; font-size: 14px; }
`;
const Flow = styled.figure`
  border-radius: 16px;
  border: 1px solid #694992;
  padding: 24px;
  margin-top: 24px;
  background: linear-gradient(115deg, #35234666, #23314b55);
  figcaption { font-size: 14px; color: #d7c5f4; margin-bottom: 18px; }
  ol { list-style: none; display: flex; flex-wrap: wrap; gap: 12px; }
  li { flex: 1 1 160px; display: flex; align-items: center; gap: 12px; font-size: 14px; }
  span { flex: 1; border-radius: 10px; background: #191924; border: 1px solid #665177; padding: 16px; line-height: 1.5; }
`;
const Note = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  margin-top: 16px;
`;
const End = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #443651;
`;

const labels = {
  en: { back: 'Back to projects', role: 'My role', status: 'Status', stack: 'Tools & technologies', overview: 'My contribution', systems: 'What I built', media: 'Images & footage', code: 'Inside the code', outcome: 'Project outcome', contents: 'On this page', unknown: 'Project not found', unknownText: 'This project address is unavailable. Explore the portfolio to find the project you are looking for.', play: 'Play / download', archive: 'Code highlight', archiveDesc: 'An implementation excerpt from this project.' },
  fr: { back: 'Retour aux projets', role: 'Mon rôle', status: 'Statut', stack: 'Outils et technologies', overview: 'Ma contribution', systems: 'Ce que j’ai développé', media: 'Images et vidéos', code: 'Dans le code', outcome: 'Bilan du projet', contents: 'Sur cette page', unknown: 'Projet introuvable', unknownText: 'Cette adresse de projet est indisponible. Parcourez le portfolio pour retrouver le projet recherché.', play: 'Jouer / télécharger', archive: 'Extrait de code', archiveDesc: 'Un extrait de l’implémentation de ce projet.' },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith('fr') ? 'fr' : 'en';
  const text = labels[language];
  const localized = value => typeof value === 'string' ? value : value?.[language] || value?.en || '';
  const project = projects.find(item => item.slug === slug);
  const study = caseStudies[slug];
  const from = location.state?.from;
  const returnTo = typeof from === 'string' && /^\/(?:\?|#|$)/.test(from) ? from : '/#projects';
  const title = project ? t(project.titleKey) : text.unknown;
  const description = project ? t(project.descriptionKey) : text.unknownText;

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content');
    document.title = `${title} | Mohaned Bouzaidi`;
    meta?.setAttribute('content', description);
    return () => {
      document.title = previousTitle;
      if (previousDescription != null) meta?.setAttribute('content', previousDescription);
    };
  }, [title, description]);

  if (!project) return <Page><Back to="/#projects"><FiArrowLeft />{text.back}</Back><Hero><div><h1 tabIndex={-1}>{text.unknown}</h1><Intro>{text.unknownText}</Intro></div></Hero></Page>;

  const media = study?.media?.length ? study.media : project.image ? [{ kind: 'image', src: project.image, alt: title, caption: title }] : [];
  const code = study?.code?.length ? study.code : project.proudCode ? [{ title: text.archive, description: project.proudCodeDescKey ? t(project.proudCodeDescKey) : text.archiveDesc, language: project.proudCodeLang || 'Code', code: project.proudCode }] : [];
  const website = project.slug === 'archiverif' ? `${project.website}/${language}` : project.website;

  return (
    <Page>
      <Back to={returnTo}><FiArrowLeft aria-hidden="true" />{text.back}</Back>
      <Hero>
        <div>
          <Eyebrow>{t(project.mainCategory)} · {t(project.portfolioMode === 'software' ? 'ModeSoftware' : 'Games')}</Eyebrow>
          <h1 tabIndex={-1}>{title}</h1>
          <Intro>{localized(study?.intro) || description}</Intro>
          <Actions>
            {project.playableUrl && <a href={project.playableUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink />{text.play}</a>}
            {website && <a href={website} target="_blank" rel="noopener noreferrer"><FiExternalLink />{t(project.websiteLabelKey || 'VisitWebsite')}</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><FiGithub />GitHub</a>}
          </Actions>
          {(study?.availability || project.availabilityKey) && <Note>{localized(study?.availability) || t(project.availabilityKey)}</Note>}
        </div>
        <Facts aria-label={text.status}>
          <dl>
            {study?.role && <><dt>{text.role}</dt><dd>{localized(study.role)}</dd></>}
            {project.statusKey && !!project.years?.length && <><dt>{t('ProjectYear')}</dt><dd>{project.years.join(', ')}</dd></>}
            <dt>{text.status}</dt><dd>{t(project.statusKey || project.dateKey)}</dd>
            <dt>{text.stack}</dt><dd><Tags>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</Tags></dd>
          </dl>
        </Facts>
      </Hero>
      <Contents aria-label={text.contents}>
        <Link to="#contribution" state={location.state}>{text.overview}</Link>
        {!!study?.systems?.length && <Link to="#systems" state={location.state}>{text.systems}</Link>}
        {!!media.length && <Link to="#media" state={location.state}>{text.media}</Link>}
        {!!code.length && <Link to="#code" state={location.state}>{text.code}</Link>}
        {study?.outcome && <Link to="#outcome" state={location.state}>{text.outcome}</Link>}
      </Contents>
      <Section id="contribution"><h2>{text.overview}</h2><p>{project.whatIDidKey ? t(project.whatIDidKey) : description}</p></Section>
      {!!study?.systems?.length && <Section id="systems">
        <h2>{text.systems}</h2>
        <Systems>{study.systems.map((system, index) => <System key={index}><h3>{localized(system.title)}</h3><p>{localized(system.body)}</p></System>)}</Systems>
        {study.flow && <Flow><figcaption>{localized(study.flow.title)}</figcaption><ol>{study.flow.steps.map((step, index) => <li key={index}><span>{localized(step)}</span>{index < study.flow.steps.length - 1 && <FiArrowRight aria-hidden="true" />}</li>)}</ol></Flow>}
      </Section>}
      {!!media.length && <Section id="media"><h2>{text.media}</h2><ProjectGallery items={media} language={language} /></Section>}
      {!!code.length && <Section id="code"><h2>{text.code}</h2><CodeHighlights items={code} language={language} /></Section>}
      {study?.outcome && <Section id="outcome"><h2>{text.outcome}</h2><p>{localized(study.outcome)}</p></Section>}
      <End><Back to={returnTo}><FiArrowLeft aria-hidden="true" />{text.back}</Back></End>
    </Page>
  );
}
