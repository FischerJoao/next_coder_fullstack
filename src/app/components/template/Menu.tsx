import { IconHome, IconUser } from "@tabler/icons-react"
import MenuItem from "./MenuItem"


export default function Menu() {
    return (
   <aside className="w-72 bg-zinc-900 h-screen p-6">
    <nav className="flex flex-col gap-1">
    <MenuItem icon={IconHome} text="Início" url="usuarios"/>
    <MenuItem icon={IconUser} text="Cadastro Usuário" url="/"/>
    

    </nav>
   </aside>
    )
}