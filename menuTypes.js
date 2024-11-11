
const Course = {
    STARTER: 'Starter',
    MAIN: 'Main',
    DESSERT: 'Dessert',
  };
  
  const createMenuItem = (dishName, description, course, price) => ({
    dishName,
    description,
    course,
    price,
  });
  
  export { Course, createMenuItem };
  