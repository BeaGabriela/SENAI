const toCreate = (dados, file) => {
    if(file != null){
        dados.avatar = file.buffer.toString('base64');
        return `insert into clientes values ('${dados.login}', '${dados.nome}', '${dados.nascimento} ', '${dados.telefone}', '${dados.avatar}')`;
    }else 
        return `insert into clientes values ('${dados.login}', '${dados.nome}', '${dados.nascimento}',  '${dados.telefone}', null)`;
}

const toRead = () => {
    return "select * from clientes order by login";
}

const toDel = (dados) => {
    return `delete from clientes where login=${dados.login}`;
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if(d.avatar != null) d.avatar = d.avatar.toString('ascii');
    });
    return dados;
}

module.exports ={
    toCreate,
    toRead,
    toDel,
    toAscii
}
