const express = require('express');
const app = express();
const { body, param, validationResult } = require('express-validator');

app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0] });
};
app.post(
  '/user',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('이름을 입력해')
      .isLength({ min: 2 })
      .withMessage('이름은 두글자 이상'),
    body('age')
      .trim()
      .notEmpty()
      .withMessage('나이를 입력해')
      .isInt()
      .withMessage('나이는 숫자'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('이메일을 입력해')
      .isEmail()
      .withMessage('이메일 형식으로 입력해 주세요'),
    body('job.email')
      .trim()
      .notEmpty()
      .withMessage('이메일을 입력해')
      .isEmail()
      .withMessage('이메일 형식으로 입력해 주세요'),
    validate,
  ],
  (req, res, next) => {
    return res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [
    param('email')
      .notEmpty()
      .withMessage('이메일을 입력해')
      .isEmail()
      .withMessage('이메일을 입력해요'),
    validate,
  ],
  (req, res, next) => {
    return res.sendStatus(200);
  }
);

app.listen(30001);
