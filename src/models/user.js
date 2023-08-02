import mongoose from 'mongoose';

const { schema } = mongoose;

const userSchema = new schema(
  {
    name: {
      type: string,
      unique: true,
      required: true,
    },

    email: {
      type: string,
      unique: true,
      required: true,
    },

    password: {
      type: string,
      unique: true,
      required: true,
    },
  },
  { timestamps:true }
);

export default moongose.model( user,userSchema)
