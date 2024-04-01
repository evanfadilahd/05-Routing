type Props = {
    params: {
          blogId: string
    }
}
  
export default function BlogDetails({ params }: Props) {
    return (
          <h1>Blog page - {params.blogId}</h1>
    )
}