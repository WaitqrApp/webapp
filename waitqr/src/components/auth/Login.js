import React, {useState, useContext, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'
import Logo from './img/logo.png';
import '../auth/styles/auth.css';
import CookieConsent from "react-cookie-consent";

function Login (props){

       //extraer los valores del context
       const alertaContext = useContext(AlertaContext);
       const {alerta, mostrarAlerta} = alertaContext;
   
   
       const authContext = useContext(AuthContext);
       const {mensaje, autenticado, iniciarSesion, usuarioAutenticado} = authContext;


       //En caos de que el password o usuario no exista
       useEffect(() =>{
           usuarioAutenticado()
       if(autenticado){
           props.history.push('/menu');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    },[mensaje, autenticado, props.history ]);


    //State para inciiar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const {email, password} = usuario;

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesion
    const onSubmit = e =>{
        e.preventDefault();

        //validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }

        //pasarlo al action
        iniciarSesion({email,password})
    }



    return(
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg}</div>) : null}
                    <img className="waitqr-logo-login" src={Logo}  />
                    
                    <div className="contenedor-form sombra-dark">
                        <h1>Iniciar Sesion</h1>

                        <form
                            onSubmit={onSubmit}
                        >
                        
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Tu Email"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="campo-form">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Tu Password"
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="campo-form">
                                <input type="submit" className="btn-l btn-primario-l btn-block-l"
                                value="Iniciar Sesion" />
                            </div>
                        </form>

                       {/*  <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                            Obtener Cuenta

                        </Link> */}
                    </div>
                    <CookieConsent>Este sitio usa cookies para mejorar la experiencia de usuario</CookieConsent>
        </div>
    );
}

export default Login;