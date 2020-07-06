const { GithubSecret, UpdatesHook } = require("../../../../config.json");
const crypto = require("crypto");
const { AggregationCursor } = require("mongodb");
const { default: fetch } = require("node-fetch");
module.exports = {
  github: async (req, res) => {
    var commits = {};
    if (req.body.commits) {
      commits = req.body.commits.reduce(
        (agg, commit) => {
          agg.messages = agg.messages + commit.message + ";";
          agg.filesTouched = agg.filesTouched
            .concat(commit.added)
            .concat(commit.modified)
            .concat(commit.removed);
          return agg;
        },
        { messages: "", filesTouched: [] }
      );
      var push = {
        finalCommitID: req.body.after,
        pusher: req.body.pusher,
        timestamp: req.body.head_commit.timestamp,
        branch: req.body.branch,
        finalComment: req.body.head_commit.message,
        commits: req.body.commits,
      };
    }
    var Sending = {
      embeds: [
        {
          author: {
            name: req.body.sender.login,
            url: req.body.sender.repos_url,
            icon_url: req.body.sender.avatar_url,
          },
          description: `New Commit on [${req.body.repository.name}](${
            req.body.repository.svn_url
          })\n${req.body.commits
            .map(
              (commit) =>
                `\`${commit.id.slice(0, 7)}\`: **${
                  commit.message
                }**${commit.added
                  .map((a) => `+** ${a}**`)
                  .join("\n")}\n${commit.removed
                  .map((a) => `- **${a}**`)
                  .join("\n")}\n${commit.modified
                  .map((a) => `+- **${a}**`)
                  .join("\n")}`
            )
            .join("\n\n")}`,
          color: parseInt("7289DA", 16),
        },
      ],
    };
    fetch(UpdatesHook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Sending),
    });
    res.json(push);
  },
};
