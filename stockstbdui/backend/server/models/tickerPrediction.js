import mongoose, {Schema, models} from "mongoose";

const tickerPredictionSchema = new Schema(
    {
        ticker:{
            type: String,
            required: true,
        },
        company:{
            type: String,
            required: true,
        },
        sector:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        price:{
            type: String,
            required: true,
        },
        prediction:{
            type: String,
            required: true,
        },
        lookup:{
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const tickerPrediction = models.tickerPrediction || mongoose.model("tickerPrediction", tickerPredictionSchema);
export default tickerPrediction;