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
      // { name: "Review", path: "/admin/product-reviews" },
    ],
  },

  {
    name: "Commandes",
    icon: duotone.Order,
    children: [
      { name: "Liste des commandes", path: "/admin/orders", },
     
       
          { name: "Commandes en attentes", path: "/admin/orders/1" },
          { name: "Commandes prêtes ", path: "/admin/orders/1" },
          { name: "Commandes  en cours ", path: "/admin/orders/1" },
          { name: "Commandes livrées", path: "/admin/orders/1" },
          { name: "Commandes payées", path: "/admin/orders/1" },
          { name: "Commandes retournées", path: "/admin/orders/1" },
        
     ],
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

  // {
  //   name: "Refunds",
  //   icon: duotone.Refund,
  //   children: [
  //     { name: "Refund Request", path: "/admin/refund-request" },
  //     { name: "Refund Settings", path: "/admin/refund-setting" },
  //   ],
  // },

  // {
  //   name: "Sellers",
  //   icon: duotone.Seller,
  //   children: [
  //     { name: "Seller List", path: "/admin/sellers" },
  //     { name: "Seller Package", path: "/admin/seller-package" },
  //     { name: "Package Payments", path: "/admin/package-payment" },
  //     { name: "Earning History", path: "/admin/earning-history" },
  //     { name: "Payouts", path: "/admin/payouts" },
  //     { name: "Payout Request", path: "/admin/payout-request" },
  //   ],
  // },

  // { type: "label", label: "Vendor" },
  // {
  //   name: "Earnings",
  //   icon: duotone.ProjectChart,
  //   children: [
  //     { name: "Earning History", path: "/vendor/earning-history" },
  //     { name: "Payouts", path: "/vendor/payouts" },
  //     { name: "Payout Request", path: "/vendor/payout-requests" },
  //     { name: "Payout Settings", path: "/vendor/payout-settings" },
  //   ],
  // },

  {
    name: "Balance de paiement",
    icon: duotone.Refund,
    path: "/vendor/refund-request",
  },

  // {
  //   name: "Reviews",
  //   icon: duotone.Review,
  //   path: "/vendor/reviews",
  // },

  {
    name: "Shop Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/shop-settings",
  },

  // {
  //   name: "Support Tickets",
  //   icon: duotone.ElementHub,
  //   path: "/vendor/support-tickets",
  // },

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
