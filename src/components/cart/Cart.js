import React, { useEffect, useState } from 'react';
import "./Cart.scss";
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, ModalCardBody, ModalCardFooter, Button, Delete, Media, MediaLeft, Image, MediaContent, Title, MediaRight, Subtitle, Input, Icon } from 'bloomer';
import { useHistory } from 'react-router-dom';
import { FIRE_TRUCKED, PRODUCT_IMAGE } from '../../constants';
import { connect, useDispatch, useSelector } from "react-redux";
import { selectCartItems, removeItem, updateQuantity } from '../../redux/cartSlice';

const Cart = (cart) => {

    const dispatch = useDispatch();
    const [items, setItems] = useState(useSelector(selectCartItems));

    let history = useHistory();
    const [isActive, setIsActive] = useState(true)
    const hideModal = () => {
        setIsActive(!isActive);
        history.push('/products');
    };
    const subTotal = items ? items.reduce((sum, i) => sum + i.price * (i.cartQuantity ? i.cartQuantity : 0), 0) : 0;
    const handleChange = (event) => {
        let item = items.find(i => i.index == event.target.id);
        item = {
            ...item,
            cartQuantity: parseInt(event.target.value)
        }

        dispatch(updateQuantity(item));
        setItems(items);
    }
    const _removeItem = item => {
        dispatch(removeItem(item))

    };

    useEffect(() => {
        setItems(cart.cart.items);
    })

    return (
        <Modal isActive={isActive}>
            <ModalBackground />
            <ModalCard>
                <ModalCardHeader>
                    <ModalCardTitle>Your Secured Bag</ModalCardTitle>
                    <Delete onClick={hideModal} />
                </ModalCardHeader>
                <ModalCardBody>
                    {
                        items.length ? items.map((item) => {
                            return (
                                <Media key={item.id} id={item.id}>
                                    <MediaLeft>
                                        <Image isSize="48x48" src={PRODUCT_IMAGE + item.name.toLowerCase().replace(' ', '') + '.jpg'} alt="item" />
                                    </MediaLeft>
                                    <MediaContent>
                                        <Title isSize={4}>{FIRE_TRUCKED(item.name)}</Title>
                                        {item.cartQuantity ? <Subtitle isSize={6}>{`${item.cartQuantity ? item.cartQuantity : 0} x R${item.price}`}</Subtitle> :
                                            <Subtitle isSize={6} className="out-of-stock">out of stock</Subtitle>}
                                    </MediaContent>
                                    <Input id={item.index} min="1" type="number" value={item.cartQuantity?item.cartQuantity : ""} className="quntity-input" onChange={handleChange} placeholder="quantity" />
                                    <MediaRight>
                                        <Button className="cart-action" onClick={()=>_removeItem(item)} isColor="danger">
                                            <span className="action-text">X</span>
                                        </Button>
                                    </MediaRight>
                                </Media>
                            )
                        }) : ""
                    }
                    {
                        items.length ? <span className="price pt-2">Total: R{subTotal ? subTotal.toFixed(2) : 0}</span> :
                            <div className="no-data">
                                <Icon className="fa fa-thumbs-down" />
                                <p> You bag seems to be empty</p>
                            </div>
                    }
                </ModalCardBody>
                <ModalCardFooter isDisplay="block" >
                    <Button isColor='success'>Shop</Button>
                    <Button onClick={hideModal} isColor='warning'>Cancel</Button>
                </ModalCardFooter>
            </ModalCard>
        </Modal>
    )
};

function mapStateToProps(state) {
    return { cart: state.cart };
}
export default connect(mapStateToProps)(Cart);