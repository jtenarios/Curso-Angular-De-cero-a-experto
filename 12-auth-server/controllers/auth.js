const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcryp = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')

// Crear un nuevo usuario
// req: nuestra petición
// res: respuesta de la petición (para post-man)
const crearusuario = async (req, res = response) => {

    const { email, name, password } = req.body;
    console.log(email, name, password);

    try {
        // Revisar que el email no exista ya
        const usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

        // Hashear/encriptar la contraseña
        const salt = bcryp.genSaltSync();
        dbUser.password = bcryp.hashSync(password, salt);

        // Generar e JWT
        console.log('Generar e JWT');
        const token = await generarJWT(dbUser.id, name);
        console.log('JWT Generado');

        // Crear usuario de BD
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: name,
            token: token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error - Contacte con el administrador'
        })
    };


};

// Login de usuario
const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        // Confirmar si existe el email
        const dbUser = await Usuario.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }

        // Confirmar si el pwd hace match
        const validPassword = bcryp.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido'
            });
        }

        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

};

// Validar y revalidar token
const revalidarToken = (req, res = response) => {

    return res.json({
        ok: true,
        msg: 'Renew'
    })
};



module.exports = {
    crearusuario,
    loginUsuario,
    revalidarToken
}