import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the Employee schema
const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  dateOfHire: {
    type: Date,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
    trim: true
  }
}, {
  timestamps: true
});

// Create the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
