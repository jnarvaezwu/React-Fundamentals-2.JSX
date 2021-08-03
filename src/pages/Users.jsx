import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"

export default function Users(){

  const history = useHistory();

  return (
    <div>
      Users
      <br/>
      <Button
        onClick={() => history.goBack()}
        variant="contained"
      >
        Ir atrás
      </Button>
    </div>
  )
}
