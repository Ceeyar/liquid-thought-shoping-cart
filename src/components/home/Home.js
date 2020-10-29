import React from "react";
import {
    Message, MessageHeader, Container, ModalClose, Modal, ModalContent, Delete
} from "bloomer";
import "./Home.scss";
import { ModalBackground } from "bloomer/lib/components/Modal/ModalBackground";
import { MessageBody } from "bloomer/lib/components/Message/MessageBody";

const Home = () => {

    return (
        <div className="children-content">
            <Container className="pb">
                <Modal isActive>
                    <ModalBackground />
                    <ModalContent>
                        <Message>
                            <MessageHeader>
                                <p>Welcome to the assessment</p>
                                <Delete />
                            </MessageHeader>
                            <MessageBody>
                                Not really sure what to <strong>show</strong>,
                                here. Let's try vising the <a href="products">products</a> page maybe we'll find something to look at.
                                Other pages that are not included in the test include <strong>About us</strong> - <strong>Our Services</strong> -
                            <strong> Jobs</strong> and <strong>Contact Us</strong>.
                        </MessageBody>
                        </Message>
                    </ModalContent>
                    <ModalClose />
                </Modal>
            </Container>
        </div>
    )
};

export default Home;