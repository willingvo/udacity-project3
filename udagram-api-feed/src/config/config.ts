export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};


// export const config = {
//   'username': 'postgres',
//   'password': '123456',
//   'database': 'postgres',
//   'host': '127.0.0.1',
//   'dialect': 'postgres',
//   'aws_region': 'us-east-2',
//   'aws_profile': 'default',
//   'aws_media_bucket': 'willing-137949000194-dev',
//   'url': 'http://localhost:8100',
//   'jwt': {
//     'secret': 'willing',
//   },
// };
