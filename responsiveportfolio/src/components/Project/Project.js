import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/const';

const engineLabels = { unity: 'Unity', unreal: 'Unreal Engine' };
const languageLabels = {
  blueprints: 'Blueprints', cpp: 'C++', csharp: 'C#', java: 'Java',
  javascript: 'JavaScript', python: 'Python', swift: 'Swift', typescript: 'TypeScript',
};
const engineOptions = Object.entries(engineLabels).filter(([value]) => projects.some(project => project.engines?.includes(value)));
const languageOptions = Object.entries(languageLabels).filter(([value]) => projects.some(project => project.languages?.includes(value)));
const yearOptions = [...new Set(projects.flatMap(project => project.years || []))].sort((a, b) => Number(b) - Number(a));
if (projects.some(project => !project.years?.length)) yearOptions.push('unspecified');
const filterKeys = ['type', 'context', 'engine', 'year', 'language', 'q'];

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
  margin: 24px 0 12px;
`;
const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: end;
  gap: 16px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 620px) { grid-template-columns: minmax(0, 1fr); }
`;
const Field = styled.label`
  min-width: 0;
  display: grid;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  input, select {
    width: 100%;
    min-width: 0;
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
const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0;
`;
const Results = styled.p`
  color: ${({ theme }) => theme.text_secondary};
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
  const [params, setParams] = useSearchParams();
  const discipline = ['gamedev', 'software'].includes(params.get('type')) ? params.get('type') : 'all';
  const context = ['University', 'Cegep', 'Independent'].includes(params.get('context')) ? params.get('context') : 'all';
  const engine = engineOptions.some(([value]) => value === params.get('engine')) ? params.get('engine') : 'all';
  const language = languageOptions.some(([value]) => value === params.get('language')) ? params.get('language') : 'all';
  const year = yearOptions.includes(params.get('year')) ? params.get('year') : 'all';
  const searchTerm = params.get('q') || '';
  const updateFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };
  const query = normalize(searchTerm);
  const filteredProjects = projects.filter(project => {
    if (discipline !== 'all' && project.portfolioMode !== discipline && project.portfolioMode !== 'both') return false;
    if (context !== 'all' && project.mainCategory !== context) return false;
    if (engine !== 'all' && !project.engines?.includes(engine)) return false;
    if (language !== 'all' && !project.languages?.includes(language)) return false;
    if (year === 'unspecified' && project.years?.length) return false;
    if (year !== 'all' && year !== 'unspecified' && !project.years?.includes(year)) return false;
    const searchText = [
      t(project.titleKey), t(project.descriptionKey), ...(project.tags || []), ...(project.searchTerms || []),
      ...(project.engines || []).map(value => engineLabels[value]),
      ...(project.languages || []).map(value => languageLabels[value]), ...(project.years || []),
    ].join(' ');
    return normalize(searchText).includes(query);
  });
  const reset = () => {
    const next = new URLSearchParams(params);
    filterKeys.forEach(key => next.delete(key));
    setParams(next, { replace: true });
  };

  return (
    <>
      <Container id="projects" aria-labelledby="projects-title">
        <Wrapper>
          <Title id="projects-title" tabIndex={-1}>{t('Projects')}</Title>
          <Desc>{t('ProjectDesc')}</Desc>
          <Filters role="group" aria-label={t('ProjectType')}>
            {[['all', 'AllProjects'], ['gamedev', 'Games'], ['software', 'ModeSoftware']].map(([value, label]) => (
              <FilterButton key={value} type="button" $active={discipline === value} aria-pressed={discipline === value} onClick={() => updateFilter('type', value)}>{t(label)}</FilterButton>
            ))}
          </Filters>
          <SearchRow>
            <Field>{t('SearchProjects')}
              <input type="search" placeholder={t('SearchByTag')} value={searchTerm} onChange={event => updateFilter('q', event.target.value)} />
            </Field>
          </SearchRow>
          <FilterGrid>
            <Field>{t('ProjectContext')}
              <select value={context} onChange={event => updateFilter('context', event.target.value)}>
                {[['all', 'AllContexts'], ['University', 'University'], ['Cegep', 'Cegep'], ['Independent', 'Independent']].map(([value, label]) => <option key={value} value={value}>{t(label)}</option>)}
              </select>
            </Field>
            <Field>{t('GameEngine')}
              <select value={engine} onChange={event => updateFilter('engine', event.target.value)}>
                <option value="all">{t('AllEngines')}</option>
                {engineOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </Field>
            <Field>{t('ProjectYear')}
              <select value={year} onChange={event => updateFilter('year', event.target.value)}>
                <option value="all">{t('AllYears')}</option>
                {yearOptions.map(value => <option key={value} value={value}>{value === 'unspecified' ? t('YearUnspecified') : value}</option>)}
              </select>
            </Field>
            <Field>{t('ProgrammingLanguage')}
              <select value={language} onChange={event => updateFilter('language', event.target.value)}>
                <option value="all">{t('AllProgrammingLanguages')}</option>
                {languageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </Field>
          </FilterGrid>
          <ResultRow>
            <Results role="status">{t('ProjectCount', { count: filteredProjects.length })}</Results>
            {filterKeys.some(key => params.has(key)) && <FilterButton type="button" onClick={reset}>{t('ClearFilters')}</FilterButton>}
          </ResultRow>
          <Grid>{filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}</Grid>
          {filteredProjects.length === 0 && <Empty><p>{t('NoProjectsFound')}</p><FilterButton type="button" onClick={reset}>{t('ShowAllProjects')}</FilterButton></Empty>}
        </Wrapper>
      </Container>
    </>
  );
};

export default Projects;
