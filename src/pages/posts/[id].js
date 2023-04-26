import WhateverIwant from '@/components/nameIwant';
import GoingBack from "@/components/backtohome";
import { getAllPostIds, getPostData } from '@/../lib/posts';

export default function Post({ postData }) { 
  return ( 
      <WhateverIwant>
      {postData.title} 
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      {postData.content}
      <br />
      <GoingBack />
      </WhateverIwant>
  );
}
export function getStaticPaths() {
  const paths = getAllPostIds();
  // console.log({JSONpaths})
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const postData = getPostData(params.id); 
  console.log({ postData });
  return {
    props: {
      postData,
    },
  };
} 