import {SelectdatabaseComponent} from "@/components/Selectdatabase";
import {useCurrentUser} from "@/hooks/useCurrentUser";
import {Loading} from "@/components/Loading";
import {useRouter} from "next/router";
import {navbar} from "@/components/Navbar"



export default function UserPage() {
    const currentUser = useCurrentUser();
    const router = useRouter();

    if (currentUser === 'loading') {
        return <Loading />
    }

    if (!currentUser) {
        void router.push('login');
    }

    return <SelectdatabaseComponent currentUser={currentUser} />

}

export function Selectdatabase (){
    return navbar 
}
 