let testSimple_a = Number(+prompt("Nhập điểm kiểm tra lần 1"));
let testSimple_b = Number(+prompt("Nhập điểm kiểm tra lần 2"));
let midtermExam = Number(+prompt("Nhập điểm thi giữa kì"));
let finalExam = Number(+prompt("Nhập điểm thi cuối kì"));

let averageTest = (testSimple_a + testSimple_b) / 2;
let allExam = (averageTest + midtermExam + finalExam) /3;

if (allExam >= 5) {
    console.log("Bạn đã được lên lớp");
    if (allExam >= 9.5 && midtermExam == 10 || finalExam == 10 ) {
        console.log(`Điểm trung bình năm của bạn là ${allExam} 
            Bạn đạt học sinh xuất sắc toàn diện`);
    }
    else if (allExam >= 8) {
        console.log(`Điểm trung bình năm của bạn là ${allExam}
            Bạn xếp hạng giỏi`);
    }
    else if (allExam >= 6.5) {
        console.log(`Điểm trung bình năm của bạn là ${allExam}
            Bạn đạt học sinh khá`);
    }
    else {
        console.log(`Điểm trung bình năm của bạn là ${allExam}
            Bạn đạt học sinh tung bình`);    
    }
}
else{
    console.log("Bạn xếp hạng học sinh yếu");
    if (allExam >= 3.5) {
        console.log(`Điểm trung bình năm của bạn là ${allExam}
            Bạn được lên lớp`);
    } else {
        console.log("Bạn thi lại");
    }            
}