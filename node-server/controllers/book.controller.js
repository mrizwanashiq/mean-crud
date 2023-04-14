import BookModel from "../models/book.model.js";

export const create = (req, res) => {
	if (!req.body.title) {
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}

	new BookModel({
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false,
	})
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the book.",
			});
		});
};

export const findAll = (req, res) => {
	const title = req.query.title;
	var condition = title
		? { title: { $regex: new RegExp(title), $options: "i" } }
		: {};

	BookModel.find(condition)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving books.",
			});
		});
};

export const findOne = (req, res) => {
	const id = req.params.id;

	BookModel.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: "Not found book with id " + id });
			else res.send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: "Error retrieving book with id=" + id });
		});
};

export const update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update can not be empty!",
		});
	}

	const id = req.params.id;

	BookModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update book with id=${id}. Maybe book was not found!`,
				});
			} else res.send({ message: "book was updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating book with id=" + id,
			});
		});
};

export const deleteById = (req, res) => {
	const id = req.params.id;

	BookModel.findByIdAndRemove(id, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete book with id=${id}. Maybe book was not found!`,
				});
			} else {
				res.send({
					message: "book was deleted successfully!",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete book with id=" + id,
			});
		});
};

export const deleteAll = (req, res) => {
	BookModel.deleteMany({})
		.then((data) => {
			res.send({
				message: `${data.deletedCount} books were deleted successfully!`,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while removing all books.",
			});
		});
};

export const findAllPublished = (req, res) => {
	BookModel.find({ published: true })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving books.",
			});
		});
};
