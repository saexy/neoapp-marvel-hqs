import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import CartItem from './CartItem'

const CartItems = () => {

    const data = JSON.parse(localStorage.getItem("cart"))

    const navigate = useNavigate()

    const listData = data.map((dataCartItem) => {

        let description = "This HQ doesn't have a description"
        if(!!dataCartItem.description){
            description = dataCartItem.description.replaceAll('<br>', '\n')
        }

        return (<CartItem id={dataCartItem.id} image={dataCartItem.image} title={dataCartItem.title} description={description}/>)
    })

    const handleFinishPurchase = () => {
        const newCart = JSON.stringify([])
        localStorage.setItem("cart", newCart)

        navigate(`/`)
    }

    const handleContinuePurchase = () => {
        navigate(`/`)
    }

    return (
        <>
            <Container>
                {data.length <= 0 &&
                    <Row>
                        <Col md={12}>
                            <h1 class="m-5 p-5 text-white">Você não tem itens adicionados no carrinho no momento.</h1>
                        </Col>
                    </Row>
                }
                {data.length > 0 &&
                    <Row>
                        {listData}
                        <Col md={12} className='mt-3 d-flex justify-content-center align-items-center'>
                            <Button variant="primary" className='m-3' onClick={() => (handleContinuePurchase())}>
                                Continuar comprando
                            </Button>
                            <Button variant="success" className='m-3' onClick={() => (handleFinishPurchase())}>
                                Finalizar compra
                            </Button>
                        </Col>
                    </Row>
                }
                
            </Container>
        </>
    )
}
 
export default CartItems