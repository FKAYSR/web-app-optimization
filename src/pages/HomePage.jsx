import Teacher from "../sandbox/Teacher";
import Welcome from "../sandbox/Welcome";
import Greeting from "../sandbox/Greeting";
import Button from "../sandbox/Button";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <Teacher />
        <p>Welcome to the home page...</p>
        <Welcome />
        <Greeting name="Kejser" />
        <Greeting name="Kejser" />
        <Greeting name="Kejser" />
        <Button />
      </main>
    </>
  );
}
