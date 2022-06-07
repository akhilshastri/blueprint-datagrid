import { Code } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Column, ColumnType, Datagrid } from "../../../build";
import { Example } from "../components/example";
import { Variety } from "../data/pepper-varieties/pepper-varieties";

export const ExBasicColumnsEmpty = () => {
  return (
    <Example id="ex-no-data" title="No Data">
      <p>When no data is available, a placeholder is rendered.</p>
      <Datagrid dataSource={[] as Variety[]}>
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
      <p className="new-section">
        The text and icon can be customized with <Code>noDataText</Code> and <Code>noDataIcon</Code>.
      </p>
      <Datagrid
        dataSource={[] as Variety[]}
        noDataText="These are not the droids you are looking for."
        noDataIcon={IconNames.Cross}
      >
        <Column field="name" label="Name" />
        <Column field="species" label="Species" />
        <Column field="shuLowerBound" label="Heat Lower Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="shuUpperBound" label="Heat Upper Bound (SHU)" type={ColumnType.NUMBER} />
        <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
      </Datagrid>
    </Example>
  );
};
