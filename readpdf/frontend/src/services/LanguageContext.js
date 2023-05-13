import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const translateText = (englishText) => {
   const dictionary = {
    'Filing Status & Dependents':'Tình trạng nộp thuế & Người phụ thuộc',
      'Single': 'Độc thân',
  'Head of Household': 'Chủ hộ',
  'Married Filing Jointly': 'Đã kết hôn nộp chung',
  'Married Filing Separately': 'Đã kết hôn nộp riêng',
  'Unknown': 'Không rõ',
  'Select your filing status for 2022 below': 'Chọn tình trạng nộp thuế của bạn cho năm 2022 dưới đây',
  'Can someone claim you as a dependent?': 'Có ai đó có thể khai bạn là người phụ thuộc?',
  'Are you married?': 'Bạn đã kết hôn chưa?',
  'Will you filed married Jointly?': 'Bạn sẽ nộp chung nếu đã kết hôn?',
  'Do you have any dependent?': 'Bạn có người phụ thuộc nào không?',
  'Enter your Gross Pay (YTD) or Form W-2 Box 1': 'Nhập Tổng thu nhập của bạn (YTD) hoặc ô 1 trên biểu mẫu W-2',
  'Enter your Federal Income Tax Withholding (YTD) or Form W-2 Box 5': 'Nhập số thuế thu nhập liên bang bạn đã khấu trừ (YTD) hoặc ô 5 trên biểu mẫu W-2',
  'Income': 'Thu nhập',
  'Business Income': 'Thu nhập kinh doanh',
  'Enter Your Business Income': 'Nhập thu nhập kinh doanh của bạn',
  'Total Revenue': 'Tổng doanh thu',
  'Total Expenses': 'Tổng chi phí',
  'Net Profit/(Loss)': 'Lợi nhuận/(Lỗ)',
  'Investment Income': 'Thu nhập từ đầu tư',
  'Short-term Capital Gains & Losses (Held less than 1 year)': 'Lợi nhuận và lỗ từ tài sản cố định ngắn hạn (Giữ ít hơn 1 năm)',
  'Total Net short-term capital gain or (lost)': 'Tổng lợi nhuận hoặc (lỗ) từ tài sản cố định ngắn hạn',
  'short-term capital tax': 'Thuế tài sản cố định ngắn hạn',
  'Long-term Capital Gains & Losses (Held more than 1 year)': 'Lợi nhuận và lỗ từ tài sản cố định dài hạn (Giữ hơn 1 năm)',
  'Total Net long-term capital gain or (lost)': 'Tổng lợi nhuận hoặc (lỗ) từ tài sản cố định dài hạn',
  'long-term capital tax': 'Thuế tài sản cố định dài hạn',
  'Rental Income': 'Thu nhập từ cho thuê',
  'Enter Your Rental Income': 'Nhập thu nhập từ cho thuê của bạn',
  'Rental Expenses': 'Chi phí cho thuê',
  'TAX REFUND CALCULATOR': 'MÁY TÍNH HOÀN THUẾ',
  'Estimate your refund': 'Ước tính số tiền hoàn trả của bạn',
  'Use our free tax calculator to get an estimate of what you’ll get back or owe this year.': 'Sử dụng máy tính hoàn thuế miễn phí của chúng tôi để ước tính số tiền bạn sẽ nhận lại hoặc nợ trong năm nay.',
  'Enter your info to get started.': 'Nhập thông tin của bạn để bắt đầu.',
  'Total Income': 'Tổng Thu Nhập',
  'Adjustment To Income': 'Điều chỉnh Thu Nhập',
  'Estimated Taxable Income': 'Thu Nhập Chịu Thuế Ước Tính',
  'Tax Due': 'Thuế Nợ',
  'Other Taxes': 'Các Loại Thuế Khác',
  'Total Tax Due': 'Tổng Thuế Nợ',
  'Refund/(Payment)': 'Hoàn Trả/(Thanh Toán)',
  'Marginal Tax Rate': 'Tỷ Lệ Thuế Biên Mục',
  'Please Enter a valid number':'Vui lòng nhập một số hợp lệ',
  'Enter number of Dependents':'Nhập số lượng Người phụ thuộc',
  'Full-time students age 17-23 or Other Dependent':'Sinh viên toàn thời gian tuổi 17-23 hoặc người phụ thuộc khác',
  'Under Age of 17': 'Dưới 17 tuổi',
  'Credits':'Tín dụng'

      // Add more key-value pairs for other translations
    };

    return dictionary[englishText] || englishText;
  };

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'en' ? 'vi' : 'en'));
  };
//   useEffect(() => {
    
//     setLanguageVersion((prevVersion) => prevVersion + 1);
//   }, [currentLanguage]);
  const contextValue = {
    currentLanguage,
    translateText,
    toggleLanguage,
  };
  return (
    <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
  );
};

export default LanguageContext;