import { WebClient } from '@slack/web-api';
import { logToFile } from '../index.mjs';

/**
 * Create a new Slack client instance
 * @param {string} token - Slack bot token
 * @returns {object} Slack client instance
 */
export function slackClient(token) {
	return new WebClient(token);
}   

/**
 * Sends a message to a Slack channel
 * @param {object} client - Slack client instance   
 * @param {string} channel - Slack channel ID
 * @param {string} message - Message text
 * Errors are handled gracefully: if the API call fails, the error is logged.
 */
export async function sendMessage(client, channelId, message) {
	try {
		await client.chat.postMessage({
			channel: channelId,
			text: message,
		});
	} catch (error) {
		logToFile(`ERROR: Failed to send message to channel ${channelId}. ${error}`);
	}
}
