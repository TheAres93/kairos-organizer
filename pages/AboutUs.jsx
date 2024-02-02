import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import IMGAboutUS from "../src/assets/AboutUs.svg"

export default function AboutUs() {
  return (
    <Grid
      templateAreas={`"header"
                        "footer"`}
      w="100%"
      h="100%"
      gridTemplateColumns="auto"
      gridTemplateRows="auto"
      bgImage={IMGAboutUS}
      bgPosition="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <GridItem area="header" alignSelf="end">
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center">Olimpo Apps</Heading>
        <Heading
          fontSize="xl"
          textAlign="center">Creando aplicaciones para los dioses</Heading>
      </GridItem>
      <GridItem area="footer" alignSelf="center" justifySelf="center" w="65%">
        <Text
          fontSize="xl"
          textAlign="center">
            Presenta © Kairos Organizer, un organizador de tareas que combina la funcionalidad intuitiva con la 
            elegancia estética de la antigua Grecia. Desarrollado con React JS y el UI de Chakra, Kairos te permite:
            <br />
            • Conquistar el caos: Crea, enumera y filtra tareas con facilidad. Despídete del estrés y toma el control de 
            tu tiempo.
            <br />
            • Forjar tu propio camino: Personaliza tu experiencia con una interfaz minimalista inspirada en la grandeza 
            de los dioses griegos.
            <br />
            • Alcanzar la victoria: Completa tareas, actualiza estados y edita detalles con un solo clic. Kairos te ayuda 
            a convertir las ideas en logros.
            <br />
            • Gobernar con sabiduría: Elimina tareas o comienza de nuevo con un solo click. Kairos te da el poder de 
            elegir.
            <br />
            Kairos Organizer: Más que un simple organizador de tareas, una herramienta para conquistar tus objetivos y 
            dominar tu productividad con estilo.
            <br />
            Descubre el poder de la organización griega.
           
        </Text>
      </GridItem>
    </Grid>
  );
}
