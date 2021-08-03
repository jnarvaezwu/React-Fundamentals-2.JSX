import { useRouteMatch } from "react-router-dom"

export default function UserDetail(){

  const route = useRouteMatch();

  return (
    <div>
      UserDetail {route.params.id}
    </div>
  )
}
