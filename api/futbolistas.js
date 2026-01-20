let futbolistas = [
    {id:1, "nombre":"Messi"},
    {id:2, "nombre":"ronaldo nazario"}
]

export default function handler(req, resp){
    //Configurar las cabeceras con JSON
    resp.setHeader('Content-Type', 'application/json')

    //método GET y comentario para que haga deploy
    if(req.method === "GET"){
        return resp.status(200).json(futbolistas    )
    }

    //metodo POST
    if(req.method==='POST'){
        const nuevoJugador = req.body

        if(!nuevoJugador.nombre)
            return resp.status(400).json({error:"falta el nombre"})

        const nuevo = {
            id: Date.now(),
            nombre: nuevoJugador.nombre
        }

        futbolistas.push(nuevo)
        return resp.status(201).json(nuevo)
    }

    //si intentamos cualquier otro método
}