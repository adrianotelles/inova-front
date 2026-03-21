import openWhats from '@shared/constants/whats.constants';
import type { ProductModel } from '@shared/models/product.model';
import { memo } from 'react';

const ProductCard = (product: ProductModel) => {
    return (
        <a
            className="card bg-base-100 shadow-sm"
            href={openWhats(`Quero fazer um orçamento da peça ${product.title}`)}
            target='_blank'>
            <figure className="w-full object-cover h-60">
                {
                    product.photo &&
                    <img
                        loading="lazy"
                        src={product.photo}
                        className="w-full h-full object-cover object-center"
                        alt={product.title} />
                    ||
                    !product.photo &&
                    <div className="w-full h-full object-cover object-center"></div>
                }
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
            </div>
        </a>
    )
}

export default memo(ProductCard);