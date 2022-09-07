import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "sweetalert2/src/sweetalert2.scss";
//css
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/jqvmap/jqvmap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.css";
import "admin-lte/plugins/summernote/summernote-bs4.min.css";
//datatable css
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";

//js
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/chart.js/Chart.min.js";
import "admin-lte/plugins/sparklines/sparkline.js";
import "admin-lte/plugins/moment/moment.min.js";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/plugins/summernote/summernote-bs4.min.js";
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "admin-lte/dist/js/adminlte.js";
//datatable js
import "admin-lte/plugins/datatables/jquery.dataTables.min.js";
import "admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js";
import "admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js";
import "admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js";
import "admin-lte/plugins/datatables-buttons/js/dataTables.buttons.min.js";
import "admin-lte/plugins/datatables-buttons/js/buttons.bootstrap4.min.js";
import "admin-lte/plugins/jszip/jszip.min.js";
import "admin-lte/plugins/pdfmake/pdfmake.min.js";
import "admin-lte/plugins/pdfmake/vfs_fonts.js";
import "admin-lte/plugins/datatables-buttons/js/buttons.html5.min.js";
import "admin-lte/plugins/datatables-buttons/js/buttons.print.min.js";
import "admin-lte/plugins/datatables-buttons/js/buttons.colVis.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);