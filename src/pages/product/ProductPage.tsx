import { ProductService } from "@services/products.service";
import ProductList from "@shared/components/Product";
import type { ProductModel } from "@shared/models/product.model";
import { useEffect, useState } from "react";
import FilterComponent from "./components/Filter";
import type { FilterModel } from "@shared/models/filter.model";
import Doubt from "@shared/components/Doubt";
import { Helmet } from "react-helmet-async";

const productService = new ProductService();
const ProductPage = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [productsFiltered, setProductsFiltered] = useState<ProductModel[]>([]);
    const [producers, setProducers] = useState<string[]>([]);
    const [isFilter, setIsFilter] = useState<boolean>(false);

    useEffect(() => {
        async function init() {
            const data = await productService.findAll<ProductModel>();
            const item: string[] = [...new Map(data.filter((p) => p.producer).map((p) => [p.producer, p.producer])).values()] as string[];
            setProducts(data);
            setProducers(item);
        }

        init();
    }, []);

    function onFilter(filter: FilterModel) {
        let filteredItem = products;

        if (filter?.search) {
            const text = filter.search.trim().toLowerCase();
            filteredItem = filteredItem.filter((product) => product.title?.toLowerCase().includes(text));
        }

        if (filter?.producer) {
            filteredItem = filteredItem.filter((product) => filter.producer?.find((producer) => product.producer === producer));
        }

        if (!filter) {
            setIsFilter(false);
        } else {
            setIsFilter(true);
        }

        setProductsFiltered(filteredItem);
    }

    return (
        <>
            <Helmet>
                <title>Peças para Caminhões e Máquinas Pesadas | Inova Peças de Máquinas Pesadas</title>
                <meta
                    name="description"
                    content="Confira nosso catálogo completo de peças para caminhões, tratores e máquinas pesadas com os melhores preços."
                />
                <link rel="canonical" href="https://inova-pecas.com/" />
            </Helmet>
            <section className="container mx-auto">
                <h1 className="lg:text-4xl font-semibold border-b pb-5 pt-10 border-b-neutral-300 mb-15 lg:px-0 px-5 text-2xl">
                    Peças em geral
                </h1>
                <div className="lg:grid lg:grid-cols-[4fr_340px] gap-5 flex justify-center flex-col-reverse">
                    <section className="container mx-auto">
                        <section>
                            {
                                products && products.length > 0 &&
                                <ProductList products={isFilter ? productsFiltered : products} />
                                || <p className="text-center text-lg w-full col-span-full">Produto não encontrado</p>
                            }
                        </section>
                    </section>
                    <section className="lg:sticky lg:top-15 lg:mr-5 lg:h-dvh lg:overflow-auto">
                        <FilterComponent producers={producers} onFilter={onFilter} />
                        <div className="hidden lg:block">
                            <Doubt isBorder={true} />
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default ProductPage;