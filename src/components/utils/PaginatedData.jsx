import React from 'react';
import Product from '../children/product/Product';
import { products } from './../../data/data';
import './PaginatedData.scss';

class PaginatedData extends React.Component {
    constructor() {
        super();
        this.state = {
            products,
            currentPage: 1,
            productsPerPage: 4
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { products, currentPage, productsPerPage } = this.state;

        // Logic for displaying products
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const renderProducts = currentProducts.map(product => {

            return <Product key={product.id} isNotPromo={product.isSale}
                id={product.id}
                name={product.name}
                image={product.image}
                isNotPromo={true}
                price={product.unitPrice}
                packaging={product.description}
                quantity={product.isAvailable ? product.unitPrice : 0}
            />
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    className={number === currentPage ? "action-button" : "button"}
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul className="content-horizontally">
                    {renderProducts}
                </ul>
                <ul className="control-horizontally" id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default PaginatedData;