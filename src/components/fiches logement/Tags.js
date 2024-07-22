import { useParams } from "react-router-dom";
import idLogement from '../../datas/logements.json'

// Récupération des tags
const Tags = () => {
    const {tags} = useParams()
    const test = idLogement.find((logement) => logement.tags === tags)
    console.log(test)
}

export default Tags