const { WebClient } = require('@slack/web-api');

/**
 * Create a new Slack client instance
 * @param {string} token - Slack bot token
 * @returns {object} Slack client instance
 */
const slackClient = (token) => new WebClient(token);

/**
 * Sends a message to a Slack channel
 * @param {object} client - Slack client instance   
 * @param {string} channel - Slack channel ID
 * @param {string} message - Message text
 * @throws Will throw an error if the API call fails
 */
async function sendMessage(client, channelId, message) {
	try {
		await client.chat.postMessage({
			channel: channelId,
			text: message,
		});
		console.log('Message sent successfully');
	} catch (error) {
		console.error('Api error:', error);
	}
}

module.exports = { slackClient, sendMessage };
