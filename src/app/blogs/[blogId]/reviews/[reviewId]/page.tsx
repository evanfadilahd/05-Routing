type Props = {
    params: {
          reviewId: string
    }
}
  
export default function ReviewDetails({ params }: Props) {
    return (
          <h1>Review of person - {params.reviewId}</h1>
    )
}