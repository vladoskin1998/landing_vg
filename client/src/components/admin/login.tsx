import { useState, useEffect, useContext } from "react";
import { $authApi } from "../../api/api";
import { AppContext } from "../../context/context"
export const Login = () => {

    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(process.env.REACT_APP_LOGIN || '')
    const [password, setPassword] = useState(process.env.REACT_APP_PASSWORD || '')
    const { isAuth, setIsAuth } = useContext(AppContext)

    useEffect(() => {
        let keysPressed: { [key: string]: boolean } = {};

        const downHandler = ({ key }: KeyboardEvent) => {
            keysPressed[key] = true;
            if (keysPressed["q"] && keysPressed["m"] && keysPressed["f"]) {
                setShowModal(true);
            }
        };

        const upHandler = ({ key }: KeyboardEvent) => {
            keysPressed[key] = false;
        };

        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);

    const loginAuth = () => {
        $authApi.post('login',
            { login, password }
        )
            .then(m => {
                console.log(m.data);
                setIsAuth(m.data)
                setShowModal(false);
            })
            .catch(e =>
                alert(e)
            )
    }

    const logoutAuth = () => {
        $authApi.post('logout',
            { token: localStorage.getItem("token") }

        ).then(
            () => {
                setIsAuth("")
            }
        )
    }

    return (
        <div>
            {showModal && (
                <div className="login">
                    <h4 className="login__text">Login</h4>
                    <input type="text" className="login__input" value={login} onChange={e => setLogin(e.target.value)} />
                    <h4 className="login__text">Password</h4>
                    <input type="password" className="login__input" value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="login__nav">
                        <button className="media__item--delete" onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                        <button className="media--add" onClick={loginAuth}>Login</button>
                    </div>
                </div>
            )}
            {
                isAuth
                    ? <div className="login__logout">
                        <p>You login as Admin </p>
                        <button className="media__item--delete" onClick={logoutAuth}>LOGOUT</button>
                    </div>
                    : <></>
            }
        </div>
    );
}
