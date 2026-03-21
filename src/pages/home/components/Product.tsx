import { ProductService } from "@services/products.service";
import ProductList from "@shared/components/Product";
import type { ProductModel } from "@shared/models/product.model";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const productService = new ProductService();
const Product = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    const navigate = useNavigate();
    function onClick() {
        navigate('/produtos');
    }


    useEffect(() => {
        async function init() {
            const data = await productService.findLimit<ProductModel>(4);
            setProducts(data);
        }

        init();
    }, []);


    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto">
                <h1 className="text-[40px] font-semibold text-center mb-20">
                    Nossos Produtos
                </h1>
                {
                    products.length > 0 &&
                    <ProductList products={products} />
                    || <p className="text-center text-lg w-full col-span-full">Produto não encontrado</p>
                }
                <div className="text-center mt-20">
                    <button className="btn btn-primary rounded-lg px-10" onClick={onClick}>
                        Ver mais
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Product;