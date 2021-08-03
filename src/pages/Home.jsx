import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"

export default function Home(){

  const history = useHistory();

  return (
    <div>
      Home
      <br/>
      <Button 
        variant="contained" 
        onClick={() => history.push("/users")}
      >
        Ir a Usuarios
      </Button>
    </div>
  )
}
