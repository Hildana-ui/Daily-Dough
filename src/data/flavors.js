import flavorChoco from "../assets/flavor-chocolate.png"
import flavorCinam from "../assets/flavor-cinnamon.png"
import flavorCoff from "../assets/flavor-coffee.png"
import flavorHon from "../assets/flavor-honey.png"
import flavorVanil from "../assets/flavor-vanilla.png"


export const flavors = [
  {
    id: 1,
    name: 'Honey Glaze',
    description: 'Sweet golden glaze with white honey',
    image: flavorHon
  },
  {
    id: 2,
    name: 'Cinnamon Sugar',
    description: 'Coated in warm cinnamon & sugar',
    image: flavorCinam
  },
  {
    id: 3,
    name: 'Chocolate Drizzle',
    description: 'Rich chocolate drizzle topping',
    image: flavorChoco
  },
  {
    id: 4,
    name: 'Vanilla Cream',
    description: 'Filled with smooth vanilla cream',
    image: flavorVanil
  },
  {
    id: 5,
    name: 'Coffee Caramel',
    description: 'Infused with coffee & caramel notes',
    image: flavorCoff
  }
];

export default flavors;
