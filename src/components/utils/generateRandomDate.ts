export function generateRandomDate() {
  const initialDate = new Date("1995-06-16");
  const finalDate = new Date();

  const totalDays = Math.floor(
    (finalDate.valueOf() - initialDate.valueOf()) / (1000 * 60 * 60 * 24)
  );
  const randomDays = Math.floor(Math.random() * totalDays);

  const randomDate = new Date(
    initialDate.valueOf() + randomDays * (24 * 60 * 60 * 1000)
  );

  // Formatting the date to 'year-month-day'
  const year = randomDate.getFullYear();
  const month = ("0" + (randomDate.getMonth() + 1)).slice(-2);
  const day = ("0" + randomDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
