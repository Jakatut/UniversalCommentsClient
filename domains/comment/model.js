class Comment {
    constructor(content, user_id, url, created_at = null, reply_comment_id = null) {
        this.content = content;
        this.user_id = user_id;
        this.url = url;
        this.original_poster_id = original_poster_id;
        this.created_at = created_at ?? Date.now()
        this.reply_comment_id= reply_comment_id
    }

    // Getter for Date of the comment, formatted to the user's locale.
    get CommentDate() {
        var language = window.navigator.userLanguage || window.navigator.language;
        return new Date(this.created_at).toLocaleDateString(language)
    }

    // Getter for the actual content of the comment. Remove any html tags and urls.
    get CommentContent() {
        return (String)(this.content).replace(/(<([^>]+)>)/gi, "").replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    }
}