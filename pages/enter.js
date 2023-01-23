import { async } from "@firebase/util";
import { auth, gAprovider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "../lib/context";
import { useContext, useState } from "react";

export default function EnterPage({}) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, gAprovider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}

function UsernameForm() {
  const [formValue, setFormValue] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  const onChange = (e) => {
    
    const re = /^(?=[a-zA-Z0-9._]{3,15$})(?!.*[_.]{2})[^_.].*[^_.]$/;

    if(val.length <3)
  };

  return (
    !username && (
      <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSubmit}>
          <input
            name="username"
            placeholder="username"
            onChange={onChange}
            value={formValue}
          />
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>

          <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );
}
