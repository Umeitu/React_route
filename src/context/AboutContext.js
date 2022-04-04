import { createContext } from "react";


export const AboutContext =createContext();

function AboutContextProvider({children}){
    const about= {
        name:"pelpuo Umeitu",
        hobbies:["dancing","eating","music"],
        bio: "I am a passionate young lady who desire a communitygrowth"



    }
    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}


export default AboutContextProvider