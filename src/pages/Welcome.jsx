import { Link } from "react-router-dom";

export default function HomeDef() {
  return (
    <main className='pages'>
      <h1>Welcome To The BLOGSPOST .</h1>
      <h2>Please Sign In To continue.</h2>
      <h2><Link to='/signIn' > Sign In </Link></h2>
      
    </main>
  );
}
