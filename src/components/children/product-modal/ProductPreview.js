import React, { useState } from 'react';
import './ProductPreview.scss';
import {
    Card, ModalCardHeader, Box, Media, MediaLeft, Image,
    ModalCardFooter, Delete, ModalCardTitle, Button, ModalCardBody, MediaContent
} from 'bloomer';
import { MediaRight } from 'bloomer/lib/components/Media/MediaRight';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Section } from 'bloomer/lib/layout/Section';

const Preview = (props) => {

    console.log('pro ', props);
    const [previewState] = useState(props.location.state);
    const closePreview = () => {

        const { history } = props;
        history.push('/products');
    }

    return (
        <div className='preview mx-default children-content'>
            <Box>
                <Card className='preview-product'>
                <ModalCardHeader>
                <ModalCardTitle>{previewState.name}</ModalCardTitle>
                <Delete onClick={closePreview}/>
            </ModalCardHeader>
            <ModalCardBody>
            {previewState.quantity > 0 ?
            <span className='price'>In stock</span> : <span className='out-of-stock'>Out of stock</span>}
            <Media>
                <MediaLeft>
                    <Box>
                        <Image className='preview-image' isSize='128x128' src={previewState.image} alt='item' />
                    </Box>
                </MediaLeft>
                <MediaRight>
                    <Section>
                    <Subtitle isSize={6}>* Get it for {previewState.price} <span className='price'>ZAR</span> only</Subtitle>
                    <Subtitle isSize={6}>* Only limited to {previewState.quantity} per store</Subtitle>
                    
                    </Section>
                </MediaRight>
            </Media>
            <Media>
                <MediaContent>
                    <Subtitle isSize={6}>* {`${previewState.description}, ${previewState.sku}`} </Subtitle>
                </MediaContent>
            </Media>
            </ModalCardBody>
                    <ModalCardFooter isDisplay='block' >
                        <Button onClick={() => {}} isColor='success'>+</Button>
                        <Button onClick={() => {}} isColor='danger'>-</Button>
                    </ModalCardFooter>
                </Card>
            </Box>
        </div>
    )
};

export default Preview;