import html2canvas from 'html2canvas';
import jszip from 'jszip';
import { saveAs } from 'file-saver';
import { R } from '@monorepo/utils';

export const exportAsImage = async (element, imageFileName) => {
  const canvas = await html2canvas(element, { scale: 1, backgroundColor: '#00386b' });
  const image = canvas.toDataURL('image/png', 1.0);
  downloadImage(image, imageFileName);
};

export const downloadImage = (href, fileName) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.style = 'display:none;';
  fakeLink.download = fileName;
  fakeLink.href = href;

  document.body.appendChild(fakeLink);
  fakeLink.click();

  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export const exportAsZip = async (elements = [], fileName = 'file') => {
  const zip = new jszip();

  await Promise.all(
    elements.map(async (e, i) => {
      const canvas = await html2canvas(e);
      const image = canvas.toDataURL('image/jpeg').split(';base64,')[1];
      zip.file(`${i}.png`, image, { base64: true });
    })
  );
  zip.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, `${fileName}.zip`);
  });
};

const getFileName = url => url && R.pipe(R.split('/'), R.last)(url);

export const exportAsZipFromFile = async (paths = [], fileName = 'file', callback) => {
  const zip = new jszip();
  await Promise.all(
    paths.map(async (path, i) => {
      const file = await fetch(path);
      const bynary = file.blob();
      const fileName = getFileName(file.url);
      zip.file(fileName, bynary, { base64: true });
    })
  );

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, `${fileName}.zip`);
    callback && callback();
  });
};
