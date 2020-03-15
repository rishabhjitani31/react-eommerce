import React, { Component } from "react";
import DashboardOrder from "~/components/DashboardOrder";
import { DashboardOrderPageStyle } from "./styles";

class DashboardOrderPage extends Component {
  render() {
    const { title = "", data = [] } = this.props;
    return (
      <DashboardOrderPageStyle>
        <div className="title">{title}</div>
        {data.map(product => {
          return <DashboardOrder data={product} />;
        })}
      </DashboardOrderPageStyle>
    );
  }
}

export default DashboardOrderPage;
