import PostCoverImage from "../PostCoverImage";
import PostTitle from "../PostTitle";

type PostSummaryProps = {
  postTitle: string;
  postCreatedAt: string;
  postExcerpt: string;
  postLink:string;
  tag:'h1' | 'h2';
};

export default function PostSummary({
  postTitle,
  postCreatedAt,
  postExcerpt,
  postLink,
  tag
}: PostSummaryProps) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2026-02-26">
          {postCreatedAt}
        </time>
        <PostTitle url={postLink} as={tag}>
          {postTitle}
        </PostTitle>
        {/*<h1 className="text-3xl/tight sm:text-3xl/tight md:text-4xl/tight lg:text-5xl/tight font-extrabold">
          
        </h1>*/}
        <p>{postExcerpt}</p>
      </div>
    </>
  );
}
