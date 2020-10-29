import React, { useEffect, useState } from "react";
import "./Header.scss";
import {
    NavbarBrand, Icon, Button, Control, Field, NavbarLink, NavbarDivider, NavbarDropdown,
    Navbar, NavbarEnd, NavbarStart, NavbarBurger, NavbarItem, NavbarMenu, NavRight
} from "bloomer";
import logo from "./../../assets/logo.png";
import { useHistory, withRouter } from "react-router-dom";


const Header = (props) => {

    const onClickNav = () => {
        setIsActive(!isActive);
    };
    const [isActive, setIsActive] = useState();
    const [itemsInCart, setItemsInCart] = useState([]);
    useEffect(() => {
        setItemsInCart(props.itemsInCart)
    })

    let history = useHistory();
    const goToScreen = (screen) => history.push(`/${screen}`);
    const getCounter = itemsInCart.length;

    return (

        <Navbar style={{ border: "solid 1px #00D1B2", margin: "0" }}>
            <NavbarBrand>
                <NavbarItem onClick={() => goToScreen("")}>
                    <img className="item" src={logo} style={{ marginRight: 5, borderRadius: 15 }} alt="logo" />
                </NavbarItem>
                <NavbarItem isHidden="desktop">
                    <Icon className="fa fa-github" />
                </NavbarItem>
                <NavbarItem isHidden="desktop">
                    <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
                </NavbarItem>
                <NavRight>
                    <NavbarItem isHidden="desktop">

                        <Field isGrouped>
                            <Control>
                                <Button onClick={() => goToScreen("cart")} id="twitter" target="_blank">
                                    {itemsInCart.length > 0 && <span className="cart-counter">{getCounter}</span>}
                                    <Icon isSize="small" className="fa fa-shopping-cart cart" />
                                </Button>
                            </Control>
                        </Field>
                    </NavbarItem>
                </NavRight>
                <NavbarBurger isActive={isActive} onClick={onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive} onClick={onClickNav}>
                <NavbarStart>
                    <NavbarItem onClick={() => goToScreen("")}>Home</NavbarItem>

                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink href="#/documentation">Browse</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem className="item" onClick={() => goToScreen("about")}>About Us</NavbarItem>
                            <NavbarItem className="item" onClick={() => goToScreen("services")}>Our Services</NavbarItem>
                            <NavbarItem className="item" onClick={() => goToScreen("jobs")}>Jobs</NavbarItem>
                            <NavbarDivider />
                            <NavbarItem className="item" onClick={() => goToScreen("contact")}>Contact Us</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <span className="item" onClick={() => goToScreen("products")}>
                            Products
                        </span>
                    </NavbarItem>
                </NavbarStart>
                <NavbarEnd isHidden="touch">

                    <NavbarItem href="https://twitter.com/siya_ndovela" >
                        <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
                    </NavbarItem>
                    <NavbarItem >

                        <Field isGrouped>
                            <Control>
                                <Button onClick={() => goToScreen("cart")} id="twitter" target="_blank">
                                    {itemsInCart.length > 0 ? <span className="cart-counter">{getCounter}</span> : <span>bag</span>}
                                    <Icon className="fa fa-shopping-cart cart" />
                                </Button>
                            </Control>
                        </Field>

                    </NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    )
};

export default withRouter(Header);
