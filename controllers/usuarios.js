const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'Sin Nombre',apikey, page = 1, limit} = req.query;
    
    res.json({
        msg: 'Get API - Controlador usuarios',
        q,
        nombre, 
        apikey,
        page,
        limit
    });
};

const usuariosPost = (req, res = response) => {
    
    const { nombre, edad } = req.body;

    res.json({
        msg: 'POST API - CONTROLADOR',
        nombre,
        edad 
    });
};

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'PUT API - controlador',
        id
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}