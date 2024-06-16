import React from "react"
import { QUICK_OFFERS } from "../../lib/consts/products"
import CountdownTimer from "../CountdownTimer"
import ProductCardWithDiscount from "../ProductCardWithDiscount"

function QuickDeals() {
    return (
        <div className="container mx-auto my-6 border border-gray-300 bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-300">
            {/* Section de gauche avec l'image de fond et le compte à rebours */}
            <div
                className="p-3 pr-12 min-h-[14rem] lg:w-[18rem] flex flex-col bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/offer-bg.png')" }}
            >
                <h3 className="text-xl font-medium text-gray-800">Deals and offers</h3>
                <p className="leading-tight text-gray-600 font-normal text-base">Hygiene equipments</p>
                <div className="pt-6">
                    <CountdownTimer />
                </div>
            </div>

            {/* Section de droite avec les cartes de produits */}
            <div className="flex-1 flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-300">
                {QUICK_OFFERS.map((product) => (
                    <ProductCardWithDiscount key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default QuickDeals
