import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',

    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    // chave: nome, descricao,
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome:'valor'
        });
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
        );
    }

    useEffect(() => {

        const URL = window.location.hostname.includes('localhost')
            ? ''
            : 'https://aluraflix-pris.herokuapp.com/categorias';
        fetch(URL)
            .then(async (respostaDoServer) => {
                if (respostaDoServer.ok) {
                    const resposta = await respostaDoServer.json();
                    setCategorias([...resposta,
                    ]);
                    return;
                }
                throw new Error('Não foi possível pegar os dados');
            })
    }, []);


    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.nome}
            </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);
                setValues(valoresIniciais);
            }}
            >

                <FormField
                    label="Nome da Categoria:"
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField
                    label="Cor:"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
               </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}


            <ul>
                {categorias.map((categoria, indice) => (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
