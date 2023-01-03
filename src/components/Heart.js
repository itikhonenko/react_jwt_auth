import withAuth from "./withAuth"

const Heart = () => {
  return (
    <div>
      Heart page!
    </div>
  )
}

export default withAuth(Heart)
