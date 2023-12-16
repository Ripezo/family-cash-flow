import mongoose from 'mongoose';

export interface IFamily {
  name: string;
}

const FamilySchema = new mongoose.Schema<IFamily>({
  name: String,
});

export default mongoose.models.Family || mongoose.model<IFamily>('Family', FamilySchema);