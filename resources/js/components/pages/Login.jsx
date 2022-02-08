import React, { useState, useContext } from 'react'
import { Form, Button, Card, Row } from 'react-bootstrap'
import BacappApi from '../../api/BacappApi'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';


const Login = () => {
    const navigate = useNavigate()
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [user, setUser] = useState({ email: '', password: '' })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const signIn = (e) => {
        e.preventDefault()
        BacappApi.postToken(user)
            .then(value => {
                // выполнение
                localStorage.setItem('token', value.data.token)
                // localStorage.setItem("userYou", JSON.stringify(value))
                // let userYou = localStorage.getItem('userYou');
                // console.log(userYou); //из JSON string
                navigate(`/user`)
                // console.log(value.data.token)
                setIsAuth(true)
            }, reason => {
                // отклонение
                navigate(`/registre`)
            })
        setUser({ email: '', password: '' })
    }
    return (<>
        <Card className='p-5 m-auto w-50'>
            <h2 className='m-auto'>Вход на сайт</h2>
            <Form className='mt-3 container d-flex flex-column'>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        value={user.email}
                        onChange={handleInput}
                        name='email'
                        type='email'
                        placeholder='Введите email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control
                        value={user.password}
                        onChange={handleInput}
                        name='password'
                        type='password'
                        placeholder='Введите пароль' />
                </Form.Group>
                <Row className='my-3'>
                    <div>Нет аккаунта?
                        <Link to='/registre'
                            className='link-success px-3'
                        >Зарегистрируйтесь</Link>
                    </div>
                </Row>
                <Button onClick={signIn} className='my-3 ' variant='secondary' type='submit'> Войти </Button>
            </Form>
        </Card>

    </>
    )
}
export default Login;

