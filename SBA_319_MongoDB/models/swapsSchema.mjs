import mongoose from "mongoose";

const swapSchema = new mongoose.Schema({
    
    plant_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Plants',
        require:true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        require:true
    },
    swap_description: String,
    swap_method: String,
    location: String,
    zipcode: Number,
    availability: String,
    trade_preferences: String,
    swap_status:String
})
// Set up indexes
swapSchema.index({ plant_id: 1 }, { unqiue: true })
swapSchema.index({ user_id: 1 }, { unqiue: true })
swapSchema.index({ zipcode: 1 }, { unqiue: true })

// Create a model based on the schema
export default mongoose.model('Swaps', swapSchema);
