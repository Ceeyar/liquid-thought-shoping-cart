import React, { useState } from "react";
import "./ProductPreview.scss";
import {
    Card, ModalCardHeader, Box, Media, MediaLeft, Image,
    ModalCardFooter, Delete, ModalCardTitle, Button, ModalCardBody, MediaContent
} from "bloomer";
import { MediaRight } from "bloomer/lib/components/Media/MediaRight";
import { Subtitle } from "bloomer/lib/elements/Subtitle";
import { Section } from "bloomer/lib/layout/Section";
import { addItem } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Preview = (props) => {

    const dispatch = useDispatch();
    const [product] = useState(props.location.state);
    const { history } = props;
    const closePreview = () => {

        history.push("/products");
    }
    const addToCartHandler = () => {
        dispatch(addItem(product));
    }

    if (!product) {
        //prevent visiting product-page without payload
        history.goBack();
    }
    return (
        <div className="preview mx-default children-content">
            <Box>
                <Card className="preview-product">
                    <ModalCardHeader>
                        <ModalCardTitle>{product.name}</ModalCardTitle>
                        <Delete onClick={closePreview} />
                    </ModalCardHeader>
                    <ModalCardBody>
                        {product.quantity > 0 ?
                            <span className="price">In stock</span> : <span className="out-of-stock">Out of stock</span>}
                        <Media className="res-parent">
                            <MediaLeft>
                                <Box>
                                    <Image className="preview-image" isSize="128x128" src={product.image} alt="item" />
                                </Box>
                            </MediaLeft>
                            <MediaRight className="res-text">
                                <Section>
                                    <Subtitle isSize={6}>* Get it for {product.price} <span className="price">ZAR</span> only</Subtitle>
                                    <Subtitle isSize={6}>* Only limited to {product.quantity} per store</Subtitle>
                                    <Subtitle isSize={6}>* sku: {product.sku} </Subtitle>

                                </Section>
                            </MediaRight>
                        </Media>
                        <Media>
                            <MediaContent>
                                <Subtitle className="text-center" isA isSize={6}>{product.description}</Subtitle>
                            </MediaContent>
                        </Media>
                    </ModalCardBody>
                    <ModalCardFooter isDisplay="block" >
                        <Button isColor="success" isSize="medium" onClick={product.quantity > 0 ? addToCartHandler : {}}>add me to cart</Button>
                    </ModalCardFooter>
                </Card>
            </Box>
        </div>
    )
};

export default Preview;