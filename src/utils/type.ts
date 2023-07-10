export enum Gender {
  N = 'Nữ',
  Na = 'Nam',
}

export type InternalMedicineType = {
  khoa: string;
  name: string;
  year: string;
  gender: string;
  diagnostic: string;
  weight: number;
  height: number;
  weightMonthAgo: number;
  reducedWages: number;
  travelRestrictions: number;
  pathological: number;
  dietCode: string;
  foodOption: string;
  feedingSugar: number;
  nutritionConsultation: boolean;
  doctorName: string;
};

export const optionGenders = [
  { label: 'Nam', value: 'Nam' },
  { label: 'Nữ', value: 'Nữ' },
];

export const optionTravelRestrictions = [
  { label: 'Không có', value: 0 },
  { label: 'Có', value: 1 },
];
export const optionNutritionConsultation = [
  { label: 'Không', value: false },
  { label: 'Có', value: true },
];

export const optionPathological = [
  { label: 'Bệnh nhẹ - Trung bình', value: 0 },
  { label: 'Bệnh nặng', value: 1 },
  { label: 'Bệnh rất nặng', value: 2 },
];
export const optionFeedingSugar = [
  { label: 'Đường miệng', value: 0 },
  { label: 'Ống thông', value: 1 },
  { label: 'Tĩnh mạch', value: 2 },
];

export const optionDietCode = [
  { label: 'BT01', value: 'BT01' },
  { label: 'BT02', value: 'BT02' },

  { label: 'TN01', value: 'TN01' },
  { label: 'TN02', value: 'TN02' },
  { label: 'TN03', value: 'TN03' },
  { label: 'TN04', value: 'TN04' },
  { label: 'TN05', value: 'TN05' },
  { label: 'TN06', value: 'TN06' },
  { label: 'TN07', value: 'TN07' },
  { label: 'TN08', value: 'TN08' },
  { label: 'TN09', value: 'TN09' },
  { label: 'TN10', value: 'TN10' },
  { label: 'TN11', value: 'TN11' },
  { label: 'TN12', value: 'TN12' },
  { label: 'TN13', value: 'TN13' },
  { label: 'TN14', value: 'TN14' },

  { label: 'DD01', value: 'DD01' },
  { label: 'DD02', value: 'DD02' },
  { label: 'DD03', value: 'DD03' },
  { label: 'DD04', value: 'DD04' },
  { label: 'DD05', value: 'DD05' },
  { label: 'DD06', value: 'DD06' },
  { label: 'DD07', value: 'DD07' },
  { label: 'DD08', value: 'DD08' },
  { label: 'DD09', value: 'DD09' },

  { label: 'GU01', value: 'GU01' },
  { label: 'GU02', value: 'GU02' },
  { label: 'GU03', value: 'GU03' },

  { label: 'TM01', value: 'TM01' },
  { label: 'TM02', value: 'TM02' },
  { label: 'TM03', value: 'TM03' },
  { label: 'TM04', value: 'TM04' },
  { label: 'TM05', value: 'TM05' },
  { label: 'TM06', value: 'TM06' },
  { label: 'TM07', value: 'TM07' },

  { label: 'TH01', value: 'TH01' },
  { label: 'TH02', value: 'TH02' },
  { label: 'TH03', value: 'TH03' },
  { label: 'TH04', value: 'TH04' },

  { label: 'VT01', value: 'VT01' },
  { label: 'VT02', value: 'VT02' },
  { label: 'VT03', value: 'VT03' },
  { label: 'VT04', value: 'VT04' },
  { label: 'VT05', value: 'VT05' },

  { label: 'GM01', value: 'GM01' },
  { label: 'GM02', value: 'GM02' },
  { label: 'GM03', value: 'GM03' },
  { label: 'GM04', value: 'GM04' },
  { label: 'GM05', value: 'GM05' },

  { label: 'PT01', value: 'PT01' },
  { label: 'PT02', value: 'PT02' },
  { label: 'PT03', value: 'PT03' },
  { label: 'PT04', value: 'PT04' },

  { label: 'NK01', value: 'NK01' },
  { label: 'NK02', value: 'NK02' },
  { label: 'NK03', value: 'NK03' },

  { label: 'BO01', value: 'BO01' },
  { label: 'BO02', value: 'BO02' },
  { label: 'BO03', value: 'BO03' },

  { label: 'SK01', value: 'SK01' },
  { label: 'SK02', value: 'SK02' },
  { label: 'SK03', value: 'SK03' },
  { label: 'SK04', value: 'SK04' },
  { label: 'SK05', value: 'SK05' },
  { label: 'SK06', value: 'SK06' },
  { label: 'SK07', value: 'SK07' },
  { label: 'SK06', value: 'SK08' },
];

export const dataDietCodeTable = [
  { label: 'Năng lượng: 1800- 1900 (Kcal)', value: 'BT01' },
  { label: 'Năng lượng: 2200- 2400 (Kcal)', value: 'BT02' },

  { label: 'Viêm cầu thận cấp, thể urê máu cao', value: 'TN01' },
  { label: 'Viêm cầu thận cấp, thể cao huyết áp', value: 'TN02' },
  { label: 'Viêm cầu thận cấp giai đoạn hồi phục', value: 'TN03' },
  { label: 'Viêm cầu thận mạn', value: 'TN04' },
  { label: 'Suy thận cấp, giai đoạn trước lọc thận', value: 'TN05' },
  { label: 'Suy thận cấp, giai đoạn lọc máu (ngoài thận và màng bụng)', value: 'TN06' },
  { label: 'Suy thận mạn, giai đoạn 1-2', value: 'TN07' },
  { label: 'Suy thận mạn, giai đoạn 3- 4 không lọc máu, không tăng kali máu', value: 'TN08' },
  { label: 'Suy thận mạn giai đoạn 3- 4 không lọc máu, tăng kali máu', value: 'TN09' },
  { label: 'Suy thận mạn có lọc máu ngoài thận hoặc thẩm phân phúc mạc 3 lần/tuần', value: 'TN10' },
  { label: 'Suy thận mạn có lọc máu ngoài thận hoặc thẩm phân phúc mạc 2 lần/tuần', value: 'TN11' },
  { label: 'Suy thận mạn có lọc máu ngoài thận hoặc thẩm phân phúc mạc 1 lần/tuần', value: 'TN12' },
  { label: 'Hội chứng thận hư không có tổn thương cầu thận tối thiểu', value: 'TN13' },
  { label: 'Hội chứng thận hư có tổn thương cầu thận tối thiểu hoặc mức lọc cầu thận < 60 ml/phút', value: 'TN14' },

  { label: 'Đái đường đơn thuần', value: 'DD01' },
  { label: 'Đái tháo đường BMI > 25, rối loạn chuyển hóa lipid máu', value: 'DD02' },
  { label: 'Đái tháo đường kết hợp viêm cầu thận, thể urê máu cao', value: 'DD03' },
  { label: 'Đái tháo đường kết hợp viêm cầu thận, thể cao huyết áp', value: 'DD04' },
  { label: 'Đái tháo đường kết hợp viêm cầu thận, giai đoạn phục hồi', value: 'DD05' },
  { label: 'Đái tháo đường kết hợp suy thận mạn độ 1-2', value: 'DD06' },
  { label: 'Đái tháo đường kết hợp suy thận mạn độ 3- 4', value: 'DD07' },
  { label: 'Đái tháo đường kết hợp với suy tim 3-4', value: 'DD08' },
  { label: 'Đái tháo đường kết hợp với gút', value: 'DD09' },

  { label: 'Bệnh gút đơn thuần', value: 'GU01' },
  { label: 'Bệnh gút có kết hợp với suy thận mạn độ 1, 2', value: 'GU02' },
  { label: 'Bệnh gút có kết hợp với suy thận mạn độ 3, 4', value: 'GU03' },

  { label: 'Tăng huyết áp', value: 'TM01' },
  { label: 'Rối loạn lipid máu', value: 'TM02' },
  { label: 'Suy tim giai đoạn 1- 2, nhồi máu cơ tim ổn định', value: 'TM03' },
  { label: 'Suy tim giai đoạn 3, nhồi máu cơ tim sau 7 ngày', value: 'TM04' },
  { label: 'Suy tim giai đoạn 4 (suy tim mất bù)', value: 'TM05' },
  { label: 'Nhồi máu cơ tim, giai đoạn cấp 1-3 ngày đầu', value: 'TM06' },
  { label: 'Nhồi máu cơ tim, giai đoạn tiếp theo', value: 'TM07' },

  { label: 'Viêm loét dạ dày tá tràng, chảy máu dạ dày- tá tràng giai đoạn ổn định', value: 'TH01' },
  { label: 'Chảy máu dạ dày- tá tràng', value: 'TH02' },
  { label: 'Chảy máu dạ dày- tá tràng, giai đoạn đã cầm máu', value: 'TH03' },
  { label: 'Viêm đại tràng, rối loạn tiêu hóa', value: 'TH04' },

  { label: 'Viêm tụy cấp khi có chỉ định ăn, giai đoạn khởi động', value: 'VT01' },
  { label: 'Viêm tụy cấp khi có chỉ định ăn, giai đoạn chuyển tiếp 1', value: 'VT02' },
  { label: 'Viêm tụy cấp khi có chỉ định ăn, giai đoạn chuyển tiếp 2', value: 'VT03' },
  { label: 'Viêm tụy cấp khi có chỉ định ăn, giai đoạn hồi phục', value: 'VT04' },
  { label: 'Viêm tụy mạn', value: 'VT05' },

  { label: 'Viêm gan cấp, giai đoạn đầu', value: 'GM01' },
  { label: 'Viêm gan cấp, giai đoạn tiếp theo', value: 'GM02' },
  { label: 'Viêm gan mạn tính', value: 'GM03' },
  { label: 'Xơ gan', value: 'GM04' },
  { label: 'Hôn mê gan', value: 'GM05' },

  { label: 'Phẫu thuật đường tiêu hoá và ngoài đường tiêu hoá, giai đoạn khởi động ruột', value: 'PT01' },
  { label: 'Phẫu thuật đường tiêu hoá và ngoài đường tiêu hoá, giai đoạn chuyển tiếp 1', value: 'PT02' },
  { label: 'Phẫu thuật đường tiêu hoá và ngoài đường tiêu hoá, giai đoạn chuyển tiếp 2', value: 'PT03' },
  { label: 'Phẫu thuật đường tiêu hoá và ngoài đường tiêu hoá, giai đoạn hồi phục', value: 'PT04' },

  { label: 'Nhiễm khuẩn cấp, giai đoạn toàn phát', value: 'NK01' },
  { label: 'Nhiễm khuẩn cấp, giai đoạn phục hồi', value: 'NK02' },
  { label: 'Nhiễm khuẩn mạn', value: 'NK03' },

  { label: 'Giai đoạn sốc bỏng', value: 'BO01' },
  { label: 'Giai đoạn nhiễm độc, nhiễm trùng và suy mòn bỏng', value: 'BO02' },
  { label: 'Giai đoạn hồi phục', value: 'BO03' },

  { label: 'Phụ nữ  có thai 6 tháng đầu', value: 'SK01' },
  { label: 'Phụ nữ  có thai 3 tháng cuối', value: 'SK02' },
  { label: 'Phụ nữ nuôi con bú 6 tháng đầu', value: 'SK03' },
  { label: 'Nhiễm độc thai nghén', value: 'SK04' },
  { label: 'Đái tháo đường ở phụ nữ có thai', value: 'SK05' },
  { label: 'Viêm cầu thận cấp, suy thận độ 1-2 ở phụ nữ có thai', value: 'SK06' },
  { label: 'Suy tim độ 1-2 ở phụ nữ có thai', value: 'SK07' },
  { label: 'Suy tim độ 3 ở phụ nữ có thai', value: 'SK08' },
];
