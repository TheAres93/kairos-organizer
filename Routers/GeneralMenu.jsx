import { Link } from 'react-router-dom';
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react'

export default function GeneralMenu() {
  const {colorMode}=useColorMode()
  return (
    <nav>
      <ButtonGroup >
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/kairos-organizer/">Inicio</Link></Button>
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/kairos-organizer/AddTasks">Agregar Tarea</Link></Button>
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/kairos-organizer/TasksList">Tareas</Link></Button>
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/kairos-organizer/AboutUs">Acerca de Nosotros</Link></Button>
      </ButtonGroup>
    </nav>
  );
}

