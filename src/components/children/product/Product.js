import React, { useState } from "react";
import "./Product.scss";
import {
    Card, CardContent,
    Image, Media, MediaContent, Subtitle,
    MediaLeft, Title, MediaRight, CardFooterItem, CardFooter
} from "bloomer";
import { withRouter } from "react-router";
import { PRODUCT_IMAGE } from "../../../constants";

const Product = (props) => {

    const [showAction, setShowAction] = useState(false);
    const [productState] = useState({
        ...props,
        image: PRODUCT_IMAGE + props.name.toLowerCase().replace(' ', '') + '.jpg'
    });

    const previewhandler = () => {


        const { history } = props;

        history.push({
            pathname: "/product",
            search: "?pid=" + props.id,
            state: {
                id: productState.id,
                index: productState.index,
                isAvailable: productState.isAvailable,
                sku: productState.sku,
                name: productState.name,
                price: productState.price,
                image: productState.image,
                description: productState.description,
                quantity: productState.quantity
            }
        });
    };
    const addToCartHandler = () => {
        console.log('count', productState.quantity + 1);
    }

    const nodata = "***";
    const fireTrucked = (name) => name.length > 10 ? name.slice(0, 8) : name;

    return (
        <div className="">
            <div className="promo-product" onMouseLeave={() => setShowAction(!showAction)} onMouseOver={() => setShowAction(!showAction)}>
               <Card className={productState.quantity === 0 && productState.isNotPromo ? "disabled" : "rounded"}>
                        <CardContent>
                            <Media>
                                <MediaLeft>
                                    <Image isSize="48x48" src={productState.image} alt="item" />
                                </MediaLeft>
                                <MediaContent>
                                    <Title isSize={4}>{fireTrucked(productState.name)}</Title>
                                    {!productState.isNotPromo && <Subtitle isSize={6}>{productState.price} <span className="price">ZAR</span></Subtitle>}
                                </MediaContent>
                                <MediaRight>
                                    <p className="price" tag="h6"> {props.description ? `${fireTrucked(props.description)}...` : nodata}</p>
                                </MediaRight>
                            </Media>
                            {productState.isNotPromo &&
                                <Media >
                                    <MediaRight>
                                        <p className="price" tag="h6"><strong>Price: </strong> {productState.price}<span className="price"> ZAR</span></p>
                                    </MediaRight>
                                    <MediaRight>
                                        <p className="price" tag="h6"><strong>Quantity: </strong> {productState.quantity}</p>
                                    </MediaRight>
                                </Media>
                            }
                            {!productState.isNotPromo && <Subtitle isSize={6}> only {props.quantity} left </Subtitle>}
                        </CardContent>
                        <CardFooter>
                        <CardFooterItem onClick={previewhandler}>view product</CardFooterItem>
                        <CardFooterItem onClick={addToCartHandler}>add to cart</CardFooterItem>
                        </CardFooter>
                    </Card>
            </div>
        </div>
    )
};

export default withRouter(Product);