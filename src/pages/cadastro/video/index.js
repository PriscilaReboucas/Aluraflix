import React from './node_modules/react';
import PageDefault from '../../../components/PageDefault';
import { Link } from './node_modules/react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1> Cadastro de Vídeo</h1>
            <Link to="/cadastro/categoria">
                Cadatrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;