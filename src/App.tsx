import React, { useState } from 'react';
import { InputNumber, Checkbox, Tooltip, Modal } from 'antd';
import { QuestionCircleOutlined, MinusCircleOutlined, PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import './App.css';
import CalcSalary from './Components/CalcSalary';

function App() {
  const [salary, setSalary] = useState<number>(15000000)
  const [salaryBH, setSalaryBH] = useState<number>(0)
  const [personDepentdent, setPersonDepentdent] = useState<number>(0);
  const [isOpenSalaryBH, setIsOpenSalaryBH] = useState<boolean>(false);
  const [isShowHint, setIsShowHint] = useState<boolean>(false);

  const _renderModal = () => {
    return <Modal
      title="Giải thích mức đóng bảo hiểm khác"
      footer={null}
      open={isShowHint} onCancel={() => setIsShowHint(false)}>
      <div>Bạn sẽ điền mức đóng bảo hiểm khi mức lương đóng bảo hiểm khác với mức lương chính thức.</div>
      <div>VD:</div>
      <div>- Lương chính thức của bạn là 12,000,000 VND</div>
      <div>- Mức lương đóng bảo hiểm là 7,000,000 VND</div>
    </Modal>
  }

  return (
    <div className="App">
      {_renderModal()}
      <div className='header-salary'>Salary Converter</div>
      <div className='d-flex justify-content-between' style={{ margin: "0 100px" }}>
        <div>
          <div className='line-salary'>
            <div className='salary-item-title'>Lương thảo thuận :</div>
            <div className=''>
              <InputNumber<number>
                style={{ width: 300 }}
                defaultValue={0}
                value={salary}
                suffix="VND"
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                onChange={(data) => { setSalary(data ? data : 0) }}
              />
            </div>
          </div>
          <div className='line-salary'>
            <div className='salary-item-title'>Lương đóng bảo hiểm :</div>
            <div className=''>
              {!isOpenSalaryBH
                ? <InputNumber<string>
                  style={{ width: 300 }}
                  value={"Theo lương thảo thuận"}
                  suffix="VND"
                  disabled
                />
                : <InputNumber<number>
                  style={{ width: 300 }}
                  defaultValue={0}
                  value={salaryBH}
                  suffix="VND"
                  formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                  onChange={(data) => { setSalaryBH(data ? data : 0) }}
                />
              }
            </div>
            <div className='ml-3'>
              <div className='d-flex'>
                <Checkbox
                  checked={isOpenSalaryBH}
                  onChange={(e) => { setIsOpenSalaryBH(e.target.checked) }} >
                  Mức đóng bảo hiểm khác&nbsp;
                </Checkbox>
                <div className='cursor-pointer' onClick={() => { setIsShowHint(true) }}><QuestionCircleOutlined /></div>
              </div>
            </div>
          </div>
          <div className='line-salary'>
            <div className='salary-item-title'>Số người phụ thuộc :</div>
            <div className='d-flex align-items-center'>
              <div>
                <InputNumber<number>
                  style={{ width: 192 }}
                  defaultValue={0}
                  value={personDepentdent}
                  onChange={(data) => { setPersonDepentdent(data ? data : 0) }}
                />
              </div>
              <div className='icon-advance-input'
                onClick={() => {
                  if (personDepentdent === 0) return
                  setPersonDepentdent(personDepentdent - 1);
                }}>
                <MinusCircleOutlined style={{ fontSize: "24px" }} />
              </div>
              <div className='icon-advance-input'
                onClick={() => { setPersonDepentdent(personDepentdent + 1); }}>
                <PlusCircleOutlined style={{ fontSize: "24px" }} />
              </div>
              <div className='icon-advance-input'
                onClick={() => { setPersonDepentdent(0); }} >
                <ReloadOutlined style={{ fontSize: "24px" }} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <CalcSalary
            salary={salary}
            salaryBH={isOpenSalaryBH ? salaryBH : salary}
            personDepentdent={personDepentdent} />
        </div>
      </div>
    </div >
  );
}

export default App;
