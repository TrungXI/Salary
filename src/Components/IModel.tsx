export interface ITable {
    id: number,
    name: string,
    percent: string,
    keyValue: string,
    isActved: boolean
}
export const dataTaxGross = [
    { id: 1, name: "Đến 5 triệu VNĐ", percent: "5%", keyValue: 'tax5' },
    { id: 2, name: "Trên 5 đến 10 triệu VNĐ", percent: "10%", keyValue: 'tax10' },
    { id: 3, name: "Trên 10 đến 18 triệu VNĐ", percent: "15%", keyValue: 'tax15' },
    { id: 4, name: "Trên 18 đến 32 triệu VNĐ", percent: "20%", keyValue: 'tax20' },
    { id: 5, name: "Trên 32 đến 52 triệu VNĐ", percent: "25%", keyValue: 'tax25' },
    { id: 6, name: "Trên 52 đến 80 triệu VNĐ", percent: "30%", keyValue: 'tax30' },
    { id: 7, name: "Trên 80 triệu VNĐ", percent: "35%", keyValue: 'tax35' },
] as ITable[]

export const dataSalaryGross = [
    { id: 1, name: "LƯƠNG THẢO THUẬN", isActved: true, keyValue: "salary" },
    { id: 2, name: "Bảo hiểm xã hội (8%)", keyValue: "bhxh" },
    { id: 3, name: "Bảo hiểm y tế (1.5%)", keyValue: "bhyt" },
    { id: 4, name: "Bảo hiểm thất nghiệp (1%)", keyValue: "bhtt" },
    { id: 5, name: "Thu nhập trước thuế	", isActved: true, keyValue: "salaryBeforeTax" },
    { id: 6, name: "Giảm trừ gia cảnh bản thân", keyValue: "person1" },
    { id: 7, name: "Giảm trừ gia cảnh người phụ thuộc", keyValue: "person2" },
    { id: 8, name: "Thu nhập chịu thuế", keyValue: "salaryTax" },
    { id: 9, name: "Thuế thu nhập cá nhân(*)", isActved: true, keyValue: "tax" },
] as ITable[]

export const dataSalaryNet = [
    { id: 1, name: "LƯƠNG THẢO THUẬN", isActved: true, keyValue: "salary" },
    { id: 2, name: "Bảo hiểm xã hội (8%)", keyValue: "bhxh" },
    { id: 3, name: "Bảo hiểm y tế (1.5%)", keyValue: "bhyt" },
    { id: 4, name: "Bảo hiểm thất nghiệp (1%)", keyValue: "bhtt" },
    { id: 5, name: "Thu nhập trước thuế	", isActved: true, keyValue: "salaryBeforeTax" },
    { id: 6, name: "Giảm trừ gia cảnh bản thân", keyValue: "person1" },
    { id: 7, name: "Giảm trừ gia cảnh người phụ thuộc", keyValue: "person2" },
    { id: 8, name: "Thu nhập chịu thuế", keyValue: "salaryTax" },
    { id: 9, name: "Thuế thu nhập cá nhân(*)", isActved: true, keyValue: "tax" },
] as ITable[]

export const dataTaxNet = [
    { id: 1, name: "Đến 5 triệu VNĐ", percent: "5%", keyValue: 'tax5' },
    { id: 2, name: "Trên 5 đến 10 triệu VNĐ", percent: "10%", keyValue: 'tax10' },
    { id: 3, name: "Trên 10 đến 18 triệu VNĐ", percent: "15%", keyValue: 'tax15' },
    { id: 4, name: "Trên 18 đến 32 triệu VNĐ", percent: "20%", keyValue: 'tax20' },
    { id: 5, name: "Trên 32 đến 52 triệu VNĐ", percent: "25%", keyValue: 'tax25' },
    { id: 6, name: "Trên 52 đến 80 triệu VNĐ", percent: "30%", keyValue: 'tax30' },
    { id: 7, name: "Trên 80 triệu VNĐ", percent: "35%", keyValue: 'tax35' },
] as ITable[]
