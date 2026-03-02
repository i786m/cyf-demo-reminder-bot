/**
 * Formats the day to use ordinal suffixes (1st, 2nd, 3rd, etc.)
 * @param {number} day - The day of the month
 * @returns {string} - Formatted day with ordinal suffix
 */
function getDayWithOrdinalSuffix(day) {
    let suffix;
    if (day >3 && day <= 20) { 
        suffix = 'th';
    } else {
        const lastDigit = day % 10;
        if (lastDigit === 1) {
            suffix = 'st';
        } else if (lastDigit === 2) {
            suffix = 'nd';
        } else if (lastDigit === 3) {
            suffix = 'rd';
        } else {
            suffix = 'th';
        }
    }
    return `${day}${suffix}`;
}

/**
 * Formats the date to a human-readable string format
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [weekday, day, month, year] =  date.toLocaleDateString('en-GB', options).split(' ');
    return `${weekday}, ${getDayWithOrdinalSuffix(parseInt(day))} ${month} ${year}`;
}

/**
 * Generates Message to be sent as a reminder depending on the day of the week
 */
function generateMessage() {
    const today = new Date();
    const dayOfWeek = today.getUTCDay();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowDateString =  formatDate(tomorrow);
    const demoTime = dayOfWeek === 1 ? `6:00 PM to 6:50 PM (UK time)`: `11:00 AM to 11:50 AM (UK time)`;
    const meetLink = 'https://meet.google.com/qyh-qfmb-pud';
    const message = `*Reminder: CYF Demo Day is scheduled for tomorrow!*
    *Date & Time:* ${tomorrowDateString}, ${demoTime}
    *Time zone:* Europe/London
    *Video call link:* ${meetLink}
    _Timing suggestions : ITP No more than 5-10 minutes , Piscine 2 Minutes per person, SDC & Launch 5 Minutes per person._
    _*Who will be presenting tomorrow? Please reply in this thread. Come support your peers and celebrate their hard work!*_`
    ;
    return message;
}

/**
 * Returns the scheduled reminder message
 */
async function getWeeklyMessage() {
	return generateMessage();
}

module.exports = { getWeeklyMessage };
