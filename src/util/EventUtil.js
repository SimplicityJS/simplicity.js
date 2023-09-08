const BulkOptions = (d) => {
    return {
        messages: d.data.bulk.map((x) => x.content).join(" , "),
        ids: d.data.bulk.map((x) => x.id).join(" , "),
        createdTimestamp: d.data.bulk.map((x) => x.createdTimestamp).join(" , "),
        createdAt: d.data.bulk.map((x) => x.createdAt).join(" , "),
        userIds: d.data.bulk.map((x) => x.author.id).join(" , "),
        usernames: d.data.bulk.map((x) => x.author.username).join(" , "),
        userTags: d.data.bulk.map((x) => x.author.tag).join(" , "),
        userMentions: d.data.bulk.map((x) => x.author.toString()).join(" , "),
        guildId: d.data.bulk.first().guildId,
        guildName: d.data.bulk.first().guild.name,
        channelID: d.data.bulk.first().channelID,
        channelName: d.data.bulk.first().channel.name,
    };
};

const BulkData = (d, option) => {
    return BulkOptions(d)[option];
};

WebhookUpdateOptions = [
    "id",
    "name",
    "type",
    "guildid",
];

module.exports = {
    BulkData,
    WebhookUpdateOptions,
};
