import mongoose, { Schema } from 'mongoose'

const childSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    born: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    father: {
      type: String,
    },
    mother: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Child || mongoose.model('Child', childSchema)
