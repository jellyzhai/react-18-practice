import { useReducer, useState } from "react";
import Cart from "./components/Cart/Cart";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cartContext";

const MEALS_DATA = [
  {
    id: "1",
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "双层吉士汉堡",
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "巨无霸",
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "麦辣鸡腿汉堡",
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "麦香鸡",
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "吉士汉堡包",
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "/img/meals/7.png",
  },
];

const cartReducer = (state, action) => {
  const newCart = { ...state };
  const { type, meal } = action;

  // 添加商品到购物车的方法
  const addItem = (meal) => {
    const existedMeal = newCart.items.find((item) => item.id === meal.id);

    if (existedMeal) {
      existedMeal.amount += 1;
    } else {
      meal.amount = 1;
      newCart.items.push(meal);
    }
    newCart.totalAmount += 1;
    newCart.totalPrice += +meal.price;
    console.log("newCart", newCart);

    return newCart;
  };

  // 删除商品到购物车的方法
  const removeItem = (meal) => {
    const existedMeal = newCart.items.find((item) => item.id === meal.id);

    existedMeal.amount -= 1;

    if (existedMeal.amount === 0) {
      newCart.items = newCart.items.filter((item) => item.id !== meal.id);
    }

    newCart.totalAmount -= 1;
    newCart.totalPrice -= +meal.price;

    // 保证堆数据前后的内存地址不一样，才能触发虚拟dom对比时的差异，保证页面更新
    return newCart;
  };

  // 清空购物车
  const clearCart = () => {
    newCart.items.forEach((cart) => delete cart.amount);
    newCart.items = [];
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;
    return newCart;
  };

  switch (type) {
    case "add":
      return addItem(meal);
    case "sub":
      return removeItem(meal);
    case "clear":
      return clearCart();
    default:
      return state;
  }
}

function App() {
  // 模拟后端返回的商品数据
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  // 定义购物车的数据
  const initialCartData = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  };
  const [cartData, cartDataDispatch] = useReducer(cartReducer, initialCartData);
  // const [cartData, setCartData] = useState(initialCartData);

  // 搜索过滤商品名称
  const filterHandler = (keyword) => {
    const newMealsData = MEALS_DATA.filter((item) =>
      item.title.includes(keyword.trim())
    );

    setMealsData(newMealsData);
  };


  return (
    <div>
      <CartContext.Provider value={{ ...cartData, cartDataDispatch }}>
        <FilterMeals onFilter={filterHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
