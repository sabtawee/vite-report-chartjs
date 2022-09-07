import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { server } from "../../api";
import axios from "axios";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartPmComponent() {
  const mfgdate = moment.utc().format("YYYY-MM-DD");
  const [datas, setData] = useState([]);
  const [date, setDate] = useState(mfgdate);

  useEffect(() => {
    getweight();
  }, []);

  const getweight = async () => {
    setData([])
    const res = await axios.get(server.API_GET_WEIGHT_PM + "/" + date);
    setData(res.data);  
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Weight for Data PM " + date,
      },
    },
    responsive: true,
    scales: {},
  };

  const labels = datas.map((data) => "Coil " + data.coilno);

  const data = {
    labels,
    datasets: [
      {
        label: "Weight",
        data: datas.map((data) => data.weight),
        backgroundColor: "rgb(15, 25, 65)",
      },
    ],
  };

  return (
    <>
      <div className="col">
        <div className="card card-outline card-success">
          <div className="card-header">
            <h3 className="card-title">PM Weight</h3>
          </div>
          <div className="card-body">
            <div className="chart">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand"></div>
                <div className="chartjs-size-monitor-shrink"></div>
              </div>
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="card card-outline card-success">
          <div className="card-header">
            <h3 className="card-title">PM Weight Data</h3>
          </div>
          <div className="card-body">
            <div className="chart">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand"></div>
                <div className="chartjs-size-monitor-shrink"></div>
              </div>
              <div className="mt-2">
                <div className="row">
                  <div className="col-3">
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="col-3">
                    <button className="btn btn-primary" onClick={getweight}>Search</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-2 mb-2">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Coil No</th>
                          <th>Weight</th>
                          <th>Scan Time</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {datas.length > 0 ? (
                          datas.map((result, i) => (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">
                                Coil {result.coilno}
                              </td>
                              <td className="text-center">{result.weight}</td>
                              <td className="text-center">              
                                {moment.utc(result.scantime).format(
                                  "YY-MM-DD hh:mm:ss"
                                )}
                              </td>
                              <td className="text-center">{result.status}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={11} className="text-center">
                              <div className="overlay">
                                <i className="fas fa-1x fa-sync-alt fa-spin" />
                                <div className="text-bold pt-2">
                                  {" "}
                                  ไม่มีข้อมูล...
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
