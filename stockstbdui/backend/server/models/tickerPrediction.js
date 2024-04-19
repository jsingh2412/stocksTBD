/*
*   tickerPrediction.js
*   Nicolas Sidorenkov
*   Date Created: 3/28/2024
*   This defines the schema that will be used within the database that stores 
*   the information of our predictions sorted by the company tickers.
*/
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