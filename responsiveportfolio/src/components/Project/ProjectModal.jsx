import React from 'react';
import Modal from '@mui/material/Modal';
import ProjectMedia from './ProjectMedia';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FiX, FiGithub, FiCode, FiExternalLink } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(48px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1); }
`;

const Overlay = styled(Modal)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: ${fadeIn} 0.2s ease;
`;

const Panel = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  max-width: 880px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideUp} 0.3s ease;
  border: 1px solid rgba(133, 76, 230, 0.3);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.65);
  position: relative;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #575C66; border-radius: 6px; }
`;

const CloseBtn = styled.button`
  position: sticky;
  top: 12px;
  float: right;
  margin: -228px 16px 0 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(20, 20, 30, 0.75);
  border: 1px solid rgba(133, 76, 230, 0.4);
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover { background: ${({ theme }) => theme.primary}; transform: scale(1.1); }
`;

const Body = styled.div`
  padding: 28px 36px 36px;
  @media (max-width: 600px) { padding: 20px 20px 28px; }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const TitleBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 6px;
  @media (max-width: 600px) { font-size: 22px; }
`;

const DateText = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 0 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + '18'};
  padding: 3px 10px;
  border-radius: 20px;
`;

const GithubBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: #d7c5f4;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.25s ease;
  align-self: flex-start;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(133, 76, 230, 0.45);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(133, 76, 230, 0.15);
  margin: 24px 0;
`;

const Section = styled.div`
  margin-bottom: 28px;
`;

const SectionTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionText = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  white-space: pre-wrap;
`;

const CodeBlock = styled.div`
  background: #0d0d14;
  border-radius: 12px;
  border: 1px solid rgba(133, 76, 230, 0.2);
  overflow: hidden;
  margin-top: 12px;
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: rgba(133, 76, 230, 0.1);
  border-bottom: 1px solid rgba(133, 76, 230, 0.15);
`;

const LangBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  font-family: 'Courier New', monospace;
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }
`;

const Code = styled.pre`
  margin: 0;
  padding: 20px;
  font-family: 'Courier New', Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.7;
  color: #e2e8f0;
  overflow-x: auto;
  white-space: pre;

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: #575C66; border-radius: 4px; }
`;

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  const titleId = `project-title-${project.id}`;

  return (
    <Overlay open onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <Panel role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
        <ProjectMedia project={project} large />
        <CloseBtn type="button" onClick={onClose} aria-label={t('CloseProject')}><FiX /></CloseBtn>

        <Body>
          <Header>
            <TitleBlock>
              <Title id={titleId}>{t(project.titleKey)}</Title>
              <DateText>{t(project.mainCategory)} · {t(project.statusKey || project.dateKey)}</DateText>
              <Tags>
                {project.tags?.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
              </Tags>
            </TitleBlock>

            {project.github && (
              <GithubBtn href={project.github} target="_blank" rel="noreferrer">
                <FiGithub size={16} /> GitHub
              </GithubBtn>
            )}
            {project.website && (
              <GithubBtn href={project.website} target="_blank" rel="noopener noreferrer">
                <FiExternalLink size={16} /> {t(project.websiteLabelKey || 'VisitWebsite')}
              </GithubBtn>
            )}
          </Header>

          <Divider />

          {/* About */}
          <Section>
            <SectionTitle>{t('AboutProject')}</SectionTitle>
            <SectionText>{t(project.descriptionKey)}</SectionText>
            {project.availabilityKey && <SectionText style={{ marginTop: 16 }}>{t(project.availabilityKey)}</SectionText>}
          </Section>

          {/* What I did */}
          {project.whatIDidKey && (
            <>
              <Divider />
              <Section>
                <SectionTitle>🛠 {t('WhatIDid')}</SectionTitle>
                <SectionText>{t(project.whatIDidKey)}</SectionText>
              </Section>
            </>
          )}

          {/* Proud code */}
          {project.proudCode && (
            <>
              <Divider />
              <Section>
                <SectionTitle><FiCode size={16} /> {t('ProudCode')}</SectionTitle>
                {project.proudCodeDescKey && (
                  <SectionText style={{ marginBottom: '12px' }}>
                    {t(project.proudCodeDescKey)}
                  </SectionText>
                )}
                <CodeBlock>
                  <CodeHeader>
                    <Dots>
                      <span /><span /><span />
                    </Dots>
                    <LangBadge>{project.proudCodeLang || 'Code'}</LangBadge>
                  </CodeHeader>
                  <Code>{project.proudCode}</Code>
                </CodeBlock>
              </Section>
            </>
          )}
        </Body>
      </Panel>
    </Overlay>
  );
};

export default ProjectModal;
