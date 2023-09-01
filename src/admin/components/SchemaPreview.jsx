import PropTypes from "prop-types";
import { Button, Col, Row, Typography } from "antd";
import SchemaTree from "../components/SchemaTree";
import { SettingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectProperty } from "../../store/schemaWizard";

const SchemaPreview = () => {

  const schema = useSelector((state) => state.schemaWizard.current.schema)

  const dispatch = useDispatch()

  return (
    <div style={{ height: "80%" }}>
      <Row justify="center">
        <Col span={24}>
          <Typography.Title
            level={4}
            style={{ textAlign: "center", margin: "15px 0" }}
          >
            Schema tree
          </Typography.Title>
        </Col>
      </Row>
      <Row
        wrap={false}
        justify="space-between"
        align="middle"
        style={{ padding: "0 10px" }}
      >
        <Typography.Title level={5} style={{ margin: 0 }} ellipsis>
          {(schema && schema.title) || "root"}
        </Typography.Title>
        <Button
          type="link"
          shape="circle"
          icon={<SettingOutlined />}
          onClick={() => dispatch(selectProperty({ path: { schema: [], uiSchema: [] }}))}
          className="tour-root-settings"
        />
      </Row>
      <Row style={{ padding: "0 10px" }}>
        <Typography.Text type="secondary" level={5}>
          {schema && schema.description}
        </Typography.Text>
      </Row>
      <SchemaTree key="schemaTree" />
    </div>
  );
};

SchemaPreview.propTypes = {
  schema: PropTypes.object,
  selectProperty: PropTypes.func,
};

export default SchemaPreview;
