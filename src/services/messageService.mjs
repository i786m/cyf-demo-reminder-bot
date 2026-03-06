import { getRandmomMessage } from "../data/messages.mjs";
/**
 * Formats the day to use ordinal suffixes (1st, 2nd, 3rd, etc.)
 * @param {number} day - The day of the month
 * @returns {string} - Formatted day with ordinal suffix
 * @example
 * getDayWithOrdinalSuffix(1); // '1st'
 * getDayWithOrdinalSuffix(2); // '2nd'
 * getDayWithOrdinalSuffix(3); // '3rd'
 * getDayWithOrdinalSuffix(4); // '4th'
 */
function getDayWithOrdinalSuffix(day) {
	let suffix;
	if (day > 3 && day <= 20) {
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
 * @example
 * formatDate(new Date('2026-03-02'));
 * // 'Monday 2nd March 2026'
 */
function formatDate(date) {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const [weekday, day, month, year] = date
		.toLocaleDateString('en-GB', options)
		.split(' ');
	return `${weekday} ${getDayWithOrdinalSuffix(parseInt(day))} ${month} ${year}`;
}
/**
 * Checks if the given date falls within the holiday period (temp fixed at 22nd December to 2nd January)
 * @param {Date} [date] - The date to check (defaults to current date)
 * @returns {boolean} - True if the date is within the holiday period, false otherwise
 * @example
 * isHolidayPeriod(new Date('2026-12-25')); // true
 * isHolidayPeriod(new Date('2026-01-03')); // false
 */
function isHolidayPeriod(today = new Date()) {
	const year = today.getFullYear();
	//Logic to find last demo day before Christmas and first demo day after New Year
	// const christmasEve = new Date(year, 11, 24);
	// const newYear = new Date(year + 1, 0, 1);
	// const christmasEveDay = christmasEve.getUTCDay();
	// let holidayStart;
	// if (christmasEveDay === 1 || christmasEveDay === 4) {
	//     holidayStart = christmasEve;
	// } else {
	//     const daysToSubtract = (christmasEveDay === 0) ? 3 : (christmasEveDay === 2) ? 1 : 2;
	//     holidayStart = new Date(christmasEve);
	//     holidayStart.setDate(christmasEve.getDate() - daysToSubtract);
	// }
	// const newYearDay = newYear.getUTCDay();
	// let holidayEnd;
	// if (newYearDay === 1 || newYearDay === 4) {
	//     holidayEnd = newYear;
	// } else {
	//     const daysToAdd = (newYearDay === 0) ? 1 : (newYearDay === 2) ? 6 : (newYearDay === 3) ? 5 : 4;
	//     holidayEnd = new Date(newYear);
	//     holidayEnd.setDate(newYear.getDate() + daysToAdd);
	// }

	//For now using fixed dates for holiday period, can be updated to dynamic logic if needed in the future as per the commented code above
	const holidayStart = new Date(year, 11, 22); // 22nd December
	const holidayEnd = new Date(year + 1, 0, 2); // 2nd January
	return today >= holidayStart && today <= holidayEnd;
}

/**
 * Generates Message to be sent as a reminder depending on the day of the week. If its within the holiday period, it adds a holiday message otherwise it sends the regular message.
 * @param {string} workspace - The name of the workspace to generate the message for
 * @returns {string} - The generated message string
 * @example
 * generateMessage('CYF'); // Returns a formatted reminder or holiday message for CYF workspace
 */
export function generateMessage(workspace) {
	const today = new Date();
	const dayOfWeek = today.getUTCDay();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);
	const tomorrowDateString = formatDate(tomorrow);
	const demoTime =
		dayOfWeek === 1 ? `6:00 PM to 6:50 PM` : `11:00 AM to 11:50 AM`;
	const meetLink = 'https://meet.google.com/qyh-qfmb-pud';
	const header = `*${getRandomElementFrom(headerEmojis)} ${getRandomElementFrom(headerMessages)} ${getRandomElementFrom(headerEmojis)}*`;
	const dateTime = `*Date & Time:* ${tomorrowDateString}, ${demoTime}`;
	const timeZone = '*Time zone:* Europe/London';
	const videoLink = `*Video call link:* ${meetLink}`;
	const demoTimeSuggestion =
		workspace === 'ITP' || workspace === 'ITD' ? '5-10 minutes'
		: workspace === 'CYF' ? 'Piscine 2 Minutes and SDC/Launch 5 Minutes'
		: 'Dynamic demo time suggestion';
	const demoTimingMessage = `*Demo timing suggestion:* ${demoTimeSuggestion}`;
	const messageForPresenters =
		'_Please reply to this thread:thread: if you are presenting._';
	const callToAction = `_*${getRandomElementFrom(ctaEmojis)} ${getRandomElementFrom(ctaMessages)} ${getRandomElementFrom(ctaEmojis)}*_`;
	const message = [
		header,
		dateTime,
		timeZone,
		videoLink,
		demoTimingMessage,
		messageForPresenters,
		callToAction,
	].join('\n\n');
	const holidayMessage =
		'\n\n:tada: *Happy Holidays!* :tada:\n\nJust a reminder that there will be no demo sessions during the holiday period.\n\nWe look forward to seeing you back for more amazing demos after the holidays!\n\nWe hope you have a wonderful time celebrating with your loved ones! \n\n:christmas_tree: :santa: :gift: :snowflake: :snowman: :sparkles: :fireworks: :confetti_ball: :balloon: :tada: :clinking_glasses: :champagne:';
	return isHolidayPeriod() ? holidayMessage : message;
}

