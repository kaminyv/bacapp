import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import MyLabel from '../UI/Label/MyLabel';

import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';
import './../../../sass/style.scss';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = () => {
        localStorage.removeItem({ name: '', password: '' });
    };
    const [login, setLogin] = useState({ name: '', password: '' });
    const checkLogin = (e) => {
        e.preventDefault();
        const NewUser = { ...login, ...password };
        setLogin(NewUser);
        console.log(NewUser);
        setIsAuth(NewUser);
        console.log(isAuth);
    }

    return (
        <div className='login'>
            <h1 className='login__title'>Войти в приложение: </h1>
            <form>
                <MyLabel htmlFor='master'>Логин:</MyLabel>
                <MyInput
                    value={login.name}
                    onChange={e => setLogin({ ...login, name: e.target.value })}
                    id='master'
                    className='input'
                    type='text'
                    placeholder='Введите имя'
                />
                <MyLabel htmlFor='password'>Пароль:</MyLabel>
                <MyInput
                    value={login.password}
                    onChange={e => setLogin({ ...login, password: e.target.value })}
                    id='password'
                    type='password'
                    className='input'
                    placeholder='Введите пароль'
                />
                <div className='login__button'>
                    <MyButton onClick={checkLogin} className='button button--promo'>Войти</MyButton>
                    <MyButton onClick={logout} className='button button--promo'>Выйти</MyButton>
                </div>
            </form>
        </div>
    );
};

export default Login;
