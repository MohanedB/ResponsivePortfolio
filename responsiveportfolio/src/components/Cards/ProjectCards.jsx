import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProjectMedia from '../Project/ProjectMedia';
import { Link, useLocation } from 'react-router-dom';

const Hint = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
  color: #d7c5f4;
  font-size: 13px;
  span { transition: transform 0.2s ease; }
`;
const Card = styled(Link)`
  text-decoration: none;
  width: 100%;
  min-width: 0;
  padding: 0;
  text-align: left;
  font: inherit;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  border: 1px solid #393443;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  &:focus-visible {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 24px #854ce622;
    ${Hint} { text-decoration: underline; text-underline-offset: 4px; }
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-4px);
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 10px 28px #854ce622;
      ${Hint} { text-decoration: underline; text-underline-offset: 4px; }
      ${Hint} span { transform: translateX(4px); }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    &, &:hover, ${Hint} span, &:hover ${Hint} span { transform: none; transition: none; }
  }
`;
const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
`;
const Category = styled.p`
  color: #c5acf0;
  font-size: 12px;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  span { font-size: 11px; color: #d7c5f4; background: #854ce622; padding: 4px 9px; border-radius: 8px; }
`;

export default function ProjectCards({ project }) {
  const { t } = useTranslation();
  const location = useLocation();
  const titleId = `project-card-title-${project.slug}`;
  return (
    <Card to={`/projects/${project.slug}`} state={{ from: `/${location.search}#projects` }} aria-label={t('OpenProject', { title: t(project.titleKey) })}>
      <ProjectMedia project={project} />
      <Details>
        <Category>{t(project.mainCategory)} · {t(project.statusKey || project.dateKey)}</Category>
        <Title id={titleId}>{t(project.titleKey)}</Title>
        <Description>{t(project.descriptionKey)}</Description>
        <Tags>{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</Tags>
        <Hint>{t('ViewProject')} <span aria-hidden="true">→</span></Hint>
      </Details>
    </Card>
  );
}
