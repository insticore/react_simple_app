import React, { useState } from 'react'
import { Card as CardComponent, Button } from 'antd'
import ReactCardFlip from 'react-card-flip'
import { Link } from "react-router-dom";

const { Meta } = CardComponent

export const Card = ({ el, onPutItem }) => {
    const [isFlipped, changeFlipped] = useState(false)
    const onChangeFlipped = () => {
        changeFlipped(!isFlipped)
    }
    const onPutItemClick = (btn) => {
        skipButtonClick(btn)
        onPutItem(el)
    }

    const skipButtonClick = btn => btn.stopPropagation()

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <CardComponent hoverable
                style={{ width: 304 }}

                cover={<img alt="example" src={el.image} />}
                onClick={onChangeFlipped}
                actions={[
                    <Button onClick={onPutItemClick}>Add to cart</Button>,
                    <Button type="secondary" contentEditable="false" onClick={skipButtonClick}>${el.price}</Button>
                ]}
            >
                <Meta title={el.name} />
            </CardComponent>

            <CardComponent hoverable
                style={{ width: 304 }}
                title={el.name}
                onClick={onChangeFlipped}
                extra={<Link to={"/details/" + el.id}>More</Link>}
                actions={[
                    <Button onClick={onPutItemClick}>Add to cart</Button>,
                    <Button type="secondary"  contentEditable="false" onClick={skipButtonClick}>${el.price}</Button>
                ]}
            >
                <div style={{ height: 263 }}>some discription here</div>
            </CardComponent>
        </ReactCardFlip>
    )
}