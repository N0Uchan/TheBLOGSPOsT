import { Link } from "react-router-dom";

export default function HomeDef() {
  return (
    <main className='pages'>
      <h1>Welcome</h1>
      <Link to='/signIn' > Sign In </Link>
    </main>
  );
}
