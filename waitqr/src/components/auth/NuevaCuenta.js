import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'


function NuevaCuenta (props){

    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;


    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    //En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() =>{
        if(autenticado){ 
            props.history.push('/Dashboard');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
           
        }

    },[mensaje, autenticado, props.history ]);


    //State para inciiar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
        nombre:'',
        confirmar:'',
        rol: '',
        telefono: ''
    });

    // extraer de usuario
    const {email, password, nombre, confirmar, rol, telefono} = usuario;

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
        if(nombre.trim() === '' ||email.trim() === ''||password.trim() === ''||confirmar.trim() === '' ||rol.trim() === ''||telefono.trim() === ''){
            mostrarAlerta("Todos los campos son obligatorios", 'alerta-error')
            return;
        }

        //Password minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta("El password debe ser de almenos 6 caracteres", 'alerta-error')
            return;
        }
        //Los 2 passwords son iguales
        if(password !== confirmar){
            mostrarAlerta("Los passwords no son iguales", 'alerta-error')
            return;
        }

        //pasarlo al action
        registrarUsuario({nombre, email,password, rol,telefono});
    }


    return(
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                   
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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="rol">Rol</label>
                        <input 
                            type="text"
                            id="rol"
                            name="rol"
                            placeholder="rol"
                            value={rol}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="telefono">Telefono</label>
                        <input 
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="telefono"
                            value={telefono}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesion

                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;