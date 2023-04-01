import { useState, useEffect } from "react";

export const Login = () => {
    const [showModal, setShowModal] = useState(false);

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

    const login = () => {
        
    }

    return (
        <div>
            {showModal && (
                <div className="login">
                    <h4 className="login__text">Login</h4>
                    <input type="text" className="login__input" />
                    <h4 className="login__text">Password</h4>
                    <input type="text" className="login__input" />
                    <div className="login__nav">
                        <button className="media__item--delete" onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                        <button className="media--add">Login</button>
                    </div>
                </div>
            )}

            <div className="login__logout">
                <p>You login as Admin </p>
                <button className="media__item--delete">LOGOUT</button>
            </div>
         
        </div>
    );
}
