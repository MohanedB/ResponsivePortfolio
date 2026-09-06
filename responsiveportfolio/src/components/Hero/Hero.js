import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import HeroImg from '../../Image/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

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
export const HeroContainer = styled.section`
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
  pointer-events: none;
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
  gap: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  min-width: 0;
  order: 1;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  animation: ${fadeInRight} 0.9s ease 0.2s both;
  @media (max-width: 960px) {
    order: 2;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
  @media (max-width: 640px) {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
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
    max-width: 220px;
    max-height: 220px;
  }
`;

export const Title = styled.h1`
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
  flex-wrap: wrap;
  gap: 0 10px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  margin: 12px 0 20px;
  min-height: 96px;
  animation: ${fadeInLeft} 0.8s ease 0.18s both;
  @media (max-width: 960px) { text-align: center; justify-content: center; min-height: 48px; }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 1.5;
    min-height: 66px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  min-width: 0;
  overflow-wrap: anywhere;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};
  animation: ${fadeInLeft} 0.8s ease 0.36s both;
  @media (max-width: 960px) { text-align: center; }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-height: 48px;
  text-align: center;
  padding: 14px 26px;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 0 8px 24px rgba(133, 76, 230, 0.2);
  animation: ${fadeInLeft} 0.8s ease 0.54s both;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 0 28px rgba(133, 76, 230, 0.65);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 640px) {
    padding: 12px 22px;
    font-size: 18px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  @media (max-width: 960px) { justify-content: center; }
`;

const ResumeLink = styled(ResumeButton)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: none;
`;

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isFrench = (i18n.resolvedLanguage || i18n.language || 'en').startsWith('fr');
  const [reduceMotion, setReduceMotion] = React.useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  );

  React.useEffect(() => {
    const preference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!preference) return undefined;
    const updatePreference = () => setReduceMotion(preference.matches);
    if (preference.addEventListener) {
      preference.addEventListener('change', updatePreference);
      return () => preference.removeEventListener('change', updatePreference);
    }
    preference.addListener(updatePreference);
    return () => preference.removeListener(updatePreference);
  }, []);

  const roles = t('roles_unified', {
    returnObjects: true,
    defaultValue: isFrench
      ? ['Développeur de jeux', 'Développeur full-stack']
      : ['Game Developer', 'Full-Stack Developer'],
  });
  const description = t('description_unified', {
    defaultValue: isFrench
      ? "Étudiant en création de jeux vidéo à l'UQAT, je développe des jeux et des logiciels avec Unity, Unreal Engine et les technologies web. Découvrez mes prototypes, mes jeux universitaires et mes projets de développement logiciel."
      : 'A game development student at UQAT, I build games and software with Unity, Unreal Engine and web technologies. Explore my prototypes, university games and software projects.',
  });

  return (
      <HeroContainer id="about" aria-labelledby="intro-title">
        <HeroBg aria-hidden="true">
          {!reduceMotion && <HeroAnimation />}
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id='Left'>
            <Title id="intro-title">{t('greeting')} <br /> {t('name')}</Title>
            <TextLoop>
              {t('IAM')}
              <Span aria-hidden={!reduceMotion}>
                {reduceMotion ? roles.join(' / ') : (
                  <Typewriter
                    key={isFrench ? 'fr' : 'en'}
                    options={{ strings: roles, autoStart: true, loop: true }}
                  />
                )}
              </Span>
              {!reduceMotion && <span className="sr-only">{roles.join(' / ')}</span>}
            </TextLoop>
            <SubTitle>{description}</SubTitle>
            <Actions>
              <ResumeButton href="#projects">
                {t('ViewProjects', { defaultValue: isFrench ? 'Voir les projets' : 'View projects' })}
              </ResumeButton>
              <ResumeLink href={t('resume')} target="_blank" rel="noopener noreferrer">{t('resumer')}</ResumeLink>
            </Actions>
          </HeroLeftContainer>
          <HeroRightContainer id='Right'>
            <Img src={HeroImg} alt="Mohaned Bouzaidi" width="400" height="400" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
  );
};

export default Hero;
