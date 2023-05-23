import { logout, verifyIfUserIsEnrolled, verifyUserEmail } from "@/firebase/authentication";
import { User } from "@firebase/auth";
import Link from "next/link";
import { notify } from "@/utils/notify"; import { useState } from "react";
import {useCurrentDB} from "@/hooks/useCurrentDatabase";
import {useRouter} from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { baseDeDatosState } from "@/atoms/basededatos";
import { Nav, Navbar } from "react-bootstrap";

type Props = {
    currentUser: User | null;
}

export function SelectdatabaseComponent({ currentUser }: Props) {
    const router = useRouter();
    const [selectedDatabase, setSelectedDatabase] = useState([]);

    const setBaseDeDatos =
    useSetRecoilState<any>(baseDeDatosState);
    
    function handleSelectChange(event: any) {
        // useCurrentDB(event.target.value);
        console.log('select',event.target.value)
        setBaseDeDatos({seleccionada:event.target.value})
        setSelectedDatabase(event.target.value);
    }
    async function continuar(event: any) {
        await router.push('/personaForm');
    }
  
    return (
        <div className="bg-white h-screen w-full">
             <div className='flex flex-col gap-y-6  md:w-screen px-1 sm:px-10 lg:px-80  '>
                        <Navbar bg="light" variant="light">
                            {/* <Container > */}
                                <Navbar className='me-auto w-full text-5xl font-bold' > AdmonDB</Navbar>
                                <Nav className='me-auto w-full text-xl'>
                                    <Nav.Link className='hover:underline' href="/selectdatabase">Seleccion de base de datos</Nav.Link>
                                    <Nav.Link className='hover:underline' href="/personaForm"  >Registro de datos</Nav.Link>
                                    <Nav.Link className='hover:underline' href="#pricing">Dashbord</Nav.Link>
                                </Nav>
                            {/* </Container> */}
                        </Navbar>
                    </div>
            <div className='flex flex-col justify-center items-center px-12 gap-y-12 pt-40'>
                <h2 className="mt-20 text-3xl text-center font-bold text-gray-800">Selecciona una base de datos</h2>

                <select value={selectedDatabase} onChange={handleSelectChange}
                className="focus:outline-none
                block  rounded-xl placeholder-gray-500
                bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                duration-300 invalid:ring-2 invalid:ring-red-400
                focus:ring-2 focus:ring-black">
                    <option value="" disabled selected hidden >Seleccione la base de datos </option>
                    <option value="oracle" >Oracle</option>
                    <option value="mysql">MySql</option>
                    <option value="mssql">SQLServer</option>
                </select>

                <button type="submit" onClick={continuar}
                        className="bg-black rounded-xl flex h-11  items-center justify-center px-6">
                                <span
                                    className="text-base font-light text-white">
                                    Continuar
                                </span>
                </button>

                
            </div>
            <div >
                <button 
                    onClick={logout}
                    className="bg-black rounded-xl flex h-11 items-center  px-6" style={{position: 'fixed', top: '3%', right: 20}}>
                    <span className="relative text-base font-light text-white">
                        Cerrar Sesión
                    </span>
                </button>
                </div>
        </div>
    )
}