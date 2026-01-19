let futbolistas = [
    {id:1, "nombre":"messi"},
    {id:2, "nombre":"ronaldo nazario"}
]

export default function handler(req, resp){
    //Configurar las cabeceras con JSON
    resp.setHeader('Content-Type', 'application/json')

    if(req.method === "GET"){
        return resp.status(200).json(futbolistas)
    }
}