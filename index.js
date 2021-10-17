const fridayMenu = {
    Plate: {
      mains: 'Steak',
      sides: 'Fish',
      snacks: 'Nuggets'
    },
    fries: 'Crispy',
    salad: 'Lettuce'
  };
  
const sundayMenu = destructivelyUpdateObject(fridayMenu, 'salad', 'Onion');  // updating object destructively  
  
sundayMenu
//=> {Plate: { mains: "Steak", sides: "Fish", snacks: "Nuggets" }, fries: "Crispy", salad: "Lettuce" }
  
sundayMenu.salad;
//=> "Onion" 

fridayMenu.salad;
//=> "Onion"  // value of salad changed due to destructive modification (mutated)

const mondayMenu = nondestructivelyUpdateObject(fridayMenu, 'salad', 'Pea');  // updating object non-destructively  
  
mondayMenu.salad;
//=> "Pea" 

fridayMenu.salad;
//=> "Onion"  // value of salad DID NOT change due to non-destructive modification (not mutated)   


Object.assign({ sugar: '1 spoon' }, { milk: '2 cup' });
//=> { sugar: "1 spoon", milk: "2 cup" }

Object.assign({ sugar: '1 spoon' }, { milk: '2 cup', chocoFlakes : '1 cup', grain: '5 cups' }, { grain: '1/2 cup' }); // the last value of grain would be considered replacing the previous one in the list   
// { sugar: "1 spoon", chocoFlakes: "1 cup", flour: "1/2 cup" } - updating object list destructively  

    
const newMenu = {
    Plate: {
      mains: 'Burger',
      sides: 'juice',
      snacks: 'donuts'
    },
    salad: 'frnch'
  };
  
const thursdayMenu = createNewMenu(fridayMenu, newOfferings); // updating object non- destructively  
  
thursdayMenu;
  //=> values produced with new menue without affecting the Friday Menu
  
fridayMenu;
  //=> same as before  


  
