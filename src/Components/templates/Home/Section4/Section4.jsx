import React from 'react'
import './Section4.css'
import Button from '../../../modules/Button/Button'
import { Col } from 'react-bootstrap'
export default function Section4() {
    return (
        <>
            <div className="section4-wrapper">
                <Col xs={12} md={6} className="section4-left">
                    <p className="section4-title">Vegan Milk</p>
                    <p className="section4-dec">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas. Et sollicitudin ac orci phasellus egestas.
                    </p>
                    <div className="btn-section4-wrapper">
                        <Button
                            text="Order"
                        />
                    </div>
                </Col>
                <Col xs={12} md={6} className="section4-right"></Col>
            </div>
        </>
    )
}
