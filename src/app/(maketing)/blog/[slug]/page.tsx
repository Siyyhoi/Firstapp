interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <div>
      <h1>บทความ: {slug}</h1>
      <p>เนื้อหาบทความ...</p>
    </div>
  );
}
