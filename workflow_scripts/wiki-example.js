module.exports = (
    github,
    core
) => {
    function getMarkdown() {
        const markdownLines = [];
        markdownLines.push("# Markdown Example");
        markdownLines.push(`### Run Date: ${new Date().toUTCString()}`);

        // table creation
        
        markdownLines.push("|Repository|Some Value|");
        markdownLines.push("|---|---|");

        markdownLines.push ("|Repo 1| Some Value|");
        markdownLines.push ("|Repo 2| Some Value|");
        
        return markdownLines.join('\n');;
    }
}