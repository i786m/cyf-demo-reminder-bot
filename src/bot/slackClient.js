const {webClient} = require('@slack/web-api');
require('dotenv').config();

const token = process.env.SLACK_BOT_TOKEN;
const channelId = process.env.SLACK_CHANNEL_ID;

const slackClient = new webClient(token);

async function sendMessage(channelId,message) {
    try {
        await slackClient.chat.postMessage({
            channel: channelId,
            text: message,
        });
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Api error:', error);
    }
}

module.exports = {
  sendMessage,  
};  