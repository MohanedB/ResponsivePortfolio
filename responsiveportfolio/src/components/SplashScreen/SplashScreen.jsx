import React from 'react';
import styled, { keyframes } from 'styled-components';
import { usePortfolio } from '../../context/PortfolioContext';
import { useTranslation } from 'react-i18next';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 12px;
  animation: ${fadeIn} 0.5s ease forwards;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 48px;
  animation: ${fadeIn} 0.5s ease 0.1s both;

  @media (max-width: 640px) {
    font-size: 15px;
    margin-bottom: 32px;
  }
`;

const CardsRow = styled.div`
  display: flex;
  gap: 32px;
  animation: ${fadeIn} 0.5s ease 0.2s both;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Card = styled.button`
  width: 260px;
  background: ${({ theme }) => theme.card};
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-6px);
    box-shadow: rgba(133, 76, 230, 0.3) 0px 8px 32px;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 320px;
    padding: 28px 20px;
    flex-direction: row;
    gap: 20px;
  }
`;

const CardIcon = styled.div`
  font-size: 56px;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

const CardLabel = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

  @media (max-width: 640px) {
    font-size: 18px;
    text-align: left;
  }
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  line-height: 1.5;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

const SplashScreen = () => {
  const { selectMode } = usePortfolio();
  const { t } = useTranslation();

  return (
    <Overlay>
      <Title>{t('SplashTitle')}</Title>
      <Subtitle>{t('SplashSubtitle')}</Subtitle>
      <CardsRow>
        <Card onClick={() => selectMode('gamedev')}>
          <CardIcon>🎮</CardIcon>
          <div>
            <CardLabel>{t('SplashGameDevLabel')}</CardLabel>
            <CardDesc>{t('SplashGameDevDesc')}</CardDesc>
          </div>
        </Card>
        <Card onClick={() => selectMode('software')}>
          <CardIcon>💻</CardIcon>
          <div>
            <CardLabel>{t('SplashSoftwareLabel')}</CardLabel>
            <CardDesc>{t('SplashSoftwareDesc')}</CardDesc>
          </div>
        </Card>
      </CardsRow>
    </Overlay>
  );
};

export default SplashScreen;
