import React, {  useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    const [users, setUsers] = useState([
        // { id: 1, name: 'Anna', password: 1 },
        // { id: 2, name: 'Ivan', password: 1 },
    ])
    const [user, setUser] = useState({ name: '', password: ''})

    const utName = () => {
        console.log("utName")
    }
    const checkName = (e) => {
        e.preventDefault();
         console.log("checkName")
        setUsers([...users, {...user, id: Date.now()}])
        setUser({ name: '', password: ''})
        // console.log(users)
        // console.log(user)

    }
    return (
        <Form className='mt-3 container' onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label >Логин:</Form.Label>
                <Form.Control
                    size="lg"
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    type='text'
                    placeholder="Введите имя"
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Пароль:</Form.Label>
                <Form.Control
                    size="lg"
                    value={user.password}
                    type='password'
                    placeholder='Введите пароль'
                    onChange={e => setUser({...user, password: e.target.value})}
                />
            </Form.Group>
            <Button onClick={checkName} className="mx-3" size="lg" variant="secondary" type='submit'> Войти </Button>
            <Button onClick={utName} className="mx-3" size='lg' variant='secondary' type='reset'> Выйти </Button>
        </Form>
    )
}
export default Login;
