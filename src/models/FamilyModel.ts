import mongoose from 'mongoose';

export interface IFamily {
  _id: string;
  name: string;
}

const FamilySchema = new mongoose.Schema<IFamily>({
  name: String,
});

export default mongoose.models.Family || mongoose.model<IFamily>('Family', FamilySchema);