import { memo } from "react";
const Title = () => {
    console.log("rendering title")
    return(
        
        <>      
            <h2>Use Callback Hook</h2>
        </>
    )
}
export default memo(Title);