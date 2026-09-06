import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../Cards/ProjectCards';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/const';

const Container = styled.section`
  padding: 64px 20px 80px;
  background: linear-gradient(343deg, rgba(132, 59, 206, 0.08), transparent 65%);
`;
const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: clamp(32px, 5vw, 42px);
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;
const Desc = styled.p`
  max-width: 660px;
  margin: 12px auto 28px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  line-height: 1.7;
`;
const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;
const FilterButton = styled.button`
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 24px;
  border: 1px solid ${({ $active, theme }) => $active ? theme.primary : '#454253'};
  background: ${({ $active }) => $active ? '#593398' : 'transparent'};
  color: ${({ theme }) => theme.text_primary};
  font: inherit;
  cursor: pointer;
  &:hover { border-color: ${({ theme }) => theme.primary}; }
`;
const SearchRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
  margin: 24px 0 12px;
`;
const Field = styled.label`
  flex: ${({ $search }) => $search ? '2 1 280px' : '1 1 180px'};
  display: grid;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  input, select {
    width: 100%;
    min-height: 48px;
    padding: 12px 14px;
    border: 1px solid #555064;
    border-radius: 10px;
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    font: inherit;
  }
  input::placeholder { color: #a9a6b2; }
`;
const Results = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px 0;
  font-size: 14px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  @media (max-width: 960px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 620px) { grid-template-columns: minmax(0, 1fr); }
`;
const Empty = styled.div`
  padding: 40px 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  p { margin-bottom: 20px; }
`;

const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [discipline, setDiscipline] = useState('all');
  const [context, setContext] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const query = normalize(searchTerm);
  const filteredProjects = projects.filter(project => {
    if (discipline !== 'all' && project.portfolioMode !== discipline && project.portfolioMode !== 'both') return false;
    if (context !== 'all' && project.mainCategory !== context) return false;
    const searchText = [t(project.titleKey), t(project.descriptionKey), ...(project.tags || []), ...(project.searchTerms || [])].join(' ');
    return normalize(searchText).includes(query);
  });
  const reset = () => { setDiscipline('all'); setContext('all'); setSearchTerm(''); };

  return (
    <>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <Container id="projects" aria-labelledby="projects-title">
        <Wrapper>
          <Title id="projects-title">{t('Projects')}</Title>
          <Desc>{t('ProjectDesc')}</Desc>
          <Filters role="group" aria-label={t('ProjectType')}>
            {[['all', 'AllProjects'], ['gamedev', 'Games'], ['software', 'ModeSoftware']].map(([value, label]) => (
              <FilterButton key={value} type="button" $active={discipline === value} aria-pressed={discipline === value} onClick={() => setDiscipline(value)}>{t(label)}</FilterButton>
            ))}
          </Filters>
          <SearchRow>
            <Field $search>{t('SearchProjects')}
              <input type="search" placeholder={t('SearchByTag')} value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            </Field>
            <Field>{t('ProjectContext')}
              <select value={context} onChange={event => setContext(event.target.value)}>
                {[['all', 'AllContexts'], ['University', 'University'], ['Cegep', 'Cegep'], ['Independent', 'Independent']].map(([value, label]) => <option key={value} value={value}>{t(label)}</option>)}
              </select>
            </Field>
            {(discipline !== 'all' || context !== 'all' || searchTerm) && <FilterButton type="button" onClick={reset}>{t('ClearFilters')}</FilterButton>}
          </SearchRow>
          <Results role="status">{t('ProjectCount', { count: filteredProjects.length })}</Results>
          <Grid>{filteredProjects.map(project => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</Grid>
          {filteredProjects.length === 0 && <Empty><p>{t('NoProjectsFound')}</p><FilterButton type="button" onClick={reset}>{t('ShowAllProjects')}</FilterButton></Empty>}
        </Wrapper>
      </Container>
    </>
  );
};

export default Projects;
