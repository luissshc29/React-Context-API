import Feira from 'pages/Feira'
import Login from 'pages/Login'
import Carrinho from 'pages/Carrinho'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import { UsuarioProvider } from 'common/context/Usuario'
import { CarrinhoProvider } from 'common/context/Carrinho'
import { PagamentoProvider } from 'common/context/Pagamento'

export default function Router () {

    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>

                    <Route exact path='/'>
                        <Login/>
                    </Route>

                    <CarrinhoProvider>
                        
                        <PagamentoProvider>

                            <Route path='/feira'>
                                <Feira/>
                            </Route>

                            <Route path='/carrinho'>
                                <Carrinho />
                            </Route>

                        </PagamentoProvider>

                    </CarrinhoProvider>
                    
                </UsuarioProvider>
            </Switch>
        </BrowserRouter>
    )
}
