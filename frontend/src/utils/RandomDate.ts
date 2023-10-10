export function RandomDate(min: Date = new Date(), max: Date): string[] {
  const minDate: Date = min;
  const maxDate: Date = max;
  const randomDate = new Date((Math.random() * (maxDate.getTime() - minDate.getTime() + 1)) + minDate.getTime());
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return [`${randomDate.getDate()}`, monthNames[randomDate.getMonth()], `${randomDate.getFullYear()}`];
}