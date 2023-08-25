import mongoose from "mongoose";

const CityEventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    points: {
        type: Number,
        required: false
    },
    created_date: {
        type: String, 
        required: false
    }
})

const CityEvents = mongoose.models.cityevents || mongoose.model
("cityevents", CityEventsSchema);

export default CityEvents;