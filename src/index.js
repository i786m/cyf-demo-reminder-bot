require('dotenv').config();
const { slackClient, sendMessage } = require('./bot/slackClient');
const { getWeeklyMessage } = require('./services/messageService');

/**
 * Function that runs the main logic of the bot: generating the message and sending it to the Slack channels within the specified workspaces. It iterates through the workspaces, checks for the presence of necessary environment variables, and sends the message if everything is in place.
 * @throws Will throw an error if environment variables are missing or if the API call fails
 */
async function main() {
    const workspaces = {
        'i786m': {
            token: process.env.SLACK_BOT_TOKEN,
            channelId: process.env.SLACK_CHANNEL_ID,
        },
        'ITD': {
            token: process.env.SLACK_BOT_ITD_TOKEN,
            channelId: process.env.SLACK_ITD_CHANNEL_ID,
        },
        'ITP': {
            token: process.env.SLACK_BOT_ITP_TOKEN,
            channelId: process.env.SLACK_ITP_CHANNEL_ID,
        },
        'CYF': {
            token: process.env.SLACK_BOT_CYF_TOKEN,
            channelId: process.env.SLACK_CYF_CHANNEL_ID,
        },
        
    }
    try {
        for (const [workspace, { token, channelId }] of Object.entries(workspaces)) {
            if (!token || !channelId) {
                console.warn(`Missing token or channel ID for workspace ${workspace}. Skipping...`);
                continue;   
            }
            const client = slackClient(token);
            const message = await getWeeklyMessage();
            await sendMessage(client, channelId, message);
            console.log(`Message sent to ${workspace} workspace successfully!`);
        } 
    } catch (error) {
        console.error('Error in main function:', error);
        process.exit(1);   
    }
}
main();
