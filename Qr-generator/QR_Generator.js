const qr = new QRCode(
  document.getElementById('qr-code'),
  'http://jindo.dev.naver.com/collie'
);
const generateNewQR = () => {
  const value = document.getElementById('qr-value').value;
  document.getElementById('qr-code').classList.add('qr-code-reveal');
  qr.clear();
  qr.makeCode(value);
};
