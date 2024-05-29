
import { useEffect } from "react";
// use efect gttee meka run wen hmwelm apit api ek call krnn one nisa..
// fe3f814c
const url ='http://www.omdbapi.com/?apikey=fe3f814c';

const App = () => {

    const serchMovies = async (title) => {  // asyncronus function ekk ekiynne hoynn wel ynwa
        const res = await fetch(`${url}&s=${title}`);
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
        serchMovies('avengers');
    }, []);
    return(
        <div>
            <h1>APP</h1>
        </div>
    );
}
export default App;