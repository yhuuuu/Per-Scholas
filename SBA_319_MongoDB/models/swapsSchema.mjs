import mongoose from "mongoose";

const swapSchema = new mongoose.Schema({
    
    plant_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Plants',
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

// Create a model based on the schema
export default mongoose.model('Swaps', swapSchema);
