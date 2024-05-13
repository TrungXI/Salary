import React, { useState } from 'react';
// import { InputNumber, Checkbox, Tooltip, Modal, Table } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import './index.css'
import { dataSalary, dataTax } from './IModel';
import classnames from 'classnames'

interface IProps {
    salary: number
    salaryBH: number
    personDepentdent: number
}
function CalcSalary(props: IProps) {
    const { salary, personDepentdent, salaryBH } = props
    const [isShowGross, setIsShowGross] = useState<boolean>(false)
    const [tab, setTab] = useState<number>(1)
    const depentSelf = 11000000
    const depentFamily = 4400000
    const p5 = 5000000
    const p10 = 10000000
    const p18 = 18000000
    const p32 = 32000000
    const p52 = 52000000
    const p80 = 80000000
    const _convertRegetPercent = (value?: number) => {
        if (value == null) return '-'
        // if (value < 0) return 0;
        return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const mapKeyValue = (mapKey: string) => {
        var value = 0;
        var tax = (salary / 100 * 89.5) - depentSelf - (depentFamily * personDepentdent) > 0 ? (salary / 100 * 89.5) - depentSelf - (depentFamily * personDepentdent) : 0
        var tax5 = tax > 0 ? (tax > p5 ? p5 : tax) / 100 * 5 : 0
        var tax10 = tax > p5 ? (tax > p10 ? p10 - p5 : (tax - p5)) / 100 * 10 : 0
        var tax15 = tax > p10 ? (tax > p18 ? p18 - p10 : (tax - p10)) / 100 * 15 : 0
        var tax20 = tax > p18 ? (tax > p32 ? p32 - p18 : (tax - p18)) / 100 * 20 : 0
        var tax25 = tax > p32 ? (tax > p52 ? p52 - p32 : (tax - p32)) / 100 * 25 : 0
        var tax30 = tax > p52 ? (tax > p80 ? p80 - p52 : (tax - p52)) / 100 * 30 : 0
        var tax35 = tax > p80 ? (tax - p80) / 100 * 35 : 0
        switch (mapKey) {
            case 'salary':
                value = salary;
                break;
            case 'bhxh':
                value = -(salaryBH / 100 * 8)
                break;
            case 'bhyt':
                value = -(salaryBH / 100 * 1.5)
                break;
            case 'bhtt':
                value = -(salaryBH / 100 * 1)
                break;
            case 'salaryBeforeTax':
                value = salary - (salaryBH / 100 * 10.5) > 0 ? salary - (salaryBH / 100 * 10.5) : 0
                break;
            case 'person1':
                value = depentSelf
                break;
            case 'person2':
                value = depentFamily * personDepentdent
                break;
            case 'salaryTax':
                value = tax
                break;
            case 'tax':
                value = - (tax5 + tax10 + tax15 + tax20 + tax25 + tax30 + tax35)
                break;
            case 'tax5':
                value = tax5
                break;
            case 'tax10':
                value = tax10
                break;
            case 'tax15':
                value = tax15
                break;
            case 'tax20':
                value = tax20
                break;
            case 'tax25':
                value = tax25
                break;
            case 'tax30':
                value = tax30
                break;
            case 'tax35':
                value = tax35
                break;
            case 'salaryActual':
                value = (salary - (salaryBH / 100 * 10.5)) - (tax5 + tax10 + tax15 + tax20 + tax25 + tax30 + tax35) > 0 ? (salary - (salaryBH / 100 * 10.5)) - (tax5 + tax10 + tax15 + tax20 + tax25 + tax30 + tax35) : 0
                break;
            default:
                break;
        }
        return _convertRegetPercent(value);
    }

    const _renderDetailTax = () => {
        return <>
            <div className='table-salary-line'>
                <div>Mức chịu thuế</div>
                <div className='salary-table-percent-const'>Thuế suất</div>
                <div className='salary-table-const'>Tiền nộp</div>
            </div>
            {dataTax.map(a => {
                return <div className='table-salary-line' key={'tax_salary_' + a.id}>
                    <div>{a.name}</div>
                    <div className='salary-table-percent-const'>{a.percent}</div>
                    <div className='salary-table-const'>{mapKeyValue(a.keyValue)}</div>
                </div>
            })}
        </>
    }
    const _renderTable = () => {
        return <>
            <div className='ml-4 header-salary-calc-title justify-content-start'>Diễn giải</div>
            <div className='box-table-salary'>
                {dataSalary.map(a => {
                    return <div className={classnames('table-salary-line', { "actived": a.isActved })}
                        key={'salary_line_' + a.id}>
                        <div className='d-flex'>
                            {a.keyValue === 'tax' &&
                                <div className='btn-text-primary'
                                    onClick={() => { setIsShowGross(!isShowGross) }} >
                                    {!isShowGross ? "Xem chi tiết" : "Đóng"}
                                </div>}
                            {a.name}
                        </div>
                        <div className='salary-table-const'>
                            {mapKeyValue(a.keyValue)}
                        </div>
                    </div>
                })}
                {isShowGross && _renderDetailTax()}
            </div>
        </>
    }
    const _renderGrossNet = () => {
        return <div className='box-salary-item'>
            <div className='header-salary-calc-title'>Gross&nbsp;&nbsp;<ArrowRightOutlined />&nbsp;&nbsp;Next</div>
            <div className='box-salary-result'>
                <div className='box-salary-result-title'>Thu nhập Net</div>
                <div className='d-flex flex-column align-items-start'>
                    <div className='salary-result'>{`${mapKeyValue("salaryActual")} VND`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                    <div className='salary-note'>Net = Thu nhập trước thuế - Thuế thu nhập cá nhân</div>
                </div>
            </div>
            {_renderTable()}
        </div>
    }

    const _renderNetGross = () => {
        return <div className='box-salary-item'>
            <div className='header-salary-calc-title'>Net&nbsp;&nbsp;<ArrowRightOutlined />&nbsp;&nbsp;Gross</div>
            <div className='box-salary-result'>
                <div className='box-salary-result-title'>Thu nhập Gross</div>
                <div className='d-flex flex-column align-items-start'>
                    <div className='salary-result'>{`${mapKeyValue("salaryActual")} VND`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </div>
            </div>
            {_renderTable()}
        </div>
    }
    return (<>
        <div className='line-salary'>
            <div className={classnames('btn-tab-item', { "actived": tab === 1 })}
                onClick={() => { setTab(1) }}
            >Gross <ArrowRightOutlined /> Net</div>
            <div className={classnames('btn-tab-item', { "actived": tab === 2 })}
                onClick={() => { setTab(2) }}
            >Net <ArrowRightOutlined /> Gross</div>
        </div>
        <div>
            {tab === 1 ? _renderGrossNet() : tab === 2 ? _renderNetGross() : null}
        </div>
    </>
    );
}

export default CalcSalary;