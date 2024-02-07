import React from "react"

const footerStyle = {
  color: "red",
}
class Footer extends React.Component {
  render () {
    return (
      <footer style={footerStyle}>
        <a href="/">Homepage</a> and <a href="/login">Login</a>
      </footer>
    )
  }
}

export default Footer