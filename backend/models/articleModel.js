import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    judul: {
      type: String,
      required: true,
    },
    image: { type: String, required: true },
    penulis: {
      type: String,
      required: true,
    },
    tanggalRilis: {
      type: Date,
      required: true,
    },
    hastag: [String],
    mediaPenerbit: {
      type: String,
      required: true,
    },
    isiArtikel: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
