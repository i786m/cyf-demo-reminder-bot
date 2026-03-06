import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import { slackClient, sendMessage } from './bot/slackClient.mjs';
import { generateMessage } from './services/messageService.mjs';
import{ workspaces } from './config/workspaces.mjs';


export function logToFile(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;    
    fs.appendFileSync('bot.log', logMessage);
}

/**
 * Function that runs the main logic of the bot: generating the message and sending it to the Slack channels within the specified workspaces.
 * It iterates through the workspaces, checks for the presence of necessary environment variables, and sends the message if everything is in place.
 *
 * Required environment variables:
 *   SLACK_BOT_DEV_TOKEN, SLACK_DEV_CHANNEL_ID, SLACK_BOT_ITD_TOKEN, SLACK_ITD_CHANNEL_ID,
 *   SLACK_BOT_ITP_TOKEN, SLACK_ITP_CHANNEL_ID, SLACK_BOT_CYF_TOKEN, SLACK_CYF_CHANNEL_ID
 *
 * Errors are handled gracefully: if an error occurs, it is logged and the process exits with a non-zero status.
 */
async function main() {
	
	try {
		for (const [workspace, { token, channelId }] of Object.entries(
			workspaces,
		)) {
			if (!token || !channelId) {
				console.warn(
					`Missing token or channel ID for workspace ${workspace}. Skipping...`,
				);
                logToFile(`WARNING: Missing token or channel ID for workspace ${workspace}. Skipping...`);
				continue;
			}
			const client = slackClient(token);
			const message = await generateMessage(workspace);
			await sendMessage(client, channelId, message);
			logToFile(`Message sent to ${workspace} workspace successfully!`);
		}
	} catch (error) {
		logToFile(
			`ERROR: Failed to send message to ${workspace} workspace. ${error}`,
		);
		process.exit(1);
	}
}
main();
