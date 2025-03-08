import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const HoverDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.white};
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const Card = styled.div`
  position: relative;
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
    ${({ theme }) => `
      ${HoverDescription} {
        transform: translateY(0%);
        opacity: 1;
      }
    `}
  }
  &:active {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const DoubleTapHint = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 100;
`;

const ProjectCards = ({ project, setOpenModal }) => {
  const { t } = useTranslation();
  const tapTimeout = useRef(null);
  const [showHint, setShowHint] = useState(false);
  const delay = 300; // délai en ms pour distinguer un double click/tap

  // Détection de mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Pour mobile : on utilise la logique de double tap
  const handleMobileTap = (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    // Si le délai entre deux taps est inférieur au délai défini, c'est un double tap
    if (tapTimeout.current) {
      clearTimeout(tapTimeout.current);
      tapTimeout.current = null;
      // Action double sur mobile : ouvrir build du jeu ou GitHub en fallback
      if (project.buildGameUrl) {
        window.open(project.buildGameUrl, '_blank');
      } else {
        window.open(project.github, '_blank');
      }
    } else {
      // Premier tap : on affiche un indice puis on attend
      tapTimeout.current = setTimeout(() => {
        // Ne fait rien quand le timer expire (ou vous pouvez choisir une action)
        tapTimeout.current = null;
      }, delay);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 2000);
    }
  };

  // Pour PC : on utilise onClick et onDoubleClick
  const pcClickTimeout = useRef(null);
  const handlePCClick = (e) => {
    // Lancer l'action clic unique après un léger délai, afin de voir si un double click arrive
    pcClickTimeout.current = setTimeout(() => {
      window.open(project.github, '_blank');
      pcClickTimeout.current = null;
    }, 250);
  };

  const handlePCDoubleClick = (e) => {
    // Annuler le clic unique et lancer l'action double
    if (pcClickTimeout.current) {
      clearTimeout(pcClickTimeout.current);
      pcClickTimeout.current = null;
    }
    window.open(project.buildGameUrl ? project.buildGameUrl : project.github, '_blank');
  };

  return (
    <Card
      // Si mobile, on utilise le gestionnaire unifié
      // Sinon, on attache onClick et onDoubleClick pour PC
      onClick={isMobile ? handleMobileTap : handlePCClick}
      onDoubleClick={!isMobile ? handlePCDoubleClick : undefined}
    >
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{t(project.titleKey)}</Title>
        <Date>{t(project.dateKey)}</Date>
        <Description>{t(project.descriptionKey)}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar key={member.id} src={member.img} />
        ))}
      </Members>
      <HoverDescription>{t(project.descriptionKey)}</HoverDescription>
      {isMobile && <DoubleTapHint show={showHint}>Double tap to open</DoubleTapHint>}
    </Card>
  );
};

export default ProjectCards;
