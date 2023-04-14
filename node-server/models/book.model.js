import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		title: String,
		description: String,
		published: Boolean,
	},
	{ timestamps: true }
);

export default mongoose.model("Book", schema);
