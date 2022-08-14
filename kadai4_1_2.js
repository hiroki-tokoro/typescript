// function reply(replyType) {
//   switch (replyType) {
//     case "Accepted":
//       return 0;
//       break;
//     case "Declined":
//       return 1;
//       break;
//   }
// }
// console.log("Accepted");  // 正常
// console.log("Hoge");      // コンパイルエラー
function reply(replyType) {
    switch (replyType) {
        case 'Accepted':
            return 0;
            break;
        case 'Declined':
            return 1;
            break;
    }
}
console.log(reply('Accepted')); // 正常
console.log(reply('Hoge')); // コンパイルエラー
