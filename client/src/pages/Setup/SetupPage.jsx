import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import moment from "moment";
import { server } from "../../api";
import axios from "axios";

export default function SetupPage() {
  const mfgdate = moment().format("YYYY-MM-DD");
  const EMP_NO = JSON.parse(localStorage.getItem("EMP_NO"));
  const EMP_NAME = JSON.parse(localStorage.getItem("EMP_NAME"));

  //input
  const [date, setDate] = useState(mfgdate);
  const [wos, setWos] = useState("");
  const [model, setModel] = useState("");
  const [lotno, setLotno] = useState("");
  const [dieno, setDieno] = useState("");
  const [mc, setMc] = useState("");
  const [shift, setShift] = useState("");

  //routepage
  const navigate = useNavigate();

  if (!EMP_NO) {
    return <LoginPage url="/setup" />;
  }

  const onEnterwos = async (e) => {
    if (e.key === "Enter") {
      const res = await axios.get(server.API_GET_WOS + "/" + wos);
      if (res.data == "") {
        setModel("");
        document.getElementById("MODEL").focus();
      } else {
        setModel(res.data[0].model);
        document.getElementById("LOTNO").focus();
      }
    }
  };

  const onEnterModel = async (e) => {
    if (e.key === "Enter") {
      document.getElementById("LOTNO").focus();
    }
  };
  const onEnterLot = async (e) => {
    if (e.key === "Enter") {
      document.getElementById("DIENO");
    }
  };
  const onEnterDie = async (e) => {
    if (e.key === "Enter") {
      document.getElementById("MC");
    }
  };

  const onEnterMc = async (e) => {
    if (e.key === "Enter") {
      document.getElementById("SHIFT");
    }
  };
  const onEnterShift = async (e) => {
    if(e.key === 'Enter') {
      onSubmit();
    }
  }

  const onSubmit = async () => {

  }

  return (
    <section className="content">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">SETUP</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">SETUP</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Form</h3>
            </div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">DATE</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Wos No</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    value={wos}
                    onChange={(e) => setWos(e.target.value)}
                    onKeyPress={onEnterwos}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Model</label>
                <div className="col-sm-10">
                  <input
                    id="MODEL"
                    type="text"
                    className="form-control"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    onKeyPress={onEnterModel}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Lot No</label>
                <div className="col-sm-10">
                  <input
                    id="LOTNO"
                    type="text"
                    className="form-control"
                    value={lotno}
                    onChange={(e) => setLotno(e.target.value)}
                    onKeyPress={onEnterLot}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Die No</label>
                <div className="col-sm-10">
                  <input
                    id="DIENO"
                    type="text"
                    className="form-control"
                    value={dieno}
                    onChange={(e) => setDieno(e.target.value)}
                    onKeyPress={onEnterDie}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">M/C No</label>
                <div className="col-sm-10">
                  <input
                    id="MC"
                    type="text"
                    className="form-control"
                    value={mc}
                    onChange={(e) => setMc(e.target.value)}
                    onKeyPress={onEnterMc}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Shift</label>
                <div className="col-sm-10">
                  <input
                    id="SHIFT"
                    type="text"
                    className="form-control"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    onKeyPress={onEnterShift}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-info">
                Sign in
              </button>
              <button type="submit" className="btn btn-default float-right">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">User Setup</h3>
            </div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">DATE</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Wos No</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    value={wos}
                    onChange={(e) => setWos(e.target.value)}
                    onKeyPress={onEnterwos}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Model</label>
                <div className="col-sm-10">
                  <input
                    id="MODEL"
                    type="text"
                    className="form-control"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    onKeyPress={onEnterModel}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Lot No</label>
                <div className="col-sm-10">
                  <input
                    id="LOTNO"
                    type="text"
                    className="form-control"
                    value={lotno}
                    onChange={(e) => setLotno(e.target.value)}
                    onKeyPress={onEnterLot}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Die No</label>
                <div className="col-sm-10">
                  <input
                    id="DIENO"
                    type="text"
                    className="form-control"
                    value={dieno}
                    onChange={(e) => setDieno(e.target.value)}
                    onKeyPress={onEnterDie}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">M/C No</label>
                <div className="col-sm-10">
                  <input
                    id="MC"
                    type="text"
                    className="form-control"
                    value={mc}
                    onChange={(e) => setMc(e.target.value)}
                    onKeyPress={onEnterMc}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Shift</label>
                <div className="col-sm-10">
                  <input
                    id="SHIFT"
                    type="text"
                    className="form-control"
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    onKeyPress={onEnterShift}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-info">
                Sign in
              </button>
              <button type="submit" className="btn btn-default float-right">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
