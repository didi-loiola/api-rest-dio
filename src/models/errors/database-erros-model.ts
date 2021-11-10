class DatabaseError extends Error {
    
    constructor(
        public message: string,
        public error?: any
    ) {
        super(message);
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}

export default DatabaseError