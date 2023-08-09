import { createWebHistory, createRouter  } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Berita from "../views/Berita.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path:"/User",
        name: "User",
        component: User,
    },
    {
        path: "/berita",
        name: "Berita",
        component: Berita,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;