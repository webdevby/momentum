const pageGreeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay},`;

  pageGreeting.textContent = greetingText;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) return 'morning';
  else if (hours >= 12 && hours < 18) return 'afternoon';
  else if (hours >= 18 && hours < 23) return 'evening';
  else return 'night';
}

export { showGreeting, getTimeOfDay };
export default name;