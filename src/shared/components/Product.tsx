import ProductCard from "@shared/components/cards/ProductCard";
import type { ProductModel } from "@shared/models/product.model";

const ProductList = ({ products }: { products: ProductModel[] }) => {
  return (
    <div className="justify-center grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mx-10 lg:mx-0 gap-5">
      {
        products.length > 0 ?
          products.map((product) => (
            <ProductCard {...product} key={product.id} />
          )) : <p className="text-center text-lg w-full col-span-full">Produto não encontrado</p>
      }
    </div>
  )
}

export default ProductList;