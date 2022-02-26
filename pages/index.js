// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <h1>俺のブログ</h1>
      <ul>
        {blog.map((blog) => (
          <li className="blog_id" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <span className="post_date"><p>投稿日：{blog.publishedAt.substr( 0, 10 )}</p></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};