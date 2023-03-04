import * as React from "react";
import {
  PivotViewComponent,
  FieldList,
  Inject,
  CalculatedField,
} from "@syncfusion/ej2-react-pivotview";
import "./App.css";
import { pivotData } from "./data";

function App() {
  const columnFit = (props: any) => {
    for (let i = 0; i < props.columns.length; i++) {
      props.columns[i].autoFit = true;
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <PivotViewComponent
        showTooltip={false}
        showFieldList={true}
          gridSettings={{
            rowHeight:60,
            allowResizing: true,
            allowReordering: true,
            allowSelection: true,
            selectionSettings: {
              mode: "Cell",
              type: "Multiple",
              cellSelectionMode: "Flow",
            },
            gridLines: "Both",
            clipMode: "EllipsisWithTooltip",
            columnRender: columnFit,
          }}
          dataSourceSettings={{
            dataSource: pivotData,
            values: [
              { name: "Sold", caption: "Units Sold" },
              { name: "Amount", caption: "Sold Amount" },
              {
                name: "Total",
                caption: "Amount Sold/Units",
                type: "CalculatedField",
              },
            ],
            rows: [{ name: "Country" }, { name: "Products" }],
            columns: [{ name: "Year" }],
            filters: [{ name: "Quarter" }],
            calculatedFieldSettings: [
              { name: "Total", formula: "Sum(Amount) + Sum(Sold)" },
            ],
          }}
          height={"1000"}
        >
          <Inject services={[FieldList, CalculatedField]}></Inject>
        </PivotViewComponent>
      </div>
    </>
  );
}

export default App;
