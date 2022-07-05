import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    ageLimit:Number,
    capacityMin:Number,
    capacityMax:Number,
    slots:Number  
});
//creation du modele room a partir du schema

export default mongoose.model("Booking",bookingSchema );

