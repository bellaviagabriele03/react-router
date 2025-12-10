import { useParams, useNavigate } from "react-router-dom"



export default function SingleProduct() {

    const { id } = useParams()
   
    
    return (
        <div className="container">
            <h1>Prodotto n*{id}</h1>
        </div>
    )
}