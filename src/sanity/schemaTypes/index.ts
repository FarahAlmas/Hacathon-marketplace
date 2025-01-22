import { type SchemaTypeDefinition } from 'sanity';
import landingPage from './landingPage';
import hero from './landingPage-Section/hero';
import featuredProducts from './landingPage-Section/featuredProducts'
import latestProduct from './landingPage-Section/latestProduct';
import unique from './landingPage-Section/unique';
import { newitem } from './newitem';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: 
  [
    landingPage,
    newitem,     
    hero,
    featuredProducts,
    latestProduct,
    unique
  ],
}
