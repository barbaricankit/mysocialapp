const mongoose = require("mongoose");
const { Schema } = mongoose;
const messageSchema = new Schema(
  {
    roomId: { type: Schema.Types.ObjectId, ref: "Users" },
    desciption: String,
    messages: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "Users" },
        chat: String,
        time: Date,
      },
    ],
  },
  { timestamps: true }
);

const Messages = mongoose.model("Message", messageSchema);

module.exports = Messages;
