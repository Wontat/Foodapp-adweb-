import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private url = 'http://temp.dash.zeta.in/food.php';
  private food = {
    categories: [
      {
        name: 'Dessert',
        image:
          'http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png',
      },
      {
        name: 'Starters',
        image: 'https://image.flaticon.com/icons/svg/362/362272.svg',
      },
      {
        name: 'Main course',
        image: 'https://image.flaticon.com/icons/svg/926/926255.svg',
      },
      {
        name: 'Drinks',
        image: 'https://image.flaticon.com/icons/svg/861/861276.svg',
      },
      {
        name: 'Ice creams',
        image: 'https://image.flaticon.com/icons/svg/1256/1256952.svg',
      },
    ],
    recipes: [
      {
        name: 'Blueberry Crumble',
        image: 'https://onedishkitchen.com/blueberry-crumble-for-one/',
        price: 124.99,
        category: 'Dessert',
        rating: 4,
        reviews: 100,
        details:
          'Blueberry crumble is a dessert that consists of a layer of sweetened blueberries that are baked with a crispy, crumbly topping made from flour, sugar, and butter. Its a popular dessert thats often served in the summer when blueberries are in season, but can also be enjoyed year-round.',
        isFavourite: true,
      },
      {
        name: 'Fruit Tarts',
        image:
          'https://www.thepioneerwoman.com/food-cooking/recipes/a39752886/fresh-fruit-tart-recipe/',
        price: 100.27,
        category: 'Dessert',
        rating: 3.5,
        reviews: 64,
        details:
          'A fruit tart is a dessert that consists of a pastry crust filled with a creamy custard or pastry cream and topped with fresh fruit. Its a classic dessert thats often served in the spring and summer months when fresh fruits are in season.',
        isFavourite: false,
      },
      {
        name: 'Cherry Crisp',
        image: 'https://thesaltymarshmallow.com/easy-cherry-crisp/',
        price: 185.45,
        category: 'Dessert',
        rating: 5,
        reviews: 220,
        details:
          'Cherry crisp is a dessert made with fresh or canned cherries topped with a crispy, crumbly oatmeal and flour mixture. Its a popular dessert thats perfect for the summertime when cherries are in season.',
        isFavourite: false,
      },
      {
        name: 'Spring Rolls',
        image:
          'https://www.cubesnjuliennes.com/baked-vegetable-spring-rolls-veg-spring-roll-recipe/',
        price: 167,
        category: 'Starters',
        rating: 4,
        reviews: 331,
        details:
          'Spring rolls are a popular Asian dish made by wrapping a filling of vegetables, meat, and sometimes noodles or rice paper in a thin, translucent wrapper made from rice flour. They can be eaten fresh or fried, and are often served as an appetizer or snack.',
        isFavourite: true,
      },
      {
        name: 'Cheesy Garlic Bread',
        image:
          'https://www.thecomfortofcooking.com/2018/10/cheesy-pull-apart-garlic-bread.html',
        price: 119,
        category: 'Starters',
        rating: 5,
        reviews: 253,
        details:
          'Cheesy garlic bread is a popular appetizer or side dish that consists of sliced bread topped with garlic, butter, and melted cheese. Its a delicious and easy-to-make recipe thats perfect for any occasion.',
        isFavourite: true,
      },
      {
        name: 'Aloo Cheese Croquettes',
        image:
          'https://www.tarladalal.com/aloo-cheese-croquettes-potato-and-cheese-rolls-32755r',
        price: 55,
        category: 'Starters',
        rating: 3,
        reviews: 113,
        details:
          'Aloo cheese croquettes are a popular Indian appetizer or snack made with a filling of mashed potatoes, cheese, and spices that are coated in breadcrumbs and fried until crispy and golden brown.',
        isFavourite: false,
      },
      {
        name: 'Panang Curry',
        image: 'https://www.chilipeppermadness.com/recipes/panang-curry/',
        price: 319.87,
        category: 'Main course',
        rating: 4.4,
        reviews: 147,
        details:
          'Panang Curry is a popular Thai dish that is made with a spicy, creamy curry sauce and usually includes meat (such as chicken, beef, or shrimp), vegetables, and aromatic herbs and spices.',
        isFavourite: true,
      },
      {
        name: 'Honey-Ginger Chicken Baked Wings "4pcs" ',
        image:
          'https://www.onnit.com/academy/honey-ginger-chicken-wings-recipe/',
        price: 144.87,
        category: 'Main course',
        rating: 4.4,
        reviews: 147,
        details:
          'Honey-Ginger Chicken baked wings are a delicious and easy-to-make appetizer or main dish that combines the flavors of sweet honey, spicy ginger, and tangy soy sauce.',
        isFavourite: true,
      },
      {
        name: 'Spicy Thai Basil Chicken',
        image: 'https://healthyfitnessmeals.com/thai-basil-chicken-recipe/',
        price: 279.87,
        category: 'Main course',
        rating: 4.6,
        reviews: 138,
        details:
          'Spicy Thai Basil Chicken, also known as Pad Krapow Gai, is a popular Thai stir-fry dish made with chicken, Thai basil leaves, chilies, garlic, and other aromatics.',
        isFavourite: true,
      },
      {
        name: 'Jasmine Tea',
        image: 'https://www.healthline.com/nutrition/jasmine-tea-benefits',
        price: 88,
        category: 'Drinks',
        rating: 3,
        reviews: 59,
        details:
          'Jasmine tea is a type of tea that is flavored with jasmine flowers, which are known for their sweet and delicate fragrance. It is a popular tea in many parts of the world, especially in China, where it originated.',
        isFavourite: true,
      },
      {
        name: 'Spätlese Wine',
        image: 'https://www.vinovest.co/blog/spatlese',
        price: 259.77,
        category: 'Drinks',
        rating: 4.4,
        reviews: 97,
        details:
          'Spätlese is a German wine term that translates to "late harvest" in English. It refers to a specific ripeness level of grapes that are used to produce a particular type of German wine, known as Spätlese wine.',
        isFavourite: false,
      },
      {
        name: 'Tropical Fruit Juice',
        image:
          'https://www.oliveoilsfromspain.org/recipes/tropical-fruit-juice/',
        price: 84.87,
        category: 'Drinks',
        rating: 4,
        reviews: 430,
        details:
          'Tropical fruit juice is also known for its health benefits, as many tropical fruits are rich in vitamins, antioxidants, and other beneficial compounds. Some of these benefits may include improved digestion, boosted immune function, and reduced inflammation.',
        isFavourite: true,
      },
      {
        name: 'Kulfi',
        image:
          'https://www.funfoodfrolic.com/kulfi-recipe-pista-badam-kulfi-best/',
        price: 209.88,
        category: 'Ice creams',
        rating: 5,
        reviews: 276,
        details:
          'Kulfi is a type of Asian ice cream that is traditionally made by boiling milk for a long time to reduce it and then adding sugar, nuts, and spices such as cardamom, saffron, and pistachios. The mixture is then frozen in cone-shaped molds, giving kulfi its distinctive shape.',
        isFavourite: true,
      },
      {
        name: 'Dondurma',
        image: 'https://yummyistanbul.com/turkish-ice-cream-dondurma/G',
        price: 227.97,
        category: 'Ice creams',
        rating: 4.7,
        reviews: 445,
        details:
          'Dondurma is a type of ice cream that is known for its unique texture and stretchy consistency. It is made using a combination of milk, sugar, and salep, which is a type of flour made from the roots of certain orchids. The salep gives the ice cream its distinctive stretchy texture.',
        isFavourite: false,
      },
      {
        name: 'Rolled Ice-cream',
        image: 'https://thebigmansworld.com/rolled-ice-cream/',
        price: 174.97,
        category: 'Ice creams',
        rating: 4.2,
        reviews: 326,
        details:
          'Rolled ice cream, also known as stir-fried ice cream or Thai rolled ice cream, is a type of ice cream that is made by pouring a liquid ice cream base onto a frozen metal surface, which is then scraped and rolled into thin layers using spatulas.',
        isFavourite: false,
      },
    ],
  };

  get categories(): any[] {
    return this.food.categories;
  }

  get recipes(): any[] {
    return this.food.recipes;
  }

  get favourites(): any[] {
    return this.food.recipes.filter((recipe) => recipe.isFavourite);
  }

  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).subscribe((data) => {
      this.food = data;
    });
  }
}
