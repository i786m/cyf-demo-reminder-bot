import { getRandomElementFrom } from '../utils/utils.mjs';

const headerEmojis = [
	':alert:',
	':codeyourfuture:',
	':presentation:',
	':computer_desk:',
	':computer-3:',
	':computer_desk:',
	':sparkler:',
	':star-animated:',
	':yay:',
	':mustacheparrot:',
	':computer-4:',
	':cool-doge:',
	':yay:',
	':typing-cat:',
	':star-u:',
	':timer-clock-animated:',
];

const headerEmojisCYF = [
	':alert:',
	':codeyourfuture:',
	':presentation:',
	':computer_desk:',
	':computer-3:',
	':computer_desk:',
	':sparkler:',
	':star-animated:',
	':yay:',
	':mustacheparrot:',
	':computer-4:',
	':yay:',
	':typing-cat:',
	':star-u:',
	':timer-clock-animated:',
];

const headerEmojisITP = [
	':alert:',
	':codeyourfuture:',
	':sparkler:',
	':yay:',
	':computer:',
	':alert2:',
	':party1:',
	':cool-doge:',
	':its_magic:',
	':yey:',
];

const headerEmojisITD = [
	':alert:',
	':codeyourfuture:',
	':sparkler:',
	':computer:',
	':aussie_parrot:',
	':doge:',
	':mario_luigi_dance:',
	':ohyeah:',
];

const ctaEmojisCYF = [
	':eyes:',
	':exploding_head:',
	':thinking_face:',
	':raised_hands:',
	':hugging_face:',
	':partying_face:',
	':muscle:',
	':male-detective:',
	':technologist:',
	':eye-in-speech-bubble:',
	':people_hugging:',
	':teamwork:',
	':so_cool:',
	':cheer:',
	':greatwork:',
	':clapping:',
	':coffee_computer:',
];


const ctaEmojis = [':eyes:',
    ':exploding_head:',
    ':thinking_face:',
    ':clap:',
    ':raised_hands:',
    ':hugging_face:',
    ':partying_face:',
    ':muscle:',
    ':male-detective:',
    ':technologist:',
    ':eye-in-speech-bubble:',
    ':people_hugging:',
    ':teamwork:',
    ':well_done:'
]

export const getRandomEmoji = (workspace, area) => {
	switch (area) {
		case 'header':
			switch (workspace) {
				case 'CYF':
					return getRandomElementFrom(headerEmojisCYF);
				case 'ITP':
					return getRandomElementFrom(headerEmojisITP);
				case 'ITD':
					return getRandomElementFrom(headerEmojisITD);
				default:
					return getRandomElementFrom(headerEmojis);
			}
		case 'cta':
			switch (workspace) {
				case 'CYF':
					return getRandomElementFrom(ctaEmojisCYF);
				default:
					return getRandomElementFrom(ctaEmojis);
			}
		default:
			return '';
	}
};
