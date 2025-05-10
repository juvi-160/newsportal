const sequelize = require('./config/db');
const News = require('./models/newsModel');
const Category = require('./models/categoryModel');
const { faker } = require('@faker-js/faker');

const seedNews = async () => {
  try {
    await sequelize.sync({ alter: true });

    // Fetch categories
    const categoryNames = ['India', 'World', 'Sports', 'Business'];
    const categories = {};

    for (const name of categoryNames) {
      const cat = await Category.findOne({ where: { name } });
      if (!cat) {
        throw new Error(`Category "${name}" not found. Please seed categories first.`);
      }
      categories[name] = cat.id;
    }

    const newsData = [];

    for (const [categoryName, categoryId] of Object.entries(categories)) {
      for (let i = 0; i < 10; i++) {
        newsData.push({
          title: faker.lorem.sentence(6),
          publisherName: faker.company.name(),
          description: faker.lorem.paragraphs(2),
          image: faker.image.urlLoremFlickr({ category: 'news' }),
          categoryId,
          publishedAt: faker.date.recent(15),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await News.bulkCreate(newsData);
    console.log('✅ News seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding news:', error.message);
  } finally {
    await sequelize.close();
  }
};

seedNews();
