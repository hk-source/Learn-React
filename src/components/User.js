import { useState } from "react"

const User = ({name}) => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>
            Count: {count}
        </h1>
        <h1>
            Count: {name}
        </h1>
    </div>
  );
}

export default User