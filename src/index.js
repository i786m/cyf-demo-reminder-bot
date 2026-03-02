require('dotenv').config();
const { slackClient, sendMessage } = require('./bot/slackClient');
const { getWeeklyMessage } = require('./services/messageService');

/**
 * Function that runs the main logic of the bot: generating the message and sending it to the specified Slack channel
 * @throws Will throw an error if environment variables are missing or if the API call fails
 */
async function main() {
	try {
        const token = process.env.SLACK_BOT_TOKEN;
        const channelId = process.env.SLACK_CHANNEL_ID;
        if (!token) {
            throw new Error('SLACK_BOT_TOKEN is not defined in environment variables');
        }
        if (!channelId) {
            throw new Error('SLACK_CHANNEL_ID is not defined in environment variables');
        }
        const client = slackClient(token);

		const message = await getWeeklyMessage();
		await sendMessage(client, channelId, message);
	} catch (error) {
		console.error('Main error:', error);
        process.exit(1); // Exit with a failure code to indicate an error occurred
	}
}
main();
