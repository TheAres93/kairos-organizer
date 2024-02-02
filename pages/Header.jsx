import { Grid,  GridItem,  Heading } from '@chakra-ui/react'
import GeneralMenu from '../Routers/GeneralMenu';
import ChangeTheme from '../src/theme/ChangeTheme';

export default function Header(){

  
    return (
      <Grid 
        gridTemplateColumns={'repeat(3,1fr)'}
        justifyContent="space-between" alignItems="center"
        paddingTop="10px">
        <Heading size='lg' textAlign="center">Kairos Organizer</Heading>
        <GridItem justifySelf="center">
        <GeneralMenu/>
        </GridItem>
        <GridItem justifySelf="center">
          <ChangeTheme/>
        </GridItem>
      </Grid>
    );
  }