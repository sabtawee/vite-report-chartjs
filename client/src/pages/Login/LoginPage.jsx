import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { server } from "../../api";

export default function LoginPage(props) {
  const [empno, setEmpno] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 300);
  }, []);

  const Login = async () => {
    try {
      if (event.key === "Enter") {
        const response = await axios.post(server.API_LOGIN, {
          emp_no: empno,
        });
        if (response.data != "") {
          let result = response["data"][0];
          Swal.fire("Login Success", result.emp_name, "success", {
            buttons: false,
            timer: 2000,
          }).then((value) => {
            localStorage.setItem("EMP_NO", JSON.stringify(result.emp_no));
            localStorage.setItem("EMP_NAME", JSON.stringify(result.emp_name));
            window.location.href = props.url;
          });
        } else {
          Swal.fire("Failed", "ไม่มี EMP นี้ในระบบ", "error");
        }
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <>
      {!loading ? (
        <LoadingComponent />
      ) : (
        <div className="login-page">
          <div className="login-box">
            <div className="login-logo"></div>
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Input Emp</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="EMP No."
                    onChange={(e) => setEmpno(e.target.value)}
                    onKeyPress={Login}
                    autoFocus
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
