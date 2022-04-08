const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    database: 'ecostreet',
    user: 'postgres',
    password: 'senai',                                                                                                                                                                                                               
    port: 5432
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const { nome, email, sobrenome, cpf, senha} = request.body
    if ( nome!="" || sobrenome != ""|| email !="" || cpf != "" || senha != "") {

        pool.query('INSERT INTO users (nome, email, sobrenome, cpf, senha) VALUES ($1, $2, $3, $4, $5)', [nome, email, sobrenome, cpf, senha],
            (error, results) => {
                if (error) {
                    throw error
                }

                response.status(201).send(`Usuário adicionado com ID: ${results.insertId}`)
            })

    } else {
        response.status(401).send("Usuário com campos nulos")
    }


}
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { email, cpf, senha } = request.body

    pool.query(
        'UPDATE users SET  email= $1, cpf = $2 , senha = $3 WHERE id = $4',
       
        [email, cpf, senha, id],
        (error, results) => {
            if (error) {
                throw error
            }

            response.status(200).send(`Usuário com ID: ${id} modificado com sucesso`)
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id],
        (error, results) => {
            if (error) {
                throw error
            }

            response.status(201).send(`Usuário com ID ${id} deletado com sucesso`)
        })
}


const getLocal_d = (request, response) => {
    pool.query('SELECT * FROM local_d ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getLocal_dById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM local_d WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createLocal_d = (request, response) => {
    const { cep, rua, numero, bairro, cidade, estado, complemento} = request.body
    if ( cep!="" || rua != ""|| numero !="" || bairro !="" || cidade != "" || estado != "" || complemento != "") {        
        
        pool.query('INSERT INTO local_d (cep, rua, numero, bairro, cidade, estado, complemento) VALUES ($1, $2, $3, $4, $5, $6, $7)', [cep, rua, numero, bairro, cidade, estado, complemento],
            (error, results) => {
                if (error) {
                    throw error
                }

                response.status(201).send(`Usuário adicionado com ID: ${results.insertId}`)
            })

    } else {
        response.status(401).send("Usuário com campos nulos")
    }


}
const updateLocal_d = (request, response) => {
    const id = parseInt(request.params.id)
    const { cep, rua, numero, bairro, cidade, estado, complemento} = request.body

    pool.query(
        'UPDATE local_d SET cep = $1, rua = $2, numero= $3, bairro = $4, cidade = $5, estado = $6, complemento = $7 WHERE id = $8',
        [cep, rua, numero, bairro, cidade, estado, complemento],
        (error, results) => {
            if (error) {
                throw error
            }

            response.status(200).send(`Usuário com ID: ${id} modificado com sucesso`)
        }
    )
}
const deleteLocal_d = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM local_d WHERE id = $1', [id],
        (error, results) => {
            if (error) {
                throw error
            }

            response.status(201).send(`Usuário com ID ${id} deletado com sucesso`)
        })
}

const getDenuncia = (request, response) => {
    pool.query('SELECT * FROM denuncia ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDenunciaById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM denuncia WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createDenuncia = (request, response) => {
    const { titulo, descricao } = request.body
    if ( titulo, descricao) {        
        
        pool.query('INSERT INTO denuncia (titulo, descricao) VALUES ($1, $2)', [titulo, descricao],
            (error, results) => {
                if (error) {
                    throw error
                }

                response.status(201).send(`Usuário adicionado com ID: ${results.insertId}`)
            })

    } else {
        response.status(401).send("Usuário com campos nulos")
    }


}

const updateDenuncia = (request, response) => {
    const id = parseInt(request.params.id)
    const { titulo, descricao } = request.body

    pool.query(
        'UPDATE denuncia SET titulo = $1, descricao = $2, WHERE id = $3',
        [titulo, descricao],
        (error, results) => {
            if (error) {
                throw error
            }

            response.status(200).send(`Usuário com ID: ${id} modificado com sucesso`)
        }
    )
}

const deleteDenuncia = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM denuncia WHERE id = $1', [id],
        (error, results) => {
            if (error) {
                throw error
            }

            response.status(201).send(`Usuário com ID ${id} deletado com sucesso`)
        })
}


const getLogin = (request, response) => {
    const { email, senha} = request.body

    pool.query('SELECT * FROM users WHERE email =$1 AND senha = $2', [email, senha], (error, results) => {
        if (error) {
            throw error
        }

        // console.log(results.rows)
        
        response.status(200).json(results.rows)
    })

    
        
    }

    const getEmpresa = (request, response) => {
        pool.query('SELECT * FROM empresa ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
    
    const getEmpresaById = (request, response) => {
        const id = parseInt(request.params.id)
    
        pool.query('SELECT * FROM empresa WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
    const createEmpresa = (request, response) => {
        const { nome, email, cnpj, senha} = request.body
        if ( nome!="" ||  email !="" || cnpj!= "" || senha != "") {
                // console.log('estou aq');
            pool.query('INSERT INTO empresa (nome, email, cnpj, senha) VALUES ($1, $2, $3, $4)', [nome, email, cnpj, senha],
                (error, results) => {
                    if (error) {
                        throw error
                    }
    
                    response.status(201).send(`Usuário adicionado com ID: ${results.insertId}`)
                })
    
        } else {
            response.status(401).send("Usuário com campos nulos")
        }
    
    
    }
    const updateEmpresa = (request, response) => {
        const id = parseInt(request.params.id)
        const { nome, email, cnpj, senha } = request.body
    
        pool.query(
            'UPDATE empersa SET nome = $1, cnpj = $2, email= $3, senha = $4 WHERE id = $5',
            [nome, cnpj, email, senha, id],
            (error, results) => {
                if (error) {
                    throw error
                }
    
                response.status(200).send(`Usuário com ID: ${id} modificado com sucesso`)
            }
        )
    }
    const deleteEmpresa = (request, response) => {
        const id = parseInt(request.params.id)
    
        pool.query('DELETE FROM empresa WHERE id = $1', [id],
            (error, results) => {
                if (error) {
                    throw error
                }
    
                response.status(201).send(`Usuário com ID ${id} deletado com sucesso`)
            })
    }
    


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getLocal_d,
    getLocal_dById,
    createLocal_d,
    updateLocal_d,
    deleteLocal_d,
    getDenuncia,
    getDenunciaById,
    createDenuncia,
    updateDenuncia,
    deleteDenuncia,
    getLogin,
    getEmpresa,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}