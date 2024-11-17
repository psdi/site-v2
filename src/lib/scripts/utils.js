export function formatDate(d) {
  const date = new Date(d);
  let day, month, year;
  day = date.getDate();
  month = date.toLocaleString('default', { month: 'long' });
  year = date.getFullYear();

  return [day, month, year].join(' ');
}
