import React, { useState } from 'react';
import "./Cart.scss";
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, ModalCardBody, ModalCardFooter, Button, Delete, Media, MediaLeft, Image, MediaContent, Title, MediaRight, Subtitle } from 'bloomer';
import { useHistory } from 'react-router-dom';
import { FIRE_TRUCKED, NO_DATA, PRODUCT_IMAGE } from '../../constants';

const Cart = () => {
    const items = [{
        "id": "5f95dc4b366230f4a5be7dfe",
        "index": 7,
        "isSale": false,
        "isAvailable": false,
        "sku": "SKU008",
        "image": "https://via.placeholder.com/600/372c93",
        "description": "Banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa",
        "unitPrice": 287,
        "currency": "ZAR",
        "name": "Banana"
    },
    {
        "id": "5f95dc4b67f270aeabf41560",
        "index": 8,
        "isSale": true,
        "isAvailable": false,
        "sku": "SKU009",
        "image": "https://via.placeholder.com/600/c70a4d",
        "description": "Brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit.",
        "unitPrice": 298,
        "currency": "ZAR",
        "name": "Egg Plant"
    },
    {
        "id": "5f95dc4b4dded9e100a2fc37",
        "index": 9,
        "isSale": true,
        "isAvailable": true,
        "sku": "SKU0010",
        "image": "https://via.placeholder.com/600/4d564d",
        "description": "Carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.",
        "unitPrice": 309,
        "currency": "ZAR",
        "name": "Carrots"
    }
    ];
    let history = useHistory();
    const [isActive, setIsActive] = useState(true)
    const hideModal = () => {
        setIsActive(!isActive);
        history.push('/products');
    };

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
                        items.map(item => {
                            return (
                                <Media>
                                    <MediaLeft>
                                        <Image isSize="48x48" src={PRODUCT_IMAGE + item.name.toLowerCase().replace(' ', '') + '.jpg'} alt="item" />
                                    </MediaLeft>
                                    <MediaContent>
                                        <Title isSize={4}>{FIRE_TRUCKED(item.name)}</Title>
                                        <Subtitle isSize={6}>{item.quantity}</Subtitle>
                                    </MediaContent>
                                    <MediaRight>
                                        <Button onClick={() => { }} isColor="danger">-</Button>
                                    </MediaRight>
                                </Media>
                            )
                        })
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

export default Cart;