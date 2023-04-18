
import Image from "next/image" 
import GoingBack from "@/components/backtohome"
import PokemonHead from "@/components/head"
 
export default function Abra(){
    return(
        <>
        <PokemonHead name={"abra"}/>
        <GoingBack />
        <Image 
        src="/image/profile.jpg"
        width={150}
        height={150}
        alt="whatever"
        
        
        
        />
        </>
    )
}



