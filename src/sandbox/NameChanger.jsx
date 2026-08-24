import { useState } from "react";

export default function NameChanger() {
    const [name, setName] = useState("Terrier");

    return (
    <article>
        <p>{name}</p>
        <button onClick={() => setName("Peter")}>Change name here</button>
    </article>
  );
}
