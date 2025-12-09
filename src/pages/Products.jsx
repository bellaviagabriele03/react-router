import { useEffect, useState } from "react"
import style from "./Products.module.css"
import axios from "axios"


export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data)
        })
    }, [])



    return (
        <>
            <div className={`${style.gladiator} text-white`}>
                <h1 className="">Veni, Vidi, Acquisti:</h1>
                <p className="fs-2">I prodotti dei gladiatori di Boolean</p>
            </div >
            <div className="container mt-4">
                <div className="row g-2">
                    {products.map((product)=>{
                        return (
                            <div className="col-4">
                                <div className="card bg-secondary text-white">
                                    <div className="card-body text-center">
                                        <h5 className="card-title ">{product.title}</h5>
                                        <span className="card-text ">{product.price} €</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}