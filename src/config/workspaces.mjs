export const workspaces = {
	DEV: {
		token: process.env.SLACK_BOT_DEV_TOKEN,
		channelId: process.env.SLACK_DEV_CHANNEL_ID,
	},
	ITD: {
		token: process.env.SLACK_BOT_ITD_TOKEN,
		channelId: process.env.SLACK_ITD_CHANNEL_ID,
	},
	ITP: {
		token: process.env.SLACK_BOT_ITP_TOKEN,
		channelId: process.env.SLACK_ITP_CHANNEL_ID,
	},
	CYF: {
		token: process.env.SLACK_BOT_CYF_TOKEN,
		channelId: process.env.SLACK_CYF_CHANNEL_ID,
	},
};
