import {PersonaComponent} from "@/components/PersonaForm";
import {useCurrentUser} from "@/hooks/useCurrentUser";
import {Loading} from "@/components/Loading";
import {useRouter} from "next/router";
import { Menu } from "@/components/Navbar";


   
export default function UserPage() {
    
    const currentUser = useCurrentUser();
    const router = useRouter();

    if (currentUser === 'loading') {
        return <Loading />
    }

    if (!currentUser) {
        void router.push('login');
    }

   
    return <PersonaComponent currentUser={currentUser} />
}



