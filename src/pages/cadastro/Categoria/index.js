import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormField';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [values, setValues] = useState(valoresIniciais);
    // chave: nome, descricao, 
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome:'valor'
        })
    }

    function handleChange(infosDoEvento) {
        const { getAttribute, value } = infosDoEvento.target
        setValue(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria:"
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}

                />

                {/*  <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            value={values.nome}
                            name="nome"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                <FormField
                    label="Descrição:"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}

                />


                {/*    <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}

                        />
                    </label>
                </div> */}
                <FormField
                    label="Cor:"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}

                />

                {/*     <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}

                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
        </button>
            </form>


            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>


            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;