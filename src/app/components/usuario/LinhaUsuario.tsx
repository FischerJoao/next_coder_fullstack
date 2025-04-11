import { Usuario } from "@/core/model/Usuario"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return(
    <div className="flex p-4 bg-zinc-900 p-4 rounded-md hover:bg-zinc-800 cursor-pointer">
     <div className="flex flex-col gap-2"> 

      <span>{props.usuario.nome}</span>
      <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
     
    </div>
  )
}