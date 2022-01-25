import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router'; 


export default function PrivateRoute({children}) { 

    const isLogged = useSelector(state=>state);

    // return isLogged ? children : <Navigate to="/negado" replace="true" /> // Se estiver logado, retorna o conteúdo que está dentro do PrivateRoute. Se não estiver logado, redireciona para a página de acesso negado.

    if(isLogged){

        return children

    } else {

         return Navigate({to: "/negado", replace:"true"})

    }

}