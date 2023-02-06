export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img className="card-img-center" src={user.photoURL} />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
