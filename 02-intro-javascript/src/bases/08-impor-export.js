//IMPORT EXPORT
import heroes,{owners} from '../data/heroes';

console.log(owners)

const getHeroeById = (id) => heroes.find(h => h.id == id);
console.log(getHeroeById(2))

const getHeroeByOwner = (owner) => heroes.filter(h => h.owner == owner);
console.log(getHeroeByOwner('DC'));