import React from 'react'
import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlinePlusCircle,
	HiOutlineViewList,
	HiOutlinePencilAlt,
	HiOutlineEye
} from 'react-icons/hi'
import { GiWireframeGlobe } from "react-icons/gi";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '',
		icon: <HiOutlineCube />,
		children: [
			{
				key: 'new-product',
				label: 'New Product',
				path: '/dashboard/products/new',
				icon: <HiOutlinePlusCircle />,
			},
			{
				key: 'edit-product',
				label: 'Edit Product',
				path: '/dashboard/products/:id/edit',
				icon: <HiOutlinePencilAlt />,
			},
			{
				key: 'Product Page',
				label: 'Product Page',
				path: '/dashboard/products/:id/preview',
				icon: <HiOutlineEye />,
			},
			{
				key: 'products-list',
				label: 'Products List',
				path: '/dashboard/products/list',
				icon: <HiOutlineViewList />,
			}
		]
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/dashboard/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/dashboard/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/dashboard/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/dashboard/messages',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'wireframes',
		label: 'Wireframes',
		path: '/dashboard/wireframes',
		icon: <GiWireframeGlobe />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/dashboard/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

export const CATEGORY_LINKS = [
	{
		label: "Mobile Phones",
		path: "/",
	},
	{
		label: "Laptops & Desktops",
		path: "/",
	},
	{
		label: "PC Games",
		path: "/",
	},
	{
		label: "Home & Furnitures",
		path: "/",
	},
]