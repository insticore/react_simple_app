import React from 'react'
import { Button } from 'antd'

export const AmountPicker = ({ amount, onAmountChange }) => {
    const onAdd = () => {
        onAmountChange(true)
    }
    const onSubstract = () => {
        onAmountChange(false)
    }
    return (
        <div>
            <Button type="primary" onClick={onSubstract}>-</Button>
            <Button type="secondary" contentEditable="false">{amount}</Button>
            <Button type="primary" onClick={onAdd}>+</Button>
        </div>
    )
}