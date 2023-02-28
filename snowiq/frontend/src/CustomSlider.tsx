import React, { useEffect, useState } from "react"
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { Slider } from "baseui/slider"
import logo from "./logo.png"
import arrow from "./arrow.png"
import "./CustomSlider.css"
/**
 * We can use a Typescript interface to destructure the arguments from Python
 * and validate the types of the input
 */
interface PythonArgs {
  label: string
  minValue?: number
  maxValue?: number
  initialValue: number[]
}

/**
 * No more props manipulation in the code.
 * We store props in state and pass value directly to underlying Slider
 * and then back to Streamlit.
 */
const CustomSlider = (props: ComponentProps) => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  const { label, minValue, maxValue, initialValue }: PythonArgs = props.args
  const [value, setValue] = useState(initialValue)

  useEffect(() => Streamlit.setFrameHeight(1000))

  return (
    <>
      <div className="main-container">
        <div style={{ padding: "50px" }}>
          <div
            style={{
              borderRadius: "20px",
              boxShadow: "0px 19px 40px 0px #0000000d",
              padding: "60px",
            }}
          >
            <img src={logo} style={{ marginBottom: "10px" }} />
            <p style={{ color: "#00000080", margin: "8px 0px" }}>
              Welcome back !!!
            </p>
            <h3
              style={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontStyle: "normal",
              }}
            >
              Sign in
            </h3>
            <p style={{ margin: "20px 0px 5px 0px" }}>Email</p>
            <input
              className="input-box"
              placeholder="Please input your Email"
              style={{
                width: "100%",
                backgroundColor: "#FFF6F4",
                border: "none",
                borderRadius: "5px",
                padding: "8px 10px",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <p style={{ margin: "20px 0px 5px 0px" }}>Password</p>
              <a
                style={{
                  textAlign: "right",
                  color: "#00000060",
                  margin: "20px 0px 10px 0px",
                }}
                href="#"
              >
                {" "}
                Sign up
              </a>
            </div>

            <input
              placeholder="Please input your Password"
              type="password"
              style={{
                width: "100%",
                backgroundColor: "#FFF6F4",
                border: "none",
                borderRadius: "5px",
                padding: "8px 10px",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  backgroundColor: "#F47458",
                  color: "white",
                  border: "none",
                  fontSize: "15px",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  margin: "30px 0px",
                  fontWeight: "bold",
                }}
              >
                SIGN IN <img src={arrow} />
              </button>
              <br />
              <p style={{ display: "inline", color: "#00000060" }}>
                {" "}
                I don't have an account ?{" "}
              </p>
              <a style={{ color: "#F47458" }} href="#">
                {" "}
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="backimage"></div>
      </div>
    </>
  )
}

export default withStreamlitConnection(CustomSlider)
