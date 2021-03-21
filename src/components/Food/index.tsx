import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
    openModal: () => void;
}

export function Food({ openModal }: HeaderProps) {
    return (
        <Container available>
            <header>
                <img src={logo} alt="GoRestaurant" />
                <nav>
                    <div>
                        <button type="button" onClick={openModal}>
                            <div className="text">Novo Prato</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
        </Container>
    );
}
