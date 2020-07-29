import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/video';



const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch> // interruptor para as entradas possíveis.
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

