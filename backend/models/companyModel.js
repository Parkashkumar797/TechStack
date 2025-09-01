import mongoose from 'mongoose';
const companySchema = mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'company name is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    logoUrl: {
        type: String,
        default: '/images/default-logo.png'
    },
    website: {
        type: String,
        required: true,
        trim: true
    },
},
    { timestamps: true }
)
const companyModel = mongoose.model("company",companySchema)
export default companyModel;