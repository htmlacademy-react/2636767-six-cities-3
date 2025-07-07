export const formattedDate = (date: string) => {
  const newDate = new Date(date);
  const formatted = newDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return formatted;
};

export const dateTimeAttr = (date: string) => {
  const newDate = new Date(date);

  return newDate.toISOString().split('T')[0];
};
