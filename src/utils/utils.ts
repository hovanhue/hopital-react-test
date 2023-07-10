import { FacultyType } from '../redux/faculty/types';

export const getBMI = (weight: number, height: number): number => {
  const changeUnitHeigh = height / 100;
  return weight / Math.pow(changeUnitHeigh, 2);
};

export const checkBMI = (num: number): number => {
  if (num >= 20.5) {
    return 0;
  } else if (num >= 18.5 && num < 20.5) {
    return 1;
  }
  return 2;
};

export const getWeightLoss = (weight: number, weightAgo: number): number => {
  const weightLossPercentage = ((weightAgo - weight) / weightAgo) * 100;
  if (weightLossPercentage <= 0) {
    return 0;
  } else if (weightLossPercentage >= 5 && weightLossPercentage <= 9.9) {
    return 1;
  }
  return 2;
};

export const getCurrentDatePlus7Days = () => {
  const currentDate = new Date(); // Lấy ngày hiện tại
  currentDate.setDate(currentDate.getDate() + 7); // Thêm 7 ngày

  const day = currentDate.getDate(); // Lấy ngày
  const month = currentDate.getMonth() + 1; // Lấy tháng (Chú ý: Tháng trong đối tượng Date bắt đầu từ 0 nên cần cộng thêm 1)
  const year = currentDate.getFullYear(); // Lấy năm

  // Trả về ngày + 7 và tháng, năm hiện tại dưới dạng chuỗi
  return day + '/' + month + '/' + year;
};

// Sử dụng hàm để lấy ngày hiện tại + 7 và tháng, năm hiện tại
var currentDatePlus7 = getCurrentDatePlus7Days();
console.log(currentDatePlus7);

export const getReducedWages = (reduced: number): number => {
  if (reduced <= 49) {
    return 0;
  } else if (reduced >= 50 && reduced < 75) {
    return 1;
  }
  return 2;
};

export const getNameFaculty = (name: string): string => {
  let res = '';
  switch (name) {
    case FacultyType.TYPE01: {
      res = 'Khoa nội nhiễm';
      break;
    }
    case FacultyType.TYPE02: {
      res = 'Khoa ngoại tổng hợp';
      break;
    }
    case FacultyType.TYPE03: {
      res = 'Khoa sản';
      break;
    }
    case FacultyType.TYPE04: {
      res = 'Khoa răng hàm mặt';
      break;
    }
    default: {
      res = 'Lỗi';
      break;
    }
  }
  return res;
};
