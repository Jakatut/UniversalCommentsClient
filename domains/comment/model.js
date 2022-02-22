class Comment {
    constructor(id, content, user_id, url, parent_comment_id = null, created_at = null, edited_at = null) {
        this.id = id;
        this.content = content;
        this.user_id = user_id;
        this.url = url;
        this.created_at = created_at ?? Date.now();
        this.edited_at = edited_at ?? Date.now();
        this.parent_comment_id = parent_comment_id;
    }

    // Getter for Date of the comment, formatted to the user's locale.
    get CommentDate() {
        var language = window.navigator.userLanguage || window.navigator.language;
        return new Date(this.created_at).toLocaleDateString(language);
    }

    // Getter for the actual content of the comment. Remove any html tags and urls.
    get CommentContent() {
        return (String)(this.content).replace(/(<([^>]+)>)/gi, "").replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    }
}