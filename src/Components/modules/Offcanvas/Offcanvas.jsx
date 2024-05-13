import React, { useState } from 'react'
import './Offcanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function OffcanvasSideBar({ show, onHide }) {

    return (
        <>
            <Offcanvas show={show} onHide={onHide} className="offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
