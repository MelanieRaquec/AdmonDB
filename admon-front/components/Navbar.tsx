import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Menu ()  {
    return (
        <>
        <div className='flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80  bg-white  '>
        <header className='w-full'>
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
      </header>
      </div>
      </>
  );
}

export default Menu;
    