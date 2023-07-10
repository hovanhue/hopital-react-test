/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input, Button, Row, Col, Select, Table } from 'antd';
import { useFacultyInfo } from '../hooks/useFacultyInfo';
import { getNameFaculty } from '../utils/utils';
import './InternalMedicine.css';
import {
  dataDietCodeTable,
  optionDietCode,
  optionFeedingSugar,
  optionGenders,
  optionNutritionConsultation,
  optionPathological,
  optionTravelRestrictions,
} from '../utils/type';
import { useHistory } from 'react-router-dom';
import { setInfo } from '../redux/internalMedicine/reducer';
import { useAppDispatch } from '../hooks/useAppDispatch';
const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} bắt buộc nhập!',
  whitespace: '${label} không được nhập khoảng trống.',
  types: {
    email: '${label} không hợp lệ!',
    number: '${label} không hợp lệ!',
  },
};

const InternalMedicine = () => {
  const facultyType = useFacultyInfo();
  const [form] = Form.useForm();
  const { push } = useHistory();
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log('onFinish', values);
    dispatch(setInfo(values));
    push('/result');
  };

  const handleChange = () => {
    form.setFieldsValue({ areas: [] });
  };
  const dataSource = dataDietCodeTable.map((el, index) => {
    return {
      index: index + 1,
      label: el.label,
      value: el.value,
    };
  });

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Chế độ ăn trong bệnh viện',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Ký hiệu',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const initialValues = {
    khoa: getNameFaculty(facultyType ?? ''),
    year: 2000,
    weight: 50,
    height: 165,
    weightMonthAgo: 50,
    reducedWages: 0,
    foodOption: 'Cơm',
  };

  return (
    <div className='container-wrapper'>
      <div className='text-center'>
        <h1 className='title' style={{ fontSize: 24 }}>
          Nhập thông tin
        </h1>
      </div>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        {...layout}
        validateMessages={validateMessages}
        autoComplete='off'
        labelWrap
      >
        <Row gutter={[48, 96]} style={{ display: 'flex', justifyContent: 'start' }}>
          <Col span={12}>
            <Form.Item rules={[{ required: true }]} label='Khoa' name='khoa'>
              <Input type='text' defaultValue={getNameFaculty(facultyType ?? '')} disabled />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='Họ tên người bệnh' name='name'>
              <Input type='text' placeholder='Nguyễn Văn A...' />
            </Form.Item>

            <Form.Item rules={[{ required: true }]} label='Năm sinh' name='year'>
              <Input type='number' placeholder='1990...' />
            </Form.Item>
            <Form.Item label='Giới tính' name='gender' rules={[{ required: true }]}>
              <Select options={optionGenders} onChange={handleChange} />
            </Form.Item>

            <Form.Item rules={[{ required: true }]} label='Chẩn đoán' name='diagnostic'>
              <Input type='text' placeholder='Tăng huyết áp...' />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='Cân nặng' name='weight'>
              <Input type='number' addonAfter='kg' placeholder='50' />
            </Form.Item>

            <Form.Item rules={[{ required: true }]} label='Chiều cao' name='height'>
              <Input type='number' addonAfter='cm' placeholder='165' />
            </Form.Item>
            <Form.Item label='Cân nặng cách đây 1 tháng' name='weightMonthAgo' rules={[{ required: true }]}>
              <Input type='number' addonAfter='cm' placeholder='50' />
            </Form.Item>

            <Form.Item label='Lượng ăn giảm tuần qua' name='reducedWages' rules={[{ required: true }]}>
              <Input type='number' addonAfter='%' placeholder='0' />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='BN hạn chế đi lại' name='travelRestrictions'>
              <Select options={optionTravelRestrictions} onChange={handleChange} />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='Bệnh lý' name='pathological'>
              <Select options={optionPathological} onChange={handleChange} />
            </Form.Item>

            {/* mã chế độ ăn */}
            <Row gutter={16} style={{ marginLeft: 40 }}>
              <Col xs={24} sm={19}>
                <Form.Item
                  rules={[{ required: true }]}
                  label='Mã số chế độ ăn'
                  name='dietCode'
                  style={{ marginLeft: '20%' }}
                >
                  <Select options={optionDietCode} onChange={handleChange} style={{ width: '100%' }} showSearch />
                </Form.Item>
              </Col>
              <Col xs={24} sm={5}>
                <Form.Item name='foodOption' noStyle>
                  <Input type='text' placeholder='Cơm' style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item rules={[{ required: true }]} label='Đường nuôi ăn' name='feedingSugar'>
              <Select options={optionFeedingSugar} onChange={handleChange} />
            </Form.Item>
            <Form.Item rules={[{ required: true }]} label='Mời hội chẩn dinh dưỡng' name='nutritionConsultation'>
              <Select options={optionNutritionConsultation} onChange={handleChange} />
            </Form.Item>

            <Form.Item label='Họ tên bác sĩ khám bệnh' name='doctorName' rules={[{ required: true }]}>
              <Input type='text' placeholder='Nguyễn Văn b' />
            </Form.Item>
          </Col>

          {/* mô tả cho chọn select options */}

          <Col span={12}>
            <div className='wrapper'>
              <h4 className=''>Danh mục và ký hiệu chế độ ăn của người lớn trong bệnh viện </h4>
              <Table dataSource={dataSource} columns={columns} />
            </div>
          </Col>
        </Row>

        <div className='text-center'>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Hoàn tất thông tin
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default InternalMedicine;
