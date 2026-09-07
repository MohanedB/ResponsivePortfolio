import React from 'react';
import styled from 'styled-components';
import { skillsByMode } from '../../data/const';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';
import SkillIcon from './SkillIcon';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  &.visible { opacity: 1; transform: translateY(0); }
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: 0.15s;
  &.visible { opacity: 1; transform: translateY(0); }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;

  & > div {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  &.visible > div { opacity: 1; transform: translateY(0); }
  &.visible > div:nth-child(1) { transition-delay: 0.1s; }
  &.visible > div:nth-child(2) { transition-delay: 0.22s; }
  &.visible > div:nth-child(3) { transition-delay: 0.34s; }
  &.visible > div:nth-child(4) { transition-delay: 0.46s; }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 0 14px rgba(133, 76, 230, 0.4);
    background: rgba(133, 76, 230, 0.07);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Skills = () => {
  const { t } = useTranslation();
  const [containerRef, containerVisible] = useScrollReveal();

  const activeSkills = [...skillsByMode.gamedev, ...skillsByMode.software];

  return (
    <Container ref={containerRef} id='skills'>
      <Wrapper>
        <Title as="h2" className={containerVisible ? 'visible' : ''}>{t('Skill')}</Title>
        <Desc className={containerVisible ? 'visible' : ''}>{t('skilldesc')}</Desc>
        <SkillsContainer className={containerVisible ? 'visible' : ''}>
          {activeSkills.map((skillGroup, idx) => (
            <Skill key={idx}>
              <SkillTitle>{t(skillGroup.titleKey)}</SkillTitle>
              <SkillList>
                {skillGroup.skills.map((item, i) => (
                  <SkillItem key={i}>
                    <SkillIcon name={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
