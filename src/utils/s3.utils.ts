// eslint-disable-next-line @typescript-eslint/no-var-requires
const EasyYandexS3 = require('easy-yandex-s3');

async function S3Config() {
    const s3 = new EasyYandexS3({
        auth: {
          accessKeyId: '',
          secretAccessKey: '',
        },
        Bucket: '', // например, "my-storage",
        debug: true, // Дебаг в консоли, потом можете удалить в релизе
    });

    return s3;
}

export async function uploadToS3(file) {
    console.log(file);
    const s3 = await S3Config();
    const maybeBuffer = Buffer.from(file.buffer);
    try {
        const upload = await s3.Upload(
            {
              buffer: maybeBuffer,
              name: 'cat.png',
            },
            '/images/'
          );
      console.log(upload)
      return upload;

    } catch (e) {
      console.log(e);
    }
  }