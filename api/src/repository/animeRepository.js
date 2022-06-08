import { con } from "./connection.js";

export async function anime(anime){
    const comando = `
    insert into tb_anime(nm_anime)
    values(?)`;
    const[linhas]=await con.query(comando,[anime.nome])
    anime.id = linhas.insertId
    return anime;
}
export async function consultaranime() {
	const comando = `
		SELECT id_anime			    id,
			nm_anime anime
            from tb_anime`
	const [linhas] = await con.query(comando);
	return linhas;
}