import React, { useState } from 'react'
import { Form, Button, Card, Row } from 'react-bootstrap'
import BacappApi from '../../api/BacappApi'
import { Link } from "react-router-dom";

const Login = ({ modal, setModal }) => {
    const handleClose = () => setModal(false);
    const [user, setUser] = useState({ email: '', password: '' })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const signIn = (e) => {
        e.preventDefault()
        BacappApi.postToken(user)
        setUser({ email: '', password: '' })
    }
    // const signOn = (e) => {
    //     e.preventDefault()
    //     console.log('clik')
    //     // BacappApi.postLogout(user)
    //     setUser({ email: '', password: '' })
    // }
    return (<>
        <Card className='p-5'>
            <h2 className='m-auto'>Авторизация</h2>
            <Form className='mt-3 container d-flex flex-column'>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        value={user.email}
                        onChange={handleInput}
                        name='email'
                        type="email"
                        placeholder="Введите email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control
                        value={user.password}
                        onChange={handleInput}
                        name='password'
                        type="password"
                        placeholder="Введите пароль" />
                </Form.Group>
                <Row className='my-3'>
                    <div>Нет аккаунта?
                        <Link to="/registre"
                            className="link-success px-3"
                            onClick={handleClose}
                        >Зарегистрируйтесь</Link>
                    </div>
                </Row>
                <Button onClick={signIn} className="mx-3 " variant="secondary" type='submit'> Войти </Button>
            </Form>
        </Card>

    </>
    )
}
export default Login;

