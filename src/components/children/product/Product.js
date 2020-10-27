import React, { useState } from "react";
import "./Product.scss";
import {
    Card, CardContent,
    Image, Media, MediaContent, Subtitle,
    MediaLeft, Title, MediaRight
} from "bloomer";
    import { withRouter } from "react-router";

const Product = (props) => {

    const [productState] = useState({
        ...props,
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
    }

    const nodata = "***";
    const fireTrucked = productState.name.length > 10 ? productState.name.slice(0, 8) : productState.name;
    return (
        <div className="">
            <div className="promo-product">
                <Card className={productState.quantity === 0 && productState.isNotPromo ? "disabled" : "rounded"} onClick={previewhandler}>
                    <CardContent>
                        <Media>
                            <MediaLeft>
                                <Image isSize="48x48" src={productState.image} alt="item" />
                            </MediaLeft>
                            <MediaContent>
                                <Title isSize={4}>{fireTrucked}</Title>
                                {!productState.isNotPromo && <Subtitle isSize={6}>{productState.price} <span className="price">ZAR</span></Subtitle>}
                            </MediaContent>
                            <MediaRight>
                                <p className="price" tag="h6"> {props.description ? props.description : nodata}</p>
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
                </Card>
            </div>
        </div>
    )
};

export default withRouter(Product);