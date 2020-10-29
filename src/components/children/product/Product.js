import React, { useState } from "react";
import "./Product.scss";
import {
    Card, CardContent,
    Image, Media, MediaContent, Subtitle,
    MediaLeft, Title, MediaRight, CardFooterItem, CardFooter
} from "bloomer";
import { withRouter } from "react-router";
import { FIRE_TRUCKED, PRODUCT_IMAGE, NO_DATA } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, addItem } from "../../../redux/cartSlice";
import { increment, selectCount } from "../../../redux/counterSlice";
import { isMobile } from "bloomer/lib/bulma";


const Product = (props) => {

    const dispatch = useDispatch();
    const [showAction, setShowAction] = useState(false);
    const [product] = useState({
        ...props,
        image: PRODUCT_IMAGE + props.name.toLowerCase().replace(' ', '') + '.jpg'
    });
    
    const previewhandler = () => {

        const { history } = props;

        history.push({
            pathname: "/product",
            search: "?pid=" + props.id,
            state: {
                id: product.id,
                index: product.index,
                isAvailable: product.isAvailable,
                sku: product.sku,
                name: product.name,
                price: product.price.toFixed(2),
                image: product.image,
                description: product.description,
                quantity: product.quantity
            }
        });
    };
    const addToCartHandler = (productArg) => {

        const product = {...productArg}
        delete product.style
        delete product.history
        delete product.match
        delete product.tabIndex
        delete product.location
        
        dispatch(addItem(product));
        dispatch(increment());
    }
 
    return (
        <div className="">
            <div className="promo-product" onMouseLeave={() => setShowAction(!showAction)} onMouseOver={() => setShowAction(!showAction)}>
                <Card className={product.quantity === 0 && product.isNotPromo ? "disabled" : "rounded"}>
                    <CardContent>
                        <Media>
                            <MediaLeft>
                                <Image isSize="48x48" src={product.image} alt="item" />
                            </MediaLeft>
                            <MediaContent>
                                <Title isSize={isMobile ? 6 : 4}>{FIRE_TRUCKED(product.name)}</Title>
                                {!product.isNotPromo && <Subtitle isSize={6}>{product.price.toFixed(2)} <span className="price">ZAR</span></Subtitle>}
                            </MediaContent>
                            <MediaRight>
                                <p className="price" tag="h6"> {product.description ? `${FIRE_TRUCKED(product.description)}...` : NO_DATA}</p>
                            </MediaRight>
                        </Media>
                        {product.isNotPromo &&
                            <Media >
                                <MediaRight>
                                    <p className="price" tag="h6"><strong>Price: </strong> {product.price.toFixed(2)}<span className="price"> ZAR</span></p>
                                </MediaRight>
                                <MediaRight>
                                    <p className="price" tag="h6"><strong>Quantity: </strong> {product.quantity}</p>
                                </MediaRight>
                            </Media>
                        }
                        {!product.isNotPromo && <Subtitle isSize={6}> only {product.quantity} left </Subtitle>}
                    </CardContent>
                    <CardFooter>
                        <CardFooterItem onClick={previewhandler}>view product</CardFooterItem>
                        <CardFooterItem onClick={() => product.quantity > 0 ? addToCartHandler(product) : {}}>add to cart</CardFooterItem>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
};

export default withRouter(Product);