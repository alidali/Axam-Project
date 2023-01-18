import duotone from "components/icons/duotone";
import { Children } from "react";



export const navigations = [
  { type: "label", label: "Vendeur ( Compte du vendeur )" },
  {
    name: "Dashboard",
    icon: duotone.Dashboard,
    path: "/vendor/dashboard",
  
  
 

  },

  {
    name: "Produits",
    icon: duotone.Products,
    children: [
      { name: "Liste de produits", path: "/admin/products" },
      { name: "Ajouter produit", path: "/admin/products/create" },
      { name: "Catégorie", path: "/admin/categories" },
      { name: "Marque", path: "/admin/brands" },
      
    ],
  },

  {
    name: "Commandes",
    icon: duotone.Order,
    children: [
      { name: "Liste des commandes", path: "/admin/orders", },
      
          { name: "Commandes en attentes", path: "/admin/orders/1" },
          { name: "Commandes prêtes", path: "/admin/orders/1" },
          { name: "Commandes  en cours ", path: "/admin/orders/1" },
          { name: "Commandes livrées", path: "/admin/orders/1" },
          { name: "Commandes payées", path: "/admin/orders/1" },
          { name: "Commandes retournées", path: "/admin/orders/1" },
        
      ],
  },
  {
    name: "Catégories",
    icon: duotone.Order,
    path: "/admin/customers",
    badge:{
      value:"+add"
    } 
  },

  {
    name: "Promotions",
    icon: duotone.Pricing,
    path: "/admin/customers",
  },
  {
    name: "Evènements",
    icon: duotone.Calender,
    path: "/vendor/reviews",
  },



  {
    name: "Balance de paiement",
    icon: duotone.Refund,
    path: "/vendor/refund-request",
  },

  

  {
    name: "Shop Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/shop-settings",
  },

  

  {
    name: "Compte vendeur",
    icon: duotone.AccountSetting,
    path: "/vendor/account-setting",
  },

  {
    name: "Contacter chargé de vendeur",
    icon: duotone.SiteSetting,
    path: "/vendor/site-settings",
  },

  {
    name: "Logout",
    icon: duotone.Session,
    path: "/vendor/dashboard-version-2",
  },
];