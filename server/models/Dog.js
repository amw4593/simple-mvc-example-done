const mongoose = require('mongoose');

let DogModel = {};

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

DogModel = mongoose.model('Dog', dogSchema);

// Function for creating a new dog
async function createDog(name, breed, age) {
  try {
    if (!name || !breed || !age) {
        return resizeBy.status(500).json({error: 'Name, breed, and age are required'});
    }

    const dog = new dog({ name, breed, age });
    await dog.save();
    return dog;
  } catch (error) {
    console.log(error);
    return resizeBy.status(500).json({error: 'Something Went Wrong'});
  }
}

// Function for looking up a dog by name
async function findDogAndUpdateAge(name) {
  try {
    const dog = await dog.findOne({ name });
    if (!dog) {
      return 'Dog not found';
    }
    
    dog.age += 1;
    await dog.save();
    return dog;
  } catch (error) {
    console.log(error);
    return resizeBy.status(500).json({error: 'Something Went Wrong'});
  }
}

module.exports = { DogModel, createDog, findDogAndUpdateAge };
