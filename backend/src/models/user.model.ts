import { Schema, model } from "mongoose";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  address: string;
  isAdmin: boolean;
}

export const UserSchema = new Schema<User>(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    isAdmin: { type: Boolean, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const UserModel = model<User>("user", UserSchema);
