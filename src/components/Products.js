import React, { Component } from "react";
import {
    Content, Box, Container, Panel, PanelHeading, PanelBlock, Control, Input, Icon} from "bloomer";
import "./Products.scss";
import Slider from "react-slick";
import Product from "./children/product/Product";
import { products } from "./../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaginatedData from "./utils/PaginatedData";

class Products extends Component {

    state = {
        products: []
    }

    componentDidMount() {


        this.setState({
            products: products ? products : []
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            className: "slider variable-width",
            variableWidth: true,
            adaptiveHeight: true
        };


        const promoProducts = this.state.products.map((product, index) => {

            //only promote the first 11 products
            return index <= 6 ? <Product key={product.id}
                id={product.id}
                name={product.name}
                price={product.unitPrice}
                image={product.image}
                packaging={product.description}
                quantity={product.isAvailable ? product.unitPrice : 0} /> : null
        });
        console.log("promo ", promoProducts)
        return (
            <div >
                <Container className="children-content">
                    <Panel>
                        <PanelHeading>Products Main Page</PanelHeading>
                        <PanelBlock>
                            <Control hasIcons="left" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Icon className="fa fa-search small" />
                                <Input placeholder="Search" />
                            </Control>
                        </PanelBlock>

                    </Panel>
                    <Slider {...settings}>
                        {promoProducts}
                    </Slider>
                    <br /><br />
                    <Content className="mx-default">
                        <p className="text-left stock-in-store" tag="h4">Available in store:</p>
                    </Content>

                    <Box className="mx-default">
                        <PaginatedData products />
                    </Box>
                </Container>
            </div>
        )
    }
};

export default Products;