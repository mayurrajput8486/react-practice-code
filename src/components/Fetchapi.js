import { useEffect, useState } from "react";

const Fetchapi = () => {
    const[name,setname] = useState([])

    useEffect(()=>{
        async function ApiData () {
            const response = await fetch("https://reqres.in/api/users")
           // console.log(response);
            const result = await response.json();
            console.log(result.data);
            setname(result.data)
        }
        ApiData();
    },[])
    return (
        <>
            <hr/>
            <h1>I am a Fetchapi Demo</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        name.map(data=>{
                        return(
                            <tr>
                                <td>{data.id}</td>
                                <td><img src={data.avatar} alt=""/></td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                            </tr>
                    )
                    })
                    }
                </tbody>
        </table>
        </>
    )
}
export default Fetchapi;