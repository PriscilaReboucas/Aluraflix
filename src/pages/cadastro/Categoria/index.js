import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';



function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',

    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        const URL = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
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
                clearForm();
            }}
            >

                <FormField
                    label="Titulo da Categoria"
                    type="text"
                    value={values.titulo}
                    name="titulo"
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
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
                {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
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
