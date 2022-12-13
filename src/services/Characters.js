import axios from "axios"
import BaseService from "./Base"

class CharacterService {
    static async getCharacters(page) {
        try {
                            // operador ternario
            const pageString = page > 1 ? `?page=${page}` : "";
            // if(condicion) {} else {}
            // condicion ? "Es verdadero" : "Es falso";
            const baseURL = await BaseService.getQuery();
            const solicitud = await axios.get(baseURL + "/character" + pageString);

            return solicitud.data;
        } catch (error) {
            // En los servicios, normalmente no se manejan errores 
            // FOrmatear los errores aca --> Enviar los errores puros y manejarlos en el componente
            return [];
        }
    }

    static async getOneCharacter(id){
        try {
            const baseURL = await BaseService.getQuery();
            const solicitud = await axios.get(baseURL + "/character/" + id);

            return solicitud.data;
        } catch (error) {
            // En los servicios, normalmente no se manejan errores 
            // FOrmatear los errores aca --> Enviar los errores puros y manejarlos en el componente
            return {};
        }
    }
};

export default CharacterService