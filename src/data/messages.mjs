export const headerMessages = [
	"It's almost here: Demo Day is tomorrow!",
	"Tomorrow's the day: Demo Day is happening!",
	"Get excited: Demo Day is tomorrow!",
	"Tomorrow is Demo Day—show us what you've built!",
	"Demo Day is just around the corner—are you ready?",
	"It's almost time to shine: Demo Day is tomorrow!",
	"Prepare to be inspired—Demo Day is coming up tomorrow!",
	"Tomorrow we celebrate your creativity and hard work—Demo Day awaits!",
	"Demo Day is nearly here—get your projects ready!",
	"The stage is set for tomorrow's Demo Day!",
	"Tomorrow's Demo Day: let's make it unforgettable!",
	"Your moment is coming—Demo Day is tomorrow!",
	"Demo Day is upon us—let's see your amazing work!",
];

export const ctaMessages = [
	"Come support your peers and celebrate their hard work!",
	"Let's come together to support our peers and celebrate their hard work!",
	"Your support means a lot! Join us in celebrating our peers' hard work!",
	"Bring your energy and cheer on your fellow presenters!",
	"Let's fill the chat with encouragement and applause!",
	"Every project deserves a round of applause—let's give it!",
	"Your enthusiasm can make someone's day—show your support!",
	"Let's make Demo Day unforgettable for everyone involved!",
	"Celebrate creativity, effort, and teamwork—be part of the excitement!",
	"A little encouragement goes a long way—let's lift each other up!",
	"Share your favorite moments and celebrate the wins!",
	"Let's inspire each other and make Demo Day special!",
	"Support, celebrate, and enjoy the amazing work on display!",
];


export const getRandmomMessage = (area) => {
	switch (area) {
		case 'header':
			return getRandomEmoji(workspace, 'header') + ' ' + getRandomElementFrom(headerMessages) + ' ' + getRandomEmoji(workspace, 'header');
		case 'cta':
			return '_' + getRandomEmoji(workspace, 'cta') + ' ' + getRandomElementFrom(ctaMessages) + ' ' + getRandomEmoji(workspace, 'cta') + '_';
		default:
			return '';
	}
}