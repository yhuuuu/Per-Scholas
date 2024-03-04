import mongoose from 'mongoose'

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Username is required
        unique: true, // Username must be unique
    },
    name: {
        type: String,
        required: true, // Name is required
    },
    email: {
        type: String,
        required: true, // Email is required
        unique: true, // Email must be unique
    },
});

// Set up indexes
userSchema.index({ username: 1 }, { unqiue: true })
userSchema.index({ email: 1 }, { unqiue: true })

// Create a model based on the schema
export default mongoose.model('Users', userSchema);

