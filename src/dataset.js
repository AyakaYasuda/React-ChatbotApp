const defaultDataset = {
    "init": {
        answers: [
            {content: "I'd like to work with you.", nextId: "job_offer"},
            {content: "I have a question about career as an engineer.", nextId: "consultant"},
            {content: "Let me know about the learning community.", nextId: "community"},
            {content: "Would you like to go out with me?", nextId: "dating"},
        ],
        question: "Hello! How may I help you today?",
    },
    "job_offer": {
        answers: [
            {content: "Creating a website", nextId: "website"},
            {content: "Developing a webapp", nextId: "webapp"},
            {content: "Developing an automation tool", nextId: "automation_tool"},
            {content: "Other jobs", nextId: "other_jobs"}
        ],
        question: "What type of job are you looking to offer me?",
    },
    "website": {
        answers: [
            {content: "Contact me", nextId: "contact"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "Sure! Please give me the details on the following contact page ",
    },
    "webapp": {
        answers: [
            {content: "Contact me", nextId: "contact"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "Sure! Please give me the details on the following contact page",
    },
    "automation_tool": {
        answers: [
            {content: "Contact me", nextId: "contact"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "Sure! Please give me the details on the following contact page",
    },
    "other_jobs": {
        answers: [
            {content: "Contact me", nextId: "contact"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "Sure! Please give me the details on the following contact page",
    },
    "consultant": {
        answers: [
            {content: "Checkout the YouTube videos", nextId: "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w"},
            {content: "Let me know more about the learning community", nextId: "community"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "We have a YouTube channel that provides you useful information about career and also we can talk on our learing community for engineers!",
    },
    "community": {
        answers: [
            {content: "What kind of activities does it have?", nextId: "community_activity"},
            {content: "I'd like to join it!", nextId: "https://torahack.web.app/community/"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "We launched this community in March 2020, and this is for those who are looking to shift thier career to web engineers! You can learn how to code and talk to us about career.",
    },
    "community_activity": {
        answers: [
            {content: "Give me the details", nextId: "https://youtu.be/tIzE7hUDbBM"},
            {content: "I'd like to join it!", nextId: "https://torahack.web.app/community/"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "We provide the material for front-end development, email you useful information about how to build your career, how to code and more... Also, we host a monthly meeting online where you can make new friends and work together! \nIf you need more details, check out our YouTube videos :)",
    },
    "dating": {
        answers: [
            {content: "DM me", nextId: "https://twitter.com/torahack_"},
            {content: "Go back to the first question", nextId: "init"}
        ],
        question: "Wow, that's amazing. Let's go for lunch! Please send me DM",
    },
}

export default defaultDataset