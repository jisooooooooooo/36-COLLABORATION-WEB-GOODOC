import type { JSX } from 'react';

const parseMarkdown = (text: string): JSX.Element[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

export const formatText = (content: string): JSX.Element[] => {
  const sentences = content.split(/(?<=[.?!:])\s+(?=\d+\.)/);
  const result: (string | null)[] = [];

  let currentNumberedItem: string | null = null;
  let inNumberedSection = false;

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();

    if (/^\d+\./.test(sentence)) {
      if (currentNumberedItem) {
        result.push(currentNumberedItem);
        result.push(null);
      }
      currentNumberedItem = sentence;
      inNumberedSection = true;
    } else if (inNumberedSection) {
      currentNumberedItem += ' ' + sentence;

      if (!sentences[i + 1] || /^\d+\./.test(sentences[i + 1].trim())) {
        result.push(currentNumberedItem);
        result.push(null);
        currentNumberedItem = null;
        inNumberedSection = false;
      }
    } else {
      result.push(sentence);
      result.push(null);
    }
  }

  if (currentNumberedItem) {
    result.push(currentNumberedItem);
    result.push(null);
  }

  return result.map((line, index) =>
    line === null ? (
      <br key={index} />
    ) : (
      <p key={index}>
        {parseMarkdown(line)}
        <br />
      </p>
    )
  );
};
