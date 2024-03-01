import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        require:true
    },
    plant_name: String,
    plant_type: String,
    condition: String,
    description: String
})

// Create a model based on the schema
export default mongoose.model('Plant', plantSchema);
