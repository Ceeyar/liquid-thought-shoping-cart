
import React from 'react';
import './PaginatedData.scss';
import { Icon } from 'bloomer';
import Product from '../children/product/Product';

class PaginatedData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            currentPage: 1,
            productsPerPage: 4
        };
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            products: nextProps.products
        })
    }

    render() {
        const { products, currentPage, productsPerPage } = this.state;

        // Logic for displaying products
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const renderProducts = currentProducts.map(product => {

            return <Product key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                index={product.index}
                isAvailable={product.isAvailable}
                sku={product.sku}
                isNotPromo={true}
                price={product.unitPrice}
                description={product.description}
                quantity={product.isAvailable ? Math.ceil(Math.random() * 100) : 0}
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
                    onClick={this.handleClick}>
                    {number}
                </li>
            );
        });

        return (
            <div>
                {renderProducts.length ? [<ul className="content-horizontally">
                    {renderProducts}
                </ul>,
                <ul className="control-horizontally" id="page-numbers">
                    {renderPageNumbers}
                </ul>] : <div className="no-data">
                    <Icon className="fa fa-thumbs-down" />
                    <p> Your Search Returned No Products</p>
                </div>}
            </div>
        );
    }
}

export default PaginatedData;