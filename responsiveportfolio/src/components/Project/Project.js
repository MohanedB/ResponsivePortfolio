import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/const'
import { useTranslation } from 'react-i18next';

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
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const StyledParagraph = styled.p`
    color: white; 
    font-size: 1rem; 
`;

const Projects = () => {
    const [openModal, setOpenModal] = useState(false);
    const [mainCategory, setMainCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>{t('ProjectDesc')}</Desc>

                {/* STEP 1: Cegep/University Selection */}
                {!mainCategory ? (
                    <ToggleButtonGroup>
                        <ToggleButton active={mainCategory === 'Cegep'} onClick={() => setMainCategory('Cegep')}>
                            {t('Cegep')}
                        </ToggleButton>
                        <ToggleButton active={mainCategory === 'University'} onClick={() => setMainCategory('University')}>
                            {t('University')}
                        </ToggleButton>
                    </ToggleButtonGroup>
                ) : (
                    <>
                        {/* STEP 2: Year Selection (Only appears after Cegep/University is selected) */}
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
                            <ToggleButton onClick={() => setMainCategory(null)}>🔙 {t('Back')}</ToggleButton>
                        </ToggleButtonGroup>

                        {/* STEP 3: Show Projects Based on Selection */}
                        <CardContainer>
                            {projects
                                .filter((project) => project.mainCategory === mainCategory && (subCategory === 'all' || project.subCategory === subCategory))
                                .map((project) => (
                                    <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} github={project.github} />
                                ))}
                        </CardContainer>
                    </>
                )}
            </Wrapper>
        </Container>
    );
};

export default Projects;
