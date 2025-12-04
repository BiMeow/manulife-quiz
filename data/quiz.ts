export const listStages = [
  {
    idStage: 1,
    className: "absolute bottom-[10%] left-[16%] z-3 w-[40%]",
    content:
      "Một bữa ăn có thể mất từ 5 đến 7 tiếng (hoặc hơn) để tiêu hóa xong! 🍖 Thịt thà, đồ béo sẽ “nằm lì” lâu hơn trong bụng🥦 Còn rau củ, chất xơ thì nhẹ nhàng “lướt qua” nhanh hơn nhiều!",
    from: "📖 Paris Tourism Board",
    questions: [
      {
        idQuestion: 1,
        question: "Khi bị deadline dí, bạn thường... ",
        answers: [
          { idAnswer: "A.", answer: "Chuẩn bị tủ đồ ăn lành mạnh, có thực mới vực được deadline", value: 1 },
          { idAnswer: "B.", answer: "Làm bạn với cà phê và thuốc lá để tỉnh táo", value: 2 },
          { idAnswer: "C.", answer: "Deadline quan trọng nhất. Quên ăn, quên ngủ", value: 3 },
        ],
      },
      {
        idQuestion: 2,
        question: `Bạn có phải team "ăn sáng là chân ái"?`,
        answers: [
          { idAnswer: "A.", answer: "Ăn đều mỗi ngày, không bao giờ bỏ", value: 1 },
          { idAnswer: "B.", answer: "Tầm 3-4 ngày/tuần, lúc có lúc không", value: 2 },
          { idAnswer: "C.", answer: "Ít hơn 3 ngày/tuần, hoặc gần như... không ăn luôn", value: 3 },
        ],
      },
    ],
  },
  {
    idStage: 2,
    className: "absolute bottom-[32%] left-[44%] z-3 w-[40%]",
    content:
      "🍬 Đồ ngọt tiêu hóa “nhanh như chớp”, nên bạn sẽ sớm thấy đói lại! 🥑 Còn đồ giàu đạm và chất béo thì tiêu hóa chậm rãi, giúp no lâu, đỡ thèm ăn vặt!",
    from: "📖 NASA",
    questions: [
      {
        idQuestion: 3,
        question: "Công việc có thường khiến bạn “căng như dây đàn” không?",
        answers: [
          { idAnswer: "A.", answer: "Hiếm khi - sống chill sống khỏe", value: 1 },
          { idAnswer: "B.", answer: "Thỉnh thoảng thôi - stress nhẹ nhàng", value: 2 },
          { idAnswer: "C.", answer: "Thường xuyên và kéo dài - stress là bạn thân", value: 3 },
        ],
      },
      {
        idQuestion: 4,
        question: "Sau bữa trưa, bạn thường “đãi bụng” kiểu gì?",
        answers: [
          { idAnswer: "A.", answer: "Đi bộ nhẹ nhàng hoặc nghỉ ngơi thư giãn", value: 1 },
          { idAnswer: "B.", answer: "Vào làm việc ngay lập tức", value: 2 },
          { idAnswer: "C.", answer: "Nằm ườn liền, không nhúc nhích luôn", value: 3 },
        ],
      },
    ],
  },
  {
    idStage: 3,
    className: "absolute bottom-[48%] left-[16%] z-3 w-[40%]",
    content:
      "🛡️ Dạ dày là “vệ sĩ” đầu tiên bảo vệ cơ thể bạn! Nhờ có axit trong dạ dày, vi khuẩn và độc tố từ thức ăn sẽ bị “xử đẹp” ngay từ vòng gửi xe!",
    from: "📖 Oxford English Dictionary",
    questions: [
      {
        idQuestion: 5,
        question: "Bạn có hút thuốc hoặc uống rượu/bia không?",
        answers: [
          { idAnswer: "A.", answer: "Không luôn, bụng tui thích lành mạnh", value: 1 },
          { idAnswer: "B.", answer: "Thỉnh thoảng (1-2 lần/tuần)", value: 2 },
          { idAnswer: "C.", answer: "Uống thường xuyên (3 lần trở lên/tuần) ", value: 3 },
        ],
      },
      {
        idQuestion: 6,
        question: "Mối quan hệ của bạn với “thể dục thể thao”?",
        answers: [
          { idAnswer: "A.", answer: "“Bạn đời”- Tập thể dục 3–5 ngày/tuần", value: 1 },
          { idAnswer: "B.", answer: "“Mập mờ” - Tập khi nào rảnh hoặc có hứng", value: 2 },
          { idAnswer: "C.", answer: "“Người lạ” - Gần như không vận động", value: 3 },
        ],
      },
    ],
  },
];

export const listResults = [
  {
    idResult: 1,
    title: "BỤNG MẦM NON",
    subtitle: "Nhóm tốt",
    description: `Bao tử tươi rói - hệ tiêu hóa như tuổi mầm non\n\nLối sống khoa học, ăn ngủ điều độ, bụng nhẹ như gió, miễn dịch ngon lành.\n\nTiếp tục duy trì bằng cách chăm ăn rau, ngủ đều, cười nhiều nhé!`,
    subDescription: "Tuổi bụng Mầm non",
    image: "/images/home/quiz-result-1.png",
    imageDeco: "/images/home/quiz-result-1-deco.png",
    bgColor: "#00a758",
  },
  {
    idResult: 2,
    title: "BỤNG TRUNG NIÊN",
    subtitle: "Nhóm trung bình",
    description: `Bao tử bạn có nền tảng tốt, đôi lúc hơi "dễ dỗi" do lối quen sống chưa tối ưu.\n\nĐây là độ tuổi rất dễ huấn luyện lại hệ tiêu hoá: ăn uống điều độ, bớt lo lắng cẳng thẳng là bụng lại cười toe ngay!`,
    subDescription: "Tuổi bụng Trung niên",
    image: "/images/home/quiz-result-2.png",
    imageDeco: "/images/home/quiz-result-2-deco.png",
    bgColor: "#0a19ff",
  },
  {
    idResult: 3,
    title: "BỤNG XẾ CHIỀU",
    subtitle: "Nhóm báo động",
    description: `Bao tử từng trải - chỉ cần được yêu lại từ đầu!\n\nĐây là lúc bạn cần "yêu thương lại bao tử" bằng nhịp sống lành mạnh hơn: Ăn uống điều độ, chia nhỏ bữa, nhai kỹ, hạn chế rượu bia và cười nhiều hơn nhé!`,
    subDescription: "Tuổi bụng Xế chiều",
    image: "/images/home/quiz-result-3.png",
    imageDeco: "/images/home/quiz-result-3-deco.png",
    bgColor: "#6d4eb6",
  },
];
