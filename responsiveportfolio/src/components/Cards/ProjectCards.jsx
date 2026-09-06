import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProjectMedia from '../Project/ProjectMedia';
import { Link, useLocation } from 'react-router-dom';

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
  transition: transform 0.2s ease, border-color 0.2s ease;
  &:hover { transform: translateY(-5px); border-color: ${({ theme }) => theme.primary}; }
`;
const Details = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 22px;
`;
const Category = styled.span`
  color: #c5acf0;
  font-size: 12px;
`;
const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;
`;
const Description = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Tags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  span { font-size: 11px; color: #d7c5f4; background: #854ce622; padding: 4px 9px; border-radius: 8px; }
`;
const Hint = styled.span`
  margin-top: auto;
  padding-top: 8px;
  font-size: 13px;
  color: #d7c5f4;
`;

export default function ProjectCards({ project }) {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Card to={`/projects/${project.slug}`} state={{ from: `/${location.search}#projects` }} aria-label={t('OpenProject', { title: t(project.titleKey) })}>
      <ProjectMedia project={project} />
      <Details>
        <Category>{t(project.mainCategory)} · {t(project.statusKey || project.dateKey)}</Category>
        <Title>{t(project.titleKey)}</Title>
        <Description>{t(project.descriptionKey)}</Description>
        <Tags>{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</Tags>
        <Hint>{t('ViewProject')} <span aria-hidden="true">→</span></Hint>
      </Details>
    </Card>
  );
}
