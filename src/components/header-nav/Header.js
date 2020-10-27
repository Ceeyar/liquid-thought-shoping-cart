import React, { useState } from "react";
import "./Header.scss";
import {
    NavbarBrand, Icon, Button, Control, Field, NavbarLink, NavbarDivider, NavbarDropdown, 
    Navbar, NavbarEnd, NavbarStart, NavbarBurger, NavbarItem, NavbarMenu
} from "bloomer";
import logo from "./../../assets/logo.png";

const Header = () => {

    const onClickNav = () => {
        setIsActive(!isActive);
     };
     const [ isActive, setIsActive ] = useState();
     const [ show, setShow ] = useState(false);
     const showCart = () => {
        setShow(!show);
     }

    return (

        <Navbar style={{ border: "solid 1px #00D1B2", margin: "0" }}>
            <NavbarBrand>
                <NavbarItem>
                    <img src={logo} style={{ marginRight: 5, borderRadius: 15 }} />
                </NavbarItem>
                <NavbarItem isHidden="desktop">
                    <Icon className="fa fa-github" />
                </NavbarItem>
                <NavbarItem isHidden="desktop">
                    <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
                </NavbarItem>
                <NavbarBurger isActive={isActive} onClick={onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive} onClick={onClickNav}>
                <NavbarStart>
                    <NavbarItem href="/">Home</NavbarItem>

                    <NavbarItem hasDropdown isHoverable>
                        <NavbarLink href="#/documentation">Browse</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem href="about">About Us</NavbarItem>
                            <NavbarItem href="services">Our Services</NavbarItem>
                            <NavbarItem href="jobs">Jobs</NavbarItem>
                            <NavbarDivider />
                            <NavbarItem href="contact">Contact Us</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                    <NavbarItem href="/products">Products</NavbarItem>
                </NavbarStart>
                <NavbarEnd>

                    <NavbarItem href="https://twitter.com/siya_ndovela" isHidden="touch">
                        <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
                    </NavbarItem>
                    <NavbarItem href="/cart">
                        <Field isGrouped>
                            <Control>
                                <Button id="twitter" target="_blank">
                                    <Icon className="fa fa-cart-arrow-down" />
                                    <span>Checkout</span>
                                </Button>
                            </Control>
                        </Field>
                    </NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    )
};

export default Header;
