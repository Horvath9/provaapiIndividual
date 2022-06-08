import {anime, consultaranime} from "../repository/animeRepository.js";
import {Router} from "express";
const server = Router();
server.post("/anime", async (req, resp)=>{
    try{
        const nome = req.body;
        const resposta = await anime(nome);
        
        resp.send(resposta)

    }
    catch(err){
        resp.status(404).send({erro:err.message})

    }
}) 
server.get('/anime', async (req,resp) => {
	try{
		const resposta = await consultaranime();
		resp.send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})

export default server;