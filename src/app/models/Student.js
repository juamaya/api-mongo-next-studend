import mongoose from "mongoose";
//CREAMOS EL ESQUEMA

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please complete the field."],
    },
    age: {
      type: Number,
      required: [true, "Please complete the field."],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//CREAMOS EL MODELO A PARTIR DEL  ESQUEMA

export const StudentModel =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
