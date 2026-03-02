require('dotenv').config();
const {sendMessage} = require('./bot/slackClient');
const {getWeeklyMessage} = require('./services/messageService');

async function main() {
    try {
        const message = await getWeeklyMessage();
		await sendMessage(process.env.SLACK_CHANNEL_ID, message);
    } catch (error) {
        console.error('Main error:', error);
    }
    
}
main()