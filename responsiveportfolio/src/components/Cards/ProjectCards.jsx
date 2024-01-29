import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

const HoverDescription = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.white}; // Change this line
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
    overflow: hidden; // Add this line
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
                transform: translateY(0%); // Change this line
                opacity: 1;
            }
        `}
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3; // Change this line
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({ project, setOpenModal }) => {
    const { t, i18n } = useTranslation();
    const [hovered, setHovered] = useState(false);
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    return (
        <Card onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
        <HoverDescription show={hovered}>{t(project.descriptionKey)}</HoverDescription>
      </Card>
    );
  };

export default ProjectCards