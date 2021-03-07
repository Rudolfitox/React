import { useState,useEffect,useRef } from "react"


export const useFetch = (url) => {
    //Puede ir un if para checar que el url no venga vacio

    const isMounted = useRef(true);
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    },[])

    useEffect(() => {
        
        setState({
            data:null,
            loading:true,
            error:null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {
                    if(isMounted.current){
                        setState({
                            loading:false,
                            error:null,
                            data
                        }) 
                    }else{
                        console.log('setState no se llamo');
                    }
                }, 2000);
            })
       
    }, [url])

    return state;
}
