import type { JSX } from 'react';

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
        {line}
        <br />
      </p>
    )
  );
};
