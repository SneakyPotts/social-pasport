import mongoose, { Schema, Types } from 'mongoose'

const ExtraActivitiesSchema = new Schema(
  {
    child: {
      type: Types.ObjectId,
      ref: 'Child',
      required: true,
    },
    music_school: {
      type: Boolean,
      default: false,
    },
    draw_school: {
      type: Boolean,
      default: false,
    },
    sport_school: {
      type: Boolean,
      default: false,
    },
    palaces_culture: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.ExtraActivities || mongoose.model('ExtraActivities', ExtraActivitiesSchema)
