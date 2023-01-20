import Head from "next/head"
import RecipeCreateForm from "../../components/RecipeCreateForm"
import { useMutation } from "react-query"
import axios from "axios";
import { RecipeValues } from "../../components/RecipeCreateForm";
import useSession from "../../hooks/useNextAuth"
//https://www.youtube.com/watch?v=pJiRj02PkJQ&ab_channel=TheNetNinja
export default function RecipesIndex() {

    const {isSuccess, isError, mutate} = useMutation(
        (recipe : RecipeValues) => {
            return axios.post("/api/recipes", recipe, {
                withCredentials: true});
        }
    )
    
    
    const {data: session} = useSession()
    if(!session){
        return(
            <div className="flex justify-center items-center h-[100vh]">
                <h1>Unauthorised</h1>
            </div>
        )
    }

    return (
        <div>
            <Head>
            <title>Share Your Recipes!</title>
            <meta name="description" content="Generated by create next app" />
            </Head>
            <RecipeCreateForm onSubmit={(r) => mutate(r)}/>

            
        </div>
    )
}