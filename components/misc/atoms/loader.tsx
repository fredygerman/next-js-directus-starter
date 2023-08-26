import { Loader } from "lucide-react"

const Loading = ({
  fullScreen = true,
}: {
  fullScreen?: boolean | undefined
}) => {
  return (
    <div
      style={{
        position: fullScreen ? "fixed" : "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: fullScreen ? "100vh" : "100%",
        zIndex: fullScreen ? 999999 : 99,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        opacity: 0.7,
      }}
    >
      <Loader
        style={{ marginRight: "20px", fontSize: "40px", color: " #1890ff" }}
      />
      <span>Loading ...</span>
    </div>
  )
}

export default Loading
