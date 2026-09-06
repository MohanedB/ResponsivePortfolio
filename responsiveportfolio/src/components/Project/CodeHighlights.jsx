import React from 'react';
import styled from 'styled-components';

const labels = {
  en: { viewCode: 'View code excerpt', source: 'Source', revision: 'Revision', excerpt: 'Code excerpt' },
  fr: { viewCode: 'Voir le code', source: 'Source', revision: 'Révision', excerpt: 'Extrait de code' },
};
const localize = (value, language) => typeof value === 'string' ? value : value?.[language] || value?.en || '';

const List = styled.div`
  display: grid;
  gap: 24px;
  min-width: 0;
`;
const Highlight = styled.article`
  padding: 24px;
  border: 1px solid rgba(133, 76, 230, 0.3);
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  min-width: 0;
  @media (max-width: 600px) { padding: 18px; }
`;
const Title = styled.h3`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  line-height: 1.4;
  overflow-wrap: anywhere;
`;
const Description = styled.p`
  margin: 0 0 16px;
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  overflow-wrap: anywhere;
`;
const Source = styled.p`
  margin: 0 0 18px;
  font-size: 12px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  overflow-wrap: anywhere;
  a { color: #d8c2ff; text-underline-offset: 3px; }
  code { font-family: Consolas, 'Courier New', monospace; }
`;
const Details = styled.details`
  min-width: 0;
  border: 1px solid rgba(133, 76, 230, 0.35);
  border-radius: 10px;
  background: #101019;
  color: #f2edf9;
  summary {
    padding: 15px 16px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }
  summary::marker { color: #c6a4ff; }
  summary:focus-visible { outline: 3px solid #d5baff; outline-offset: 3px; border-radius: 10px; }
  &[open] summary { border-bottom: 1px solid rgba(133, 76, 230, 0.3); }
`;
const Language = styled.span`
  display: inline-block;
  margin-left: 12px;
  color: #c6a4ff;
  font-size: 12px;
  font-family: Consolas, 'Courier New', monospace;
`;
const Code = styled.pre`
  box-sizing: border-box;
  max-width: 100%;
  min-width: 0;
  overflow-x: auto;
  margin: 0;
  padding: 20px;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.75;
  white-space: pre;
  tab-size: 2;
  &::-webkit-scrollbar { height: 8px; }
  &:focus-visible { outline: 3px solid #d5baff; outline-offset: -3px; }
  code { font: inherit; }
`;

export default function CodeHighlights({ items = [], language = 'en' }) {
  const locale = language.startsWith('fr') ? 'fr' : 'en';
  const text = labels[locale];
  if (!items.length) return null;
  return <List>
    {items.map((item, index) => {
      const title = localize(item.title, locale);
      const description = localize(item.description, locale);
      return <Highlight key={`${item.source?.file || title}-${index}`}>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {item.source && <Source>
          {text.source}: {' '}
          {item.source.url
            ? <a href={item.source.url} target="_blank" rel="noopener noreferrer"><code>{item.source.file}</code></a>
            : <code>{item.source.file}</code>}
          {item.source.revision && <> · {text.revision}: <code title={item.source.revision}>{item.source.revision.slice(0, 7)}</code></>}
        </Source>}
        <Details>
          <summary>{text.viewCode}<Language>{item.language}</Language></summary>
          <Code tabIndex={0} role="region" aria-label={`${text.excerpt}: ${title}`}><code className={`language-${item.language || 'text'}`}>{item.code}</code></Code>
        </Details>
      </Highlight>;
    })}
  </List>;
}
