module.exports = {
    Bot: {
    token: "OTE1MDM3OTUzODYzMDYxNTc1.YaVxgA.dtifvaROXes3RhC3NMSBMUbkglw",
    prefix: ["$getServerVar[prefix]","<@$clientID>",":"],
    intents: "all",
    database: {
        type:'default',
        db:require('dbdjs.db'),
        path:"./data/",
        tables:["lexi"],
        promisify:false
    },
    respondOnEdit: {
        commands: true
    },
    debug: {
        interpreter : true 
},
    suppressAllErrors: {
        errorMessage: ["", "{newEmbed:{title:Opps!}{description:There is an error!}{color:fcbfcb}}"]
    }
}
}
