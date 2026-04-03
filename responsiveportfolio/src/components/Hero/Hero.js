import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const floatGlow = keyframes`
  0%, 100% {
    transform: translateY(0px);
    filter: drop-shadow(0 0 8px rgba(133, 76, 230, 0.45));
  }
  50% {
    transform: translateY(-18px);
    filter: drop-shadow(0 0 28px rgba(133, 76, 230, 0.9));
  }
`;
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import HeroImg from '../../Image/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/const';
import { useTranslation } from 'react-i18next';
import { usePortfolio } from '../../context/PortfolioContext';
export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  animation: ${fadeInRight} 0.9s ease 0.2s both;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  animation: ${floatGlow} 5s ease-in-out infinite;
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  animation: ${fadeInLeft} 0.8s ease forwards;
  @media (max-width: 960px) { text-align: center; }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  animation: ${fadeInLeft} 0.8s ease 0.18s both;
  @media (max-width: 960px) { text-align: center; }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  animation: ${fadeInLeft} 0.8s ease 0.36s both;
  @media (max-width: 960px) { text-align: center; }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
  animation: ${fadeInLeft} 0.8s ease 0.54s both;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 0 28px rgba(133, 76, 230, 0.65);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const { mode } = usePortfolio();

  // Pick translation keys based on mode
  const rolesKey   = mode === 'gamedev' ? 'roles_gamedev'   : 'roles_software';
  const descKey    = mode === 'gamedev' ? 'description_gamedev' : 'description_software';

  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id='Left'>
            <Title>{t('greeting')} <br /> {t('name')}</Title>
            <TextLoop>
              {t('IAM')}
              <Span>
                <Typewriter
                  options={{
                    strings: [...t(rolesKey, { returnObjects: true })],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{t(descKey)}</SubTitle>
            <ResumeButton href={t('resume')} target='display'>{t('resumer')}</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id='Right'>
            <Img src={HeroImg} alt='hero-image' />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;