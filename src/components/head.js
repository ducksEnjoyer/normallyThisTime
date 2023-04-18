import Head from 'next/head' 
export default function PokemonHead({name}) {
    console.log(name)
    return(
        <>{name   !== "" ? 
        <Head>
            
            <title>{name} best pokemon</title> 
            
        </Head> :
        <Head>
            
            <title>random title</title> 
        
    </Head>
}
        </>
    )
}