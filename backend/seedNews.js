const sequelize = require('./config/db');
const Category = require('./models/categoryModel');

const seedCategories = async () => {
  try {
    await sequelize.sync({ alter: true });

    const categoryNames = ['India', 'World', 'Sports', 'Business'];

    for (const name of categoryNames) {
      await Category.findOrCreate({ where: { name } });
    }

    console.log('✅ Categories seeded!');
  } catch (error) {
    console.error('❌ Error seeding categories:', error.message);
  } finally {
    await sequelize.close();
  }
};

seedCategories();
