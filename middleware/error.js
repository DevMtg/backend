const Errorhandler = require("../utils/Errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Сервер ажлахгүй байна.";

  if (err.name === "CastError") {
    const message = `Буруу бүтэцтэй мэдээлэл байна. ${err.path}`;
    err = new Errorhandler(message, 400);
  }
  if (err.code === 11000) {
    const message = `Талбарын утгыг давхардуулж өгч болохгүй : ${Object.keys(
      err.keyValue
    )}`;
    err = new Errorhandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = `Таны url буруу байна дахиж холболт хийнэ үү`;
    err = new Errorhandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = `Таны токений хугацаа дууссан байна Токен шинэчлэх шаардлагатай`;
    err = new Errorhandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
