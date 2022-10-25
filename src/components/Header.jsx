import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';


export const Header = () => {

    let navigate = useNavigate();

    const takeMe = () => {
        navigate("/");
    }

    return (
        <>
                <header>
                    <img src="../src/img/logoinv.png" alt="logo sin fondo" id="logo" onClick={takeMe}/>
                    <nav>
                        <Button destiny={"Acceso"} url={"/login"}></Button>
                        <Button destiny={"Equipo"} url={"/about"}></Button>
                    </nav>
                </header>

        </>
    )
}