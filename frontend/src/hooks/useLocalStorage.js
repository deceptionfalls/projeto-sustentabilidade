import { useEffect, useState } from "react";

// Sincroniza o estado do React no armazenamento local do browser
// Armazena coisas como o último CEP pesquisado pelo usuário, filtros selecionados ou preferências
function useLocalStorage(key, initialValue) {

    function checkLocalStorage() {
        const item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(item)
        } else if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue;
        }
    };

    const [state, setState] = useState(checkLocalStorage);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}