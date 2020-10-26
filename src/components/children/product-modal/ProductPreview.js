import React, { useState } from 'react';
import './ProductPreview.scss';
import {
    Card, ModalCardHeader, Box, Media, MediaLeft, Image,
    ModalCardFooter, Delete, ModalCardTitle, Button, ModalCardBody
} from 'bloomer';
import { MediaRight } from 'bloomer/lib/components/Media/MediaRight';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { Section } from 'bloomer/lib/layout/Section';

const Preview = (props) => {

    console.log('pro ', props);
    const [previewState] = useState(props.location.state);
    const closePreview = () => {

        const { history } = props;
        history.push('/');
    }

    return (
        <div className='preview mx-default children-content'>
            <Box>
                <Card className='preview-product'>

                    <ModalCardFooter isDisplay='block' >
                        <Button isColor='success'>+</Button>
                        <Button isColor='danger'>-</Button>
                    </ModalCardFooter>
                </Card>
            </Box>
        </div>
    )
};

export default Preview;