
import style from "./Home.module.css"
export default function Home() {


   
    


    return (



        <div className="container">
            <h1 className="text-center">Benvenuto su Boolando</h1>
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">
                    <h2 className="text-center">Acquista ciò che vuoi tanto paga Loris !!!</h2>
                    <span>Oggi in listino:</span>
                    <img className="" width={"800px"} src="https://s1.1zoom.me/b5050/413/Porsche_911_GT3_Grey_Metallic_580375_3840x2400.jpg" alt="" />
                    {/* <button className={`btn btn-dark ${style.abButtonGB} ${style.ButtonGbRight}`}>NEXT</button>
                    <button className={`btn btn-dark ${style.abButtonGB} ${style.ButtonGbLeft}`}>BACK</button> */}
                </div>
            </div>
        </div>
    )
}