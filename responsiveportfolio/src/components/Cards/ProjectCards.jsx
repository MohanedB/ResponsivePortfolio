import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProjectMedia from '../Project/ProjectMedia';
import { Link, useLocation } from 'react-router-dom';

const Card = styled.article`
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
  transition: border-color 0.2s ease;
  &:focus-within { border-color: ${({ theme }) => theme.primary}; }
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
const Action = styled.div`
  margin-top: auto;
  padding: 14px 18px 18px;
  border-top: 1px solid #393443;
`;
const MoreInformation = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid #9a6ade;
  border-radius: 9px;
  background: #593398;
  color: #f2edf9;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover { background: #7045b2; }
`;

export default function ProjectCards({ project }) {
  const { t } = useTranslation();
  const location = useLocation();
  const titleId = `project-card-title-${project.slug}`;
  return (
    <Card aria-labelledby={titleId}>
      <ProjectMedia project={project} />
      <Details>
        <Category>{t(project.mainCategory)} · {t(project.statusKey || project.dateKey)}</Category>
        <Title id={titleId}>{t(project.titleKey)}</Title>
        <Description>{t(project.descriptionKey)}</Description>
        <Tags>{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</Tags>
      </Details>
      <Action>
        <MoreInformation to={`/projects/${project.slug}`} state={{ from: `/${location.search}#projects` }} aria-label={t('OpenProject', { title: t(project.titleKey) })}>
          {t('ViewProject')} <span aria-hidden="true">→</span>
        </MoreInformation>
      </Action>
    </Card>
  );
}
