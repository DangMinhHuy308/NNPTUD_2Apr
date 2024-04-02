const { check, validationResult } = require('express-validator');

  const forgotPasswordValidator = [
    check('email').isEmail().withMessage('Email không hợp lệ'),
  ];

  const resetPasswordValidator = [
    check('password').isLength({ min: 8 }).withMessage('Mật khẩu phải chứa ít nhất 8 ký tự'),
  ];
  
  router.post("/forgotPassword", forgotPasswordValidator, async function (req, res, next) {
  });
  
  router.post("/resetPassword/:token", resetPasswordValidator, async function (req, res, next) {
  });

router.post("/changePassword", checkLogin, userValidator.checkStrongPassword(), async function (req, res, next) {
  try {
    const user = req.user; 
    const newPassword = req.body.newPassword;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return ResHelper.RenderRes(res, false, "Mật khẩu mới không đủ mạnh.");
    }
    user.password = newPassword;
    await user.save();
    ResHelper.RenderRes(res, true, "Đổi mật khẩu thành công.");
  } catch (error) {
    ResHelper.RenderRes(res, false, error.message);
  }
});
