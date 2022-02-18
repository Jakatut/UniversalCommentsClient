// Anonymous user, only identified by an internal id.
class User {
    constructor(id, created_at = null) {
        this.id = id
        this.created_at = created_at ?? Date.now()
    }
}