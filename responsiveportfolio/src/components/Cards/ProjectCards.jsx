import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import React from 'react';

const shimmer = keyframes`
  0%   { transform: translateX(-150%) skewX(-15deg); }
  100% { transform: translateX(250%)  skewX(-15deg); }
`;

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
  transition: all 0.4s ease-in-out;
  position: relative;
  border: 1px solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -120%;
    width: 55%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.045),
      transparent
    );
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6), 0 0 24px rgba(133, 76, 230, 0.3);
    filter: brightness(1.1);
    border-color: rgba(133, 76, 230, 0.35);
  }

  &:hover::before {
    animation: ${shimmer} 0.75s ease forwards;
  }

  &:hover ${HoverDescription} {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
  object-fit: cover;
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
  @media only screen and (max-width: 768px){ font-size: 10px; }
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

const ClickHint = styled.div`
  position: absolute;
  bottom: 10px;
  right: 14px;
  font-size: 11px;
  color: ${({ theme }) => theme.primary};
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${Card}:hover & {
    opacity: 0.75;
  }
`;

const ProjectCards = ({ project, onOpen }) => {
  const { t } = useTranslation();

  return (
    <Card onClick={() => onOpen(project)}>
      <Image src={project.image} alt={t(project.titleKey)} />
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
      <ClickHint>Click to view details →</ClickHint>
    </Card>
  );
};

export default ProjectCards;
