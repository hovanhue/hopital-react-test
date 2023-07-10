import React, { FC } from 'react';
import { Button, Form, Select } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setType } from '../../redux/faculty/reducer';
import './Home.css';
import { useHistory } from 'react-router-dom';
const options = [
  { label: 'Khoa Nội nhiễm', value: 'TYPE01' },
  { label: 'Khoa Ngoại tổng hợp', value: 'TYPE02' },
  { label: 'Khoa Phụ Sản', value: 'TYPE03' },
  { label: 'Khoa Nhi', value: 'TYPE04' },
];

export const Home: FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { push } = useHistory();

  const onFinish = (values: any) => {
    dispatch(setType(values['type']));
    push('/next');
  };

  const handleChange = () => {
    form.setFieldsValue({ options: [] });
  };

  return (
    <div className='wrap'>
      <div className='title'>Chọn khoa</div>
      <Form form={form} name='dynamic_form_complex' onFinish={onFinish} style={{ maxWidth: 600 }} autoComplete='off'>
        <Form.Item name='type' label='Khoa' rules={[{ required: true, message: 'Vui lòng chọn khoa!' }]}>
          <Select options={options} onChange={handleChange} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {/* <Link to='/next'> */}
            Tiếp tục
            {/* </Link> */}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
