import { logout, verifyIfUserIsEnrolled, verifyUserEmail } from "@/firebase/authentication";
import { Users, IdentificationCard, MapPin, Phone, GenderIntersex, Calendar } from "phosphor-react";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { User } from "@firebase/auth";
import axios from "axios";
import { dir } from "console";
import { useCurrentDB } from "@/hooks/useCurrentDatabase";
import Menu from "./Navbar";
import { useRecoilValue } from "recoil";
import { baseDeDatosState } from "@/atoms/basededatos";
import { notify } from "@/utils/notify";
import { Container, Nav, Navbar } from "react-bootstrap";

type Props = {
    currentUser: User | null;
}

export function PersonaComponent({ currentUser }: Props) {
    const nombre = useRef<HTMLInputElement>(null);
    const apellido = useRef<HTMLInputElement>(null);
    const edad = useRef<HTMLInputElement>(null);
    const direccion = useRef<HTMLInputElement>(null);
    const telefono = useRef<HTMLInputElement>(null);
    const sexo = useRef<HTMLSelectElement>(null);

    const { seleccionada } =
        useRecoilValue<any>(baseDeDatosState);
    console.log('seleccionada', seleccionada)
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // const dataBase = useCurrentDB("");
        // console.log(dataBase)
        const persona = {
            "nombre": nombre.current?.value,
            "apellido": apellido.current?.value,
            "edad": edad.current?.value,
            "direccion": direccion.current?.value,
            "telefono": telefono.current?.value,
            "sexo": sexo.current?.value
        }
        console.log(persona)
        const { data } = await axios.post(
            `http://localhost:3001/api/v1/personas/${seleccionada}`, persona
        );
        debugger
        if (data) {
            notify('Guardado con éxito.');
        }
        else {
            notify('Algo salió mal.');
        }
        console.log(data)
    }

    return (
        <div className=" h-screen ">
            <div className='flex flex-col gap-y-6  md:w-screen px-1 sm:px-10 lg:px-80  '>
                <Navbar bg="light" variant="light">
                <Container >
                    <Navbar className='me-auto w-full text-5xl font-bold' > AdmonDB</Navbar>
                    <Nav className='me-auto w-full text-xl'>
                        <Nav.Link className='hover:underline' href="/selectdatabase">Seleccion de base de datos</Nav.Link>
                        <Nav.Link className='hover:underline' href="/personaForm"  >Registro de datos</Nav.Link>
                        <Nav.Link className='hover:underline' href="#pricing">Dashbord</Nav.Link>
                    </Nav>
                </Container>
                </Navbar>
            </div>
            <br />

            <div className="bg-white md:w-[500px] rounded-xl p-8" style={{ position: 'fixed', top: '15%', right:700 }}>

                <h2 className="mt-20 mb-8 text-3xl font-bold text-center text-gray-800">Registro de datos</h2>

                <form
                    className="space-y-8"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            <Users size={32} className='w-6 h-6 absolute left-4 inset-y-0 my-auto' />
                            <input
                                ref={nombre}
                                type="text"
                                name="nombre"
                                placeholder="Ingrese su nombre"
                                className="focus:outline-none
                                        block w-full rounded-xl placeholder-gray-500
                                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                                        duration-300 invalid:ring-2 invalid:ring-red-400
                                        focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            <IdentificationCard size={32} className='w-6 h-6 absolute left-4 inset-y-0 my-auto' />
                            <input
                                ref={apellido}
                                type="text"
                                name="apellido"
                                placeholder="Ingrese su apellido"
                                className="focus:outline-none
                                        block w-full rounded-xl placeholder-gray-500
                                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                                        duration-300 invalid:ring-2 invalid:ring-red-400
                                        focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 my-6">
                        <div className="relative flex items-center">
                            <Calendar size={32} className='w-6 h-6 absolute left-4 inset-y-0 my-auto' />
                            <input
                                ref={edad}
                                type="number"
                                name="edad"
                                placeholder="Ingrese su edad"
                                className="focus:outline-none block w-full rounded-xl placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            <MapPin size={32} className='w-6 h-6 absolute left-4 inset-y-0 my-auto' />
                            <input
                                ref={direccion}
                                type="text"
                                name="direccion"
                                placeholder="Ingrese su direccion"
                                className="focus:outline-none
                                        block w-full rounded-xl placeholder-gray-500
                                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                                        duration-300 invalid:ring-2 invalid:ring-red-400
                                        focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            <Phone size={32} className='w-6 h-6 absolute left-4 inset-y-0 my-auto' />
                            <input
                                ref={telefono}
                                type="number"
                                name="telefono"
                                placeholder="Ingrese su telefono"
                                className="focus:outline-none
                                        block w-full rounded-xl placeholder-gray-500
                                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                                        duration-300 invalid:ring-2 invalid:ring-red-400
                                        focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            <GenderIntersex size={32} className='w-6 h-6 absolute left-4  my-auto' />
                            {/* <input
                            ref={sexo}
                            type="text"
                            name="sexo"
                            // placeholder="Ingrese su sexo"
                            className="focus:outline-none
                                        block w-full rounded-xl placeholder-gray-500
                                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                                        duration-300 invalid:ring-2 invalid:ring-red-400
                                        focus:ring-2 focus:ring-black"
                        /> */}
                            <select
                                ref={sexo}
                                name="sexo"
                                className="focus:outline-none
                        block w-full rounded-xl placeholder-gray-500
                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                        duration-300 invalid:ring-2 invalid:ring-red-400
                        focus:ring-2 focus:ring-black">
                                <option value="" disabled selected hidden>Seleccione el sexo </option>
                                <option >Masculino</option>
                                <option >Femenino</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit"
                        className="bg-black rounded-xl flex h-11 w-full items-center justify-center px-6">
                        <span
                            className="text-base font-light text-white">
                            Guardar Datos
                        </span>
                    </button>

                </form>
                <div >
                    <button
                        onClick={logout}
                        className="bg-black rounded-xl flex h-11 items-center  px-6" style={{ position: 'fixed', top: '3%', right: 20 }}>
                        <span className="relative text-base font-light text-white">
                            Cerrar Sesión
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}