import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";
import { collection, getDocs, limit, orderBy, where } from "firebase/firestore";
import { query as qq } from "firebase/firestore";

export async function getServerSideProps({ query }) {
  const { username } = query;
  const userDoc = await getUserWithUsername(username);

  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsRef = collection(firestore, `users/${userDoc.id}/posts`);
    const postsQuery = qq(
      postsRef,
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(5)
    );
    posts = (await getDocs(postsQuery)).docs.map(postToJSON);
  }

  return {
    props: { user, posts },
  };
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  );
}
