const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const basicSchema = new Schema(
  {
    valueOne: {
      type: String,
      required: true,
    },
    valueTwo: {
      type: String,
    },
    valueThree: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Basic", basicSchema);

/* const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AnotherExample = require("./anotherModel"); 

const exampleSchema = new Schema(
    {
      // 👉 ref = the "mysql foreign key" of mongoDB

      anotherExample_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AnotherExample",
        required: true,
        validate: {
          validator: async function (value) {

            // 👇 Check if anotherModel_id exist in Another collection

            const another = await mongoose
              .model("AnotherExample")
              .findById(value);
            return !!another;
          },
          message: "AnotherExample with this ID does not exist.",
        },
      },
  
      // 👇 permitted SchemaTypes
      
      keyOne: {
        type: String,
        require: true,
      },
      keyOne: {
        type: Number,
      },
      keyOne: {
        type: Date,
      },
      keyOne: {
        type: Buffer,
      },
      keyOne: {
        type: Boolean,
      },
      keyOne: {
        type: Mixed,
      },
      keyOne: {
        type: Array,
      },
      keyOne: {
        type: Decimal128,
      },
      keyOne: {
        type: Map,
      },
      keyOne: {
        type: UUID,
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Exemple", exampleSchema); */
