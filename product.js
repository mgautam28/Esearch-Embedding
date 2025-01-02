const pool = require('../config/db.js');

const Product = {

    async getAllWithEmbeddings() {
        const [rows] = await pool.query(
            'SELECT id, name, title, price, id, name, title, price, discount_price, discount_percentage, brand, currency_type, description, size_fit, style_note, fabric, colour, size, season, style, images, color_images, gender, favourite, keywords, main_category, status, websiteLink, domain, website_name, sort_by, is_valid_image_url, FROM products '
        );
        return rows;
    },
};

module.exports = Product;
// module.exports= {getAllWithEmbeddings};