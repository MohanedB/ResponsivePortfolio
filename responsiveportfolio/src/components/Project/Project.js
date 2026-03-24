import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/const';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '../../context/PortfolioContext';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `background: ${theme.primary + 20};`
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 10px 0;
`;

const SearchInput = styled.input`
    width: 60%;
    max-width: 500px;
    padding: 12px 20px;
    border-radius: 20px;
    border: 1px solid #6c5ce7;
    background-color: rgba(108, 92, 231, 0.1);
    color: white;
    font-size: 16px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.5);
    }
`;

const SearchHint = styled.div`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 6px;
    text-align: center;
    max-width: 500px;
`;

const NoResultsMessage = styled.div`
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
`;

const Projects = () => {
    const [openModal, setOpenModal] = useState(false);
    const [mainCategory, setMainCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useTranslation();
    const { mode } = usePortfolio();

    const getAllUniqueTags = () => {
        const allTags = [];
        projects.forEach(project => {
            if (project.tags && Array.isArray(project.tags)) {
                project.tags.forEach(tag => {
                    if (!allTags.includes(tag)) allTags.push(tag);
                });
            }
        });
        const sampleTags = [];
        const tagCount = Math.min(5, allTags.length);
        for (let i = 0; i < tagCount; i++) {
            const randomIndex = Math.floor(Math.random() * allTags.length);
            if (!sampleTags.includes(allTags[randomIndex])) {
                sampleTags.push(allTags[randomIndex]);
                allTags.splice(randomIndex, 1);
            } else {
                i--;
            }
        }
        return sampleTags;
    };

    const sampleTags = getAllUniqueTags();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProjects = projects.filter(project => {
        // Mode filter: show project only if it matches current mode or is tagged 'both'
        if (mode && project.portfolioMode !== 'both' && project.portfolioMode !== mode) {
            return false;
        }

        if (!searchTerm.trim()) {
            if (!mainCategory) return true;
            return project.mainCategory === mainCategory &&
                (subCategory === 'all' || !subCategory || project.subCategory === subCategory);
        }

        const searchLower = searchTerm.toLowerCase();
        const nameMatch = project.titleKey.toLowerCase().includes(searchLower);
        const tagMatch = project.tags?.some(tag => tag.toLowerCase().includes(searchLower));

        if (nameMatch || tagMatch) {
            if (!mainCategory) return true;
            return project.mainCategory === mainCategory &&
                (subCategory === 'all' || !subCategory || project.subCategory === subCategory);
        }

        return false;
    });

    return (
        <Container id="projects">
            <Wrapper>
                <Title>{t('Projects')}</Title>
                <Desc>{t('ProjectDesc')}</Desc>

                <SearchContainer>
                    <SearchInput
                        type="text"
                        placeholder={t('SearchByTag') || "Search by technology or project name"}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <SearchHint>
                        {t('SearchHint') || `Try: ${sampleTags.join(', ')}`}
                    </SearchHint>
                </SearchContainer>

                {!mainCategory ? (
                    <>
                        <ToggleButtonGroup>
                            <ToggleButton active={mainCategory === 'Cegep'} onClick={() => setMainCategory('Cegep')}>
                                {t('Cegep')}
                            </ToggleButton>
                            <ToggleButton active={mainCategory === 'University'} onClick={() => setMainCategory('University')}>
                                {t('University')}
                            </ToggleButton>
                        </ToggleButtonGroup>

                        {searchTerm.trim() !== '' && (
                            <>
                                <CardContainer>
                                    {filteredProjects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            openModal={openModal}
                                            setOpenModal={setOpenModal}
                                            github={project.github}
                                        />
                                    ))}
                                </CardContainer>
                                {filteredProjects.length === 0 && (
                                    <NoResultsMessage>{t('NoProjectsFound')}</NoResultsMessage>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <p style={{ color: 'white', marginBottom: '8px' }}>*Double click to go to github</p>
                        <ToggleButtonGroup>
                            <ToggleButton active={subCategory === 'all'} onClick={() => setSubCategory('all')}>
                                {t('All')}
                            </ToggleButton>
                            <ToggleButton active={subCategory === 'YEAR3'} onClick={() => setSubCategory('YEAR3')}>
                                {t('ThirdYear')}
                            </ToggleButton>
                            <ToggleButton active={subCategory === 'YEAR2'} onClick={() => setSubCategory('YEAR2')}>
                                {t('SecondYear')}
                            </ToggleButton>
                            <ToggleButton active={subCategory === 'YEAR1'} onClick={() => setSubCategory('YEAR1')}>
                                {t('FirstYear')}
                            </ToggleButton>
                            <ToggleButton onClick={() => { setMainCategory(null); setSubCategory(null); }}>
                                🔙 {t('Back')}
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <CardContainer>
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    openModal={openModal}
                                    setOpenModal={setOpenModal}
                                    github={project.github}
                                />
                            ))}
                        </CardContainer>
                        {filteredProjects.length === 0 && (
                            <NoResultsMessage>{t('NoProjectsFound')}</NoResultsMessage>
                        )}
                    </>
                )}
            </Wrapper>
        </Container>
    );
};

export default Projects;