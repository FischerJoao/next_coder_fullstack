import usuarios from "@/app/data/constants/usuarios"
import LinhaUsuario from "./LinhaUsuario"
import { Usuario } from "@/core/model/Usuario"

export default function ListaUsuario() {
    return (
        <div className="flex flex-col">
            {usuarios.map((usuarios:Usuario)=>{
                return <LinhaUsuario key={usuarios.id} usuario={usuarios} />
            })}
        </div>
    )
}
