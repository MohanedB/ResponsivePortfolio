import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Image = styled.img`
  display: block;
  width: 100%;
  height: ${({ $large }) => $large ? '240px' : '160px'};
  object-fit: cover;
  background: #242033;
`;
const Cover = styled.span`
  width: 100%;
  height: ${({ $large }) => $large ? '240px' : '160px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px;
  text-align: center;
  color: #f2edf9;
  background: ${({ $software }) => $software ? 'linear-gradient(140deg, #18273a, #354766)' : 'linear-gradient(140deg, #302345, #65428a)'};
  strong { font-size: 24px; line-height: 1.25; }
  small { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
`;

export default function ProjectMedia({ project, large = false }) {
  const [failed, setFailed] = useState(false);
  const { t } = useTranslation();
  if (project.image && !failed) return <Image src={project.image} alt={t(project.titleKey)} loading={large ? 'eager' : 'lazy'} $large={large} onError={() => setFailed(true)} />;
  return <Cover $large={large} $software={project.portfolioMode === 'software'} aria-hidden="true"><small>{t(project.portfolioMode === 'software' ? 'ModeSoftware' : 'Games')}</small><strong>{t(project.titleKey)}</strong></Cover>;
}
