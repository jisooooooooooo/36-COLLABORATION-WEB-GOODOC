export const sendMessage = (value: string, onSend: (msg: string) => void, clear: () => void) => {
  if (!value.trim()) return;
  onSend(value);
  clear();
};
