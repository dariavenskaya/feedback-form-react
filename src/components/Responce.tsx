import React from "react"


function APIResponce() {
    const [answer, setAnswer] = React.useState<any>(null)
  
    React.useEffect(() => {
      async function fetchMyAPI() {
        fetch('https://my-json-server.typicode.com/dariavenskaya/my-JSON-server/posts')
        .then(res => {
            if (res.ok) {
                console.log(res.json())
                return res.json()
                .then(data => {
                    console.log(JSON.stringify(data))
                    const obj = JSON.parse(data);
                    setAnswer(obj.id)
                }
                    )
            
             } else {
                console.log('error');
                setAnswer('Something went wrong')
             }
        }
        )
      }
  
      fetchMyAPI()
    }, [])
  
    return <div>{answer}</div>
}
  
export default APIResponce