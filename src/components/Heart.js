import requireAuth from "./requireAuth"

const Heart = () => {
  return (
    <div>
      Heart page!
    </div>
  )
}

export default requireAuth(Heart)
