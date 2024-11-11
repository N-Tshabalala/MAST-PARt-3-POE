let menuItems = [
   
  ];
  
  export const addMenuItem = (item) => {
    menuItems.push(item); 
  };
  
  export const removeMenuItem = (name) => {
    menuItems = menuItems.filter((item) => item.name !== name); 
  };
  
  export const getMenuItems = () => [...menuItems];  
  