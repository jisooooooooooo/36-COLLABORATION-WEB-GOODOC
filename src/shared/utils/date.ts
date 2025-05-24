export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12;
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes.toString().padStart(2, '0');
  const period = isAM ? '오전' : '오후';

  return `${period} ${displayHours}:${displayMinutes}`;
};
