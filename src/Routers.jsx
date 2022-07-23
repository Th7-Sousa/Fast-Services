import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './paginasPrincipais/home';
import Sobre from './paginasPrincipais/SobreNos';
import TrabalheConosco from './paginasPrincipais/trabalheConosco';
import Servicos from './paginasPrincipais/servicos';
import Contato from './paginasPrincipais/contato';
import Login from './paginasPrincipais/login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
                <Route path="/Servicos" element={<Servicos />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;