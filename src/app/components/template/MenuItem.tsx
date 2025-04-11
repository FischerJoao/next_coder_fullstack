import Link from "next/link";

export interface MenuItemProps {
icon: any;
text: string;
url: string;
}

export default function MenuItem(props: MenuItemProps){
    return(
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
            <props.icon className=""/>
            <span>{props.text}</span>
        </Link>
    )
}