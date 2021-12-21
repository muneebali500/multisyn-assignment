import { icons } from "./icons/icons";

export const sidebarMenu = [
  {
    id: 1,
    icon: icons.dashboard,
    name: `Dashboard`,
    dropBtn: ``,
    selected: true,
  },
  {
    id: 2,
    icon: icons.inventory,
    name: `Inventory`,
    dropBtn: <i className="fas fa-chevron-down"></i>,
    selected: false,
  },
  {
    id: 3,
    icon: icons.crm,
    name: `CRM`,
    dropBtn: <i className="fas fa-chevron-down"></i>,
    selected: false,
  },
  {
    id: 4,
    icon: icons.orders,
    name: `Orders`,
    dropBtn: <i className="fas fa-chevron-down"></i>,
    selected: false,
  },
  {
    id: 5,
    icon: icons.stocks,
    name: `Stocks`,
    dropBtn: <i className="fas fa-chevron-down"></i>,
    selected: false,
  },
  {
    id: 6,
    icon: icons.reports,
    name: `Reports`,
    dropBtn: <i className="fas fa-chevron-down"></i>,
    selected: false,
  },
  {
    id: 7,
    icon: icons.automation,
    name: `Automation`,
    dropBtn: ``,
    selected: false,
  },
  {
    id: 8,
    icon: icons.myApps,
    name: `My Apps`,
    dropBtn: ``,
    selected: false,
  },
  {
    id: 9,
    icon: icons.availableApps,
    name: `Available Apps`,
    dropBtn: ``,
    selected: false,
  },
  {
    id: 10,
    icon: icons.settings,
    name: `Settings`,
    dropBtn: <i className="fas fa-chevron-down"></i>,
    selected: false,
  },
];

export const latestSalesDetails = [
  {
    id: 1,
    orderId: `S000083`,
    customer: `Ernest Gaboyan`,
    fulfillmentStatus: `Fulfilled`,
    paymentStatus: `Paid`,
    total: `$6 000`,
  },
  {
    id: 2,
    orderId: `S000083`,
    customer: `Ernest Gaboyan`,
    fulfillmentStatus: `Cancelled`,
    paymentStatus: `Partially Paid`,
    total: `$12 000`,
  },
  {
    id: 3,
    orderId: `S000083`,
    customer: `Ernest Gaboyan`,
    fulfillmentStatus: `Partially Fulfilled`,
    paymentStatus: `Refunded`,
    total: `$200`,
  },
  {
    id: 4,
    orderId: `S000083`,
    customer: `Ernest Gaboyan`,
    fulfillmentStatus: `Unfulfilled`,
    paymentStatus: `Pending`,
    total: `$10`,
  },
  {
    id: 5,
    orderId: `S000083`,
    customer: `Ernest Gaboyan`,
    fulfillmentStatus: `Draft`,
    paymentStatus: `Partially Refunded`,
    total: `$3 000`,
  },
];

export const topSellingProducts = [
  {
    id: 1,
    image: `https://www.nicepng.com/png/detail/82-824137_white-t-shirt-transparent-background-png-under-armour.png`,
    icon: icons.manShirt1,
    description: `T-Shirt for men`,
    price: `$50`,
  },
  {
    id: 2,
    image: `https://www.nicepng.com/png/detail/82-824137_white-t-shirt-transparent-background-png-under-armour.png`,
    description: `T-Shirt for men`,
    price: `$50`,
  },
  {
    id: 3,
    image: `https://4.imimg.com/data4/EL/JO/NSDMERP-52770/frock-500x500.png`,
    description: `Bucket hat in washed green`,
    price: `$250`,
  },
  {
    id: 4,
    image: `https://4.imimg.com/data4/EL/JO/NSDMERP-52770/frock-500x500.png`,
    description: `Bucket hat in washed green`,
    price: `$250`,
  },
  {
    id: 5,
    image: `https://adnjxlogdq.cloudimg.io/v7/https://www.ishopping.pk/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/e/desiderio-leather-shoes-for-men-brown-_ld-01_.jpg`,
    description: `Adidas Originals Forum 84`,
    price: `$80`,
  },
  {
    id: 6,
    image: `https://adnjxlogdq.cloudimg.io/v7/https://www.ishopping.pk/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/e/desiderio-leather-shoes-for-men-brown-_ld-01_.jpg`,
    description: `Adidas Originals Forum 84`,
    price: `$80`,
  },
];

export const purchaseOrders = [
  {
    id: 1,
    icon: icons.purIcon1,
    number: `#P00005`,
    name: `Ernest Gaboyan`,
    price: `12 000`,
  },
  {
    id: 2,
    icon: icons.purIcon2,
    number: `#P00005`,
    name: `Ernest Gaboyan`,
    price: `1000`,
  },
  {
    id: 3,
    icon: icons.purIcon3,
    number: `#P00005`,
    name: `Ernest Gaboyan`,
    price: `200`,
  },
  {
    id: 4,
    icon: icons.purIcon4,
    number: `#P00005`,
    name: `Ernest Gaboyan`,
    price: `650`,
  },
  {
    id: 5,
    icon: icons.purIcon5,
    number: `#P00005`,
    name: `Ernest Gaboyan`,
    price: `10 450`,
  },
];

export const tasksSummary = [
  {
    id: 1,
    taskStatus: "To be Fulfilled",
    icon: icons.fulfilled,
    number: 56,
    text: "Quality",
    arrowIcon: icons.arrow,
  },
  {
    id: 2,
    taskStatus: "To be Invoiced",
    icon: icons.invoiced,
    number: 24,
    text: "Quality",
    arrowIcon: ``,
  },
  {
    id: 3,
    taskStatus: "Completed",
    icon: icons.completed,
    number: 12,
    text: "Quality",
    arrowIcon: icons.arrow,
  },
  {
    id: 4,
    taskStatus: "Assigned to me",
    icon: icons.assigned,
    number: 3,
    text: "Quality",
    arrowIcon: ``,
  },
];

export const productsSummary = [
  {
    id: 1,
    icon: icons.outStock,
    text: `Out of stock products`,
    number: `89.00`,
    arrowIcon: icons.rightArrow,
  },
  {
    id: 2,
    icon: icons.allProducts,
    text: `All products`,
    number: `267.00`,
    arrowIcon: icons.rightArrow,
  },
  {
    id: 3,
    icon: icons.archivedProducts,
    text: `Archived products`,
    number: `2.00`,
    arrowIcon: icons.rightArrow,
  },
  {
    id: 4,
    icon: icons.quantity,
    text: `Quantity On Hand`,
    number: `684.00`,
  },
];
