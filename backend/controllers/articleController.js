import Article from "../models/articleModel.js";

// Create a new article
export const createArticle = async (req, res) => {
  const { judul, image, penulis, tanggalRilis, hastag, mediaPenerbit, isiArtikel } = req.body;

  try {
    const newArticle = new Article({
      judul,
      image,
      penulis,
      tanggalRilis,
      hastag,
      mediaPenerbit,
      isiArtikel,
    });

    const article = await newArticle.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single article by ID
export const getArticleById = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an article
export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { judul, penulis, tanggalRilis, hastag, mediaPenerbit, isiArtikel } = req.body;

  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    article.judul = judul || article.judul;
    article.image = image || article.image;
    article.penulis = penulis || article.penulis;
    article.tanggalRilis = tanggalRilis || article.tanggalRilis;
    article.hastag = hastag || article.hastag;
    article.mediaPenerbit = mediaPenerbit || article.mediaPenerbit;
    article.isiArtikel = isiArtikel || article.isiArtikel;

    const updatedArticle = await article.save();
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an article
export const deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    await article.remove();
    res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
