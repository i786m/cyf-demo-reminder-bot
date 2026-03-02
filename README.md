# CYF Demo Reminder Bot

An automated Slack bot that sends scheduled reminders for CYF Demo Day to one or more Slack workspaces.

## Features
- Sends formatted reminder messages to Slack channels on scheduled days (e.g., Mondays and Thursdays)
- Customizable message content, including date, time, and video call link
- Supports multiple Slack workspaces
- Easily configurable via environment variables
- Can be run locally or via GitHub Actions

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- Slack App with bot permissions installed in your workspace(s)
- Slack Bot Token(s) and Channel ID(s)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/i786m/cyf-demo-reminder-bot.git
   cd cyf-demo-reminder-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Slack credentials:
   ```env
   SLACK_BOT_TOKEN=your-slack-bot-token
   SLACK_CHANNEL_ID=your-slack-channel-id
   # For multiple workspaces, add:
   # SLACK_BOT_TOKEN_2=...
   # SLACK_CHANNEL_ID_2=...
   # SLACK_BOT_TOKEN_3=...
   # SLACK_CHANNEL_ID_3=...
   ```

### Usage
To run the bot locally:
```bash
npm start
```

The bot will send a reminder message to the configured Slack channel(s) based on the current day.

### GitHub Actions
This project includes a GitHub Actions workflow for scheduled runs. To enable:
1. Push your code to GitHub.
2. Set the required secrets (`SLACK_BOT_TOKEN`, `SLACK_CHANNEL_ID`, etc.) in your repository settings.
3. Adjust the schedule in `.github/workflows/schedule.yml` as needed.

## Customization
- Edit `src/services/messageService.js` to change the message content or formatting.
- Update the schedule in the GitHub Actions workflow for different reminder times.

## Troubleshooting
- Ensure your Slack bot is installed in the correct workspace and has permission to post in the target channel.
- Check that all environment variables are set correctly.
- Review logs in the Actions tab on GitHub for errors if using GitHub Actions.

## License
MIT

## Author
Imran Mohamed
