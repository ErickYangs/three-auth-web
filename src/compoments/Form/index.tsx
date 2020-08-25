import React from 'react'
import { Form, Input, Button, Space, Select, Row, Col } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import { FormLayoutType } from '../../type/tools'
import styles from './Form.module.scss'

const FormLay: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }
  return (
    <div className={styles.fromLay}>
      <Form
        layout={FormLayoutType.Vertical}
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        id="subForm"
      >
        {/* title */}
        <Form.Item
          label="Title"
          name="name"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input placeholder="title" />
        </Form.Item>

        {/* abstract */}
        <Form.Item
          label="Abstract"
          name="abstract"
          rules={[{ required: true, message: 'Please input your abstract!' }]}
        >
          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 6 }}
            placeholder="abstract"
          />
        </Form.Item>

        {/* description */}
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: 'Please input your description!' }
          ]}
        >
          <Input.TextArea
            autoSize={{ minRows: 6, maxRows: 6 }}
            placeholder="description"
          />
        </Form.Item>

        {/* API URL */}
        <Form.Item
          label="API URL"
          name="apiProvider"
          rules={[{ required: true, message: 'Please input your API URL!' }]}
        >
          <Input placeholder="API URL" />
        </Form.Item>

        <Form.Item
          label="Request Method"
          name="requestType"
          rules={[{ required: true, message: 'Miss Request Method' }]}
        >
          <Select
            dropdownClassName="primarySelectCss"
            placeholder="Select Request Method"
          >
            <Select.Option value="GET">GET</Select.Option>
            <Select.Option value="POST">POST</Select.Option>
          </Select>
        </Form.Item>
        <div>
          <div className={'cusPrimaryLabelCss'}>Encryption parameters</div>
          <div>
            <Form.List name="cryptoInfos">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field) => (
                      <Row gutter={16} key={field.key}>
                        <Col className="gutter-row" span={6}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'cryptoKey']}
                            fieldKey={[field.fieldKey, 'cryptoKey']}
                            rules={[
                              { required: true, message: 'Miss CryptoKey' }
                            ]}
                          >
                            <Input placeholder="Enter CryptoKey" />
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'cryptoWhere']}
                            fieldKey={[field.fieldKey, 'cryptoWhere']}
                            rules={[
                              {
                                required: true,
                                message: 'Miss Encryption Location'
                              }
                            ]}
                          >
                            <Select
                              dropdownClassName="primarySelectCss"
                              placeholder="Select Encryption Location"
                            >
                              <Select.Option value={1}>Body</Select.Option>
                              <Select.Option value={2}>Header</Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={5}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'cryptoType']}
                            fieldKey={[field.fieldKey, 'cryptoType']}
                            rules={[
                              {
                                required: true,
                                message: 'Miss Encryption Location'
                              }
                            ]}
                          >
                            <Select
                              dropdownClassName="primarySelectCss"
                              placeholder="Select Encryption Location"
                            >
                              <Select.Option value={1}>MD5</Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'cryptoValue']}
                            fieldKey={[field.fieldKey, 'cryptoValue']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing Encryption Value'
                              }
                            ]}
                          >
                            <Input placeholder="Enter Encryption Value" />
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={1}>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(field.name)
                            }}
                          />
                        </Col>
                      </Row>
                    ))}
                    {fields.length < 3 && (
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add()
                          }}
                          block
                        >
                          <PlusOutlined /> +Add
                        </Button>
                      </Form.Item>
                    )}
                  </div>
                )
              }}
            </Form.List>
          </div>
        </div>

        <div>
          <div className={'cusPrimaryLabelCss'}>
            Request parameter description
          </div>
          <div>
            <Form.List name="params">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field) => (
                      <Row gutter={16} key={field.key}>
                        <Col className="gutter-row" span={4}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'paramName']}
                            fieldKey={[field.fieldKey, 'paramName']}
                            rules={[
                              { required: true, message: 'Miss paramName' }
                            ]}
                          >
                            <Input placeholder="Enter paramName" />
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'required']}
                            fieldKey={[field.fieldKey, 'required']}
                            rules={[
                              {
                                required: true,
                                message: 'Miss required'
                              }
                            ]}
                          >
                            <Select placeholder="Select Required">
                              <Select.Option value={1}>True</Select.Option>
                              <Select.Option value={0}>False</Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={5}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'paramWhere']}
                            fieldKey={[field.fieldKey, 'paramWhere']}
                            rules={[
                              {
                                required: true,
                                message: 'Miss Type'
                              }
                            ]}
                          >
                            <Select
                              dropdownClassName="primarySelectCss"
                              placeholder="Select Type"
                            >
                              <Select.Option value={1}>
                                Path parameter
                              </Select.Option>
                              <Select.Option value={2}>
                                Query parameter
                              </Select.Option>
                              <Select.Option value={3}>
                                Post body parameter
                              </Select.Option>
                              <Select.Option value={4}>
                                Header parameter description
                              </Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'paramTag']}
                            fieldKey={[field.fieldKey, 'paramTag']}
                            rules={[
                              {
                                required: true,
                                message: 'Miss fixed'
                              }
                            ]}
                          >
                            <Select
                              dropdownClassName="primarySelectCss"
                              placeholder="Select fixed"
                            >
                              <Select.Option value={1}>True</Select.Option>
                              <Select.Option value={0}>False</Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'note']}
                            fieldKey={[field.fieldKey, 'note']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing Example'
                              }
                            ]}
                          >
                            <Input placeholder="Enter Example" />
                          </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={1}>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(field.name)
                            }}
                          />
                        </Col>
                      </Row>
                    ))}
                    {fields.length < 3 && (
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add()
                          }}
                          block
                        >
                          <PlusOutlined /> +Add
                        </Button>
                      </Form.Item>
                    )}
                  </div>
                )
              }}
            </Form.List>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormLay
