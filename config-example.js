const config = {

    // Client Settings
    prefix: "!",
    token: "your-token",
    date_format: "MM-DD-YYYY HH:mm A",
    copyright: "© 2021 Your Name",
    colorhex: "#eb3734",
    port: "8000",
    debugmode: false,
    autoImportSQL: true, // It is recommended to turn this off after your first time boot to avoid errors

    // MySQL Settings
    database: {
        host: "localhost",
        user: "secbot",
        port: 3306,
        password: "",
        database: "security"
    },

    clientAPI: {
        enabled: true, // Enabled the API
        port: "3000" // The port to run the API on (cannot be the same as port on line 10)
    },

    reports: {
        enabled: true,

        useBuiltInReports: true,
        reportlink: "",

        messages: {
            // Technically you CANNOT change the ''order'' of the prompts. The first one MUST be the users TAG, the second MUST be the ID, and the rest must stay in the same order, you can however change the default wording if you wish!
            prompt1: "Now, provide the user's Name & TAG.\n**Example: Hyperz#0001**.",
            
            prompt2: "Now, provide the user's Discord ID.\n**Example: 704094587836301392**.",
            
            prompt3: "What are you reporting this user for?\n**Please provide full detail of all accusations.**",
            
            prompt4: "Please provide a image for proof of violation",
            
            prompt5: "Do you have any extra notes that we should be aware of? If so, please state them now.",
            
            lastprompt: "It can take some time to process reports but you will get a reponse on the status of the report with-in **48 hours**."
        }

    },

    appeals: {
        enabled: true,

        useBuiltInAppeals: true,
        appeallink: "",

        messages: {
            // Technically you CANNOT change the ''order'' of the prompts. The first one MUST be the users TAG, the second MUST be the ID, and the rest must stay in the same order, you can however change the default wording if you wish!
            prompt1: "Please state your ban reason.",

            prompt2: "Provide the reason you believe you should be unbanned from our database below, feel free to provide images or other information.",

            prompt3: "Do you understand what you did was wrong? As-well do you beleive you have learned something from this experience?",

            prompt4: "Explain how you have learned from your mistakes.",

            prompt5: "Do you have any extra notes that we should be aware of? If so, please state them now.",

            lastprompt: "It can take some time to process appeals but you will get a reponse on the status of the appeal with-in **48 hours**."
        }

    },

    defaultimage: "https://i.imgur.com/T9OdSQq.png", // If no evidence is provided
    owners: ['613030812501278740'], // These are role IDS that can add staff members to the staff DB

    loggingguild: "1142563224898785360", // This is a server ID
    reportlogs: "1142572285618819095", // This is a channel ID that reports will be sent to
    appeallogs: "1142572285618819095", // This is a channel ID that appeals will be sent to
    updatebanslogs: "1142572285618819095", // This is a channel ID that other will be sent to

    supportServerInvite: "https://hyperz.dev/discord", // This is an invite to the bots support server

    // This next section is recommended that you do not touch, just ignore it.

    command_count: 31,
    event_count: 5

}

module.exports = config;
