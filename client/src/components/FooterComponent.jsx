import Banner from "../images/minebeamitsumi_logo_en.png"

export default function FooterComponent() {
    return (
      <>
        <footer className="main-footer">
          <strong>
            <img src={Banner} width="130"/>
          </strong>
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> Start Project 30082022
          </div>
        </footer>
        <aside className="control-sidebar control-sidebar-dark" />
      </>
    );
  }
