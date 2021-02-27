/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
const Dashboard = () => {

  document.title = "Dashboard | Smart Stock"

  return (
    <>
      <div className="row mb-2 mb-xl-3">
        <div className="col-auto d-none d-sm-block">
          <h3>
            <strong>Analytics</strong> Dashboard
          </h3>
        </div>
        <div className="col-auto ml-auto text-right mt-n1">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 mt-1 mb-0">
              <li className="breadcrumb-item">
                <a href="#">Smart Design</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Dashboards</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Analytics
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6 col-xxl-5 d-flex">
          <div className="w-100">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Sales</h5>
                    <h1 className="mt-1 mb-3">2.382</h1>
                    <div className="mb-1">
                      <span className="text-danger">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right" /> -3.65%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Visitors</h5>
                    <h1 className="mt-1 mb-3">14.212</h1>
                    <div className="mb-1">
                      <span className="text-success">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right" /> 5.25%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Earnings</h5>
                    <h1 className="mt-1 mb-3">$21.300</h1>
                    <div className="mb-1">
                      <span className="text-success">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right" /> 6.65%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Orders</h5>
                    <h1 className="mt-1 mb-3">64</h1>
                    <div className="mb-1">
                      <span className="text-danger">
                        {" "}
                        <i className="mdi mdi-arrow-bottom-right" /> -2.25%{" "}
                      </span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-7">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Recent Movement</h5>
            </div>
            <div className="card-body py-3">
              <div className="chart chart-sm">
                <canvas id="chartjs-dashboard-line" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Browser Usage</h5>
            </div>
            <div className="card-body d-flex">
              <div className="align-self-center w-100">
                <div className="py-3">
                  <div className="chart chart-xs">
                    <canvas id="chartjs-dashboard-pie" />
                  </div>
                </div>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>Chrome</td>
                      <td className="text-right">4306</td>
                    </tr>
                    <tr>
                      <td>Firefox</td>
                      <td className="text-right">3801</td>
                    </tr>
                    <tr>
                      <td>IE</td>
                      <td className="text-right">1689</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Real-Time</h5>
            </div>
            <div className="card-body px-4">
              <div id="world_map" style={{ height: 350 }} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Calendar</h5>
            </div>
            <div className="card-body d-flex">
              <div className="align-self-center w-100">
                <div className="chart">
                  <div id="datetimepicker-dashboard" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Latest Projects</h5>
            </div>
            <table className="table table-hover my-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="d-none d-xl-table-cell">Start Date</th>
                  <th className="d-none d-xl-table-cell">End Date</th>
                  <th>Status</th>
                  <th className="d-none d-md-table-cell">Assignee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Apollo</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                </tr>
                <tr>
                  <td>Project Fireball</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-danger">Cancelled</span>
                  </td>
                  <td className="d-none d-md-table-cell">William Harris</td>
                </tr>
                <tr>
                  <td>Project Hades</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Sharon Lessman</td>
                </tr>
                <tr>
                  <td>Project Nitro</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-warning">In progress</span>
                  </td>
                  <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                </tr>
                <tr>
                  <td>Project Phoenix</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">William Harris</td>
                </tr>
                <tr>
                  <td>Project X</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Sharon Lessman</td>
                </tr>
                <tr>
                  <td>Project Romeo</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="d-none d-md-table-cell">Christina Mason</td>
                </tr>
                <tr>
                  <td>Project Wombat</td>
                  <td className="d-none d-xl-table-cell">01/01/2020</td>
                  <td className="d-none d-xl-table-cell">31/06/2020</td>
                  <td>
                    <span className="badge bg-warning">In progress</span>
                  </td>
                  <td className="d-none d-md-table-cell">William Harris</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xxl-3 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Monthly Sales</h5>
            </div>
            <div className="card-body d-flex w-100">
              <div className="align-self-center chart chart-lg">
                <canvas id="chartjs-dashboard-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
