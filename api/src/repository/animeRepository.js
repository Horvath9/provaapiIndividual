import { con } from "./connection.js";

export async function anime(nome){
    const comando = `
    insert into tb_anime(nm_anime)
    values(?)`;
    const[linhas]=await con.query(comando,[nome.nome])
    nome.id = linhas.insertId
    return nome;
}
export async function consultaranime() {
	const comando = `
		SELECT id_anime			    id,
			nm_anime nome
            from tb_anime`
	const [linhas] = await con.query(comando);
	return linhas;
}