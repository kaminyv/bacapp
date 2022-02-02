import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import BacappApi from '../../api/BacappApi'

const Registre = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '', is_master: '0' })
    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleCheckbox = (e) => {
        const checked = e.target.checked
        {
            checked
                ? setUser({ ...user, is_master: 1 })
                : setUser({ ...user, is_master: 0 })
        }
    }
    const rememberLogin = (e) => {
        e.preventDefault();
        BacappApi.postRegistre(user)
        setUser({ name: '', email: '', password: '', is_master: '0' })
    };
    return (<>
        <Card className='p-5 m-auto w-50'>
            <h2 className='m-auto'>Регистрация:</h2>
            <Form className='mt-3 container d-flex flex-column'>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label >Имя:</Form.Label>
                    <Form.Control
                        value={user.name}
                        onChange={handleInput}
                        name='name'
                        type='text'
                        placeholder="Введите имя"
                    />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check
                        name='checkbox'
                        type="checkbox"
                        onChange={handleCheckbox}
                        label="Я мастер" />
                </Form.Group>
                <Button onClick={rememberLogin} className="mx-3 " variant="secondary" type='submit'>Зарегистрируйтесь </Button>
            </Form>
        </Card>
    </>
    )
}
export default Registre;

