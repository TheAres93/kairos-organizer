import { Link } from 'react-router-dom';
import { Button, Grid, GridItem, Text, useColorMode } from '@chakra-ui/react'
import Theme from "../src/theme/Theme";
import IMGTasksList from "../src/assets/TasksList.svg"
export default function Home(){
    const {colorMode}=useColorMode()
    return (
        <Grid 
            bgImage= {IMGTasksList}
            bgPosition="center"
            bgSize="contain"
            bgRepeat="repeat"
            w="100%"
            h="100%"
            theme={Theme}
        >
            <Text  bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='bold'
                textAlign="center"
                paddingTop="30px">Bienvenido a tu organizador de tareas</Text>
            <GridItem alignSelf="center" justifySelf="center" w="65%">
                <Text fontSize='2xl' textAlign="center">
                © Kairos Organizer es la herramienta definitiva para conquistar tu productividad con estilo. 
                <br />
                Kairos te permite:
                <br />
                <br />
                • Organizar tu tiempo
                • Personalizar tu experiencia
                • Alcanzar tus objetivos
                • Gobernar tu tiempo.
                <br />
                <br />
                Más que un simple organizador de tareas, Kairos es una herramienta para conquistar tus metas y dominar tu productividad con estilo.

                Únete a la revolución griega y descubre el poder de la organización.

                Empieza hoy mismo. .
                </Text>
                <br />
                <Text fontSize='2xl' textAlign="center">
                ¿Qué estás esperando? 
                </Text>
            </GridItem>
            <GridItem justifySelf="center">
                <nav>
                    <Button colorScheme='gray'size='lg'
                        color={colorMode==="light"?"black":"white"}><Link to="/kairos-organizer/AddTasks">¡Prueba Kairos gratis!</Link></Button>
                </nav>
            </GridItem>
            
        </Grid>
    )
}